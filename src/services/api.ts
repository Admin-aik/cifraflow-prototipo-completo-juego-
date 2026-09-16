/**
 * CifraFlow Prototype — Backend API client
 *
 * Frontend-only app: it ALWAYS talks to the NestJS backend (cifraflow-backend),
 * which proxies / verifies authentication and scoring against Firebase.
 * This app never connects to Firebase directly.
 *
 * Base URL: VITE_API_URL (default: http://localhost:3153/api — local backend .env uses PORT=3153)
 */

export interface AuthUser {
  id: string;
  email: string;
  firebaseUid?: string;
  firstName?: string | null;
  lastName?: string | null;
  displayName?: string | null;
  roles?: string[];
  isActive?: boolean;
  emailVerified?: boolean;
  avatarUrl?: string | null;
  [key: string]: unknown;
}

export interface AuthSession {
  token: string;
  refreshToken?: string;
  user: AuthUser;
}

const API_BASE: string =
  (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/+$/, '') ??
  'http://localhost:3153/api';

const TOKEN_KEY = 'cifraflow_token';

export function getApiBase(): string {
  return API_BASE;
}

export function getGameId(): string {
  return (import.meta.env.VITE_GAME_ID as string | undefined) ?? '';
}

export function getGoogleClientId(): string {
  return (import.meta.env.VITE_GOOGLE_CLIENT_ID as string | undefined) ?? '';
}

/**
 * Content id used for the modern score-transmission flow (gaming-core).
 * Uses VITE_CONTENT_ID when set, otherwise falls back to VITE_GAME_ID.
 */
export function getContentId(): string {
  return (
    (import.meta.env.VITE_CONTENT_ID as string | undefined) ??
    (import.meta.env.VITE_GAME_ID as string | undefined) ??
    ''
  );
}

export function getToken(): string | null {
  if (typeof localStorage === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string | null): void {
  if (typeof localStorage === 'undefined') return;
  if (token) localStorage.setItem(TOKEN_KEY, token);
  else localStorage.removeItem(TOKEN_KEY);
}

export class ApiError extends Error {
  status: number;
  code?: string;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

async function request<T>(
  path: string,
  options: RequestInit = {},
  auth = false,
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  let res: Response;
  try {
    res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  } catch (err) {
    const detail = err instanceof Error ? err.message : 'Error de red';
    throw new ApiError(`No se pudo conectar con el servidor (${API_BASE}). ${detail}`, 0);
  }

  if (!res.ok) {
    let message = `Error HTTP ${res.status}`;
    let code: string | undefined;
    try {
      const body = await res.json();
      message =
        typeof body?.message === 'string'
          ? body.message
          : body?.error ?? body?.message ?? message;
      code = body?.code;
    } catch {
      // no JSON body
    }
    throw new ApiError(message, res.status, code);
  }

  return (await res.json()) as T;
}

/* ---------------- AUTH ---------------- */

export async function loginWithCredentials(
  email: string,
  password: string,
): Promise<AuthSession> {
  const data = await request<{ token: string; refreshToken?: string; user: AuthUser }>(
    '/auth/login-with-credentials',
    { method: 'POST', body: JSON.stringify({ email, password }) },
  );
  setToken(data.token);
  return { token: data.token, refreshToken: data.refreshToken, user: data.user };
}

export async function loginWithGoogle(idToken: string): Promise<AuthSession> {
  const data = await request<{ token: string; user: AuthUser }>('/auth/login-with-google', {
    method: 'POST',
    body: JSON.stringify({ idToken }),
  });
  setToken(data.token);
  return { token: data.token, user: data.user };
}

export async function getMe(): Promise<AuthUser> {
  const data = await request<{ success: boolean; data: AuthUser }>('/auth/me', { method: 'GET' }, true);
  return data.data;
}

/* ---------------- SCORING ---------------- */

export interface SyncResultItem {
  gameId: string;
  score: number;
  duration: number;
  gameVersion: string;
  signature: string;
}

export interface SyncResultsResponse {
  synced: number;
  results: { gameId: string; score: number; success: boolean }[];
}

export async function syncResults(results: SyncResultItem[]): Promise<SyncResultsResponse> {
  const data = await request<{ success: boolean; data: SyncResultsResponse }>(
    '/play/sync-results',
    { method: 'POST', body: JSON.stringify({ results }) },
    true,
  );
  return data.data;
}

/* ---------------- GAMING-CORE SCORE TRANSMISSION (transmitir-puntos) ---------------- */

export interface TransmitirPuntosPayload {
  tokenIdentidad: string;
  contentId: string;
  transmissionId: string;
  startDateTime: string;
  endDateTime: string;
  durationSeconds: number;
  gamePoints: number;
  versionContent: string;
}

export interface TransmitirPuntosResponse {
  eventoId: string;
  aikTokens: number;
  effectiveRate: number;
}

export interface ScoreProfile {
  userId: string;
  saldoGeneral: number;
  accumulators: { type: string; contextId: string | null; aikTokens: number }[];
  events: {
    id: string;
    contentId: string;
    transmissionId: string;
    gamePoints: number;
    effectiveRate: number;
    aikTokens: number;
    createdAt: string;
  }[];
}

/**
 * Issue the content identity token for the current user (must run before
 * transmitting points). `POST /api/contents/:id/autenticar`.
 */
export async function authenticateContent(contentId: string): Promise<{ token: string }> {
  const data = await request<{ success: boolean; data: { token: string } }>(
    `/contents/${contentId}/autenticar`,
    { method: 'POST' },
    true,
  );
  return data.data;
}

/**
 * Explicit, idempotent score transmission. `POST /api/contents/:id/transmitir-puntos`.
 * - Re-sending the SAME transmissionId returns/throws a duplicate error
 *   (DuplicateTransmissionError) reported to the user as a no-value operation.
 */
export async function transmitirPuntos(
  contentId: string,
  payload: Omit<TransmitirPuntosPayload, 'contentId'>,
): Promise<TransmitirPuntosResponse> {
  const data = await request<{ success: boolean; data: TransmitirPuntosResponse }>(
    `/contents/${contentId}/transmitir-puntos`,
    { method: 'POST', body: JSON.stringify({ ...payload, contentId }) },
    true,
  );
  return data.data;
}

/** Player score profile with the total accumulated balance (`saldoGeneral`). */
export async function getPlayerScoreProfile(): Promise<ScoreProfile> {
  const data = await request<{ success: boolean; data: ScoreProfile }>(
    '/player/score-profile',
    { method: 'GET' },
    true,
  );
  return data.data;
}

/** Returns true when the error is a duplicate-transmission (no-value op). */
export function isDuplicateTransmission(err: unknown): boolean {
  if (err instanceof ApiError) {
    return (
      err.code === 'DUPLICATE_TRANSMISSION' ||
      err.code === 'GAMING_CORE_DUPLICATE_TRANSMISSION' ||
      err.status === 409 ||
      /duplicat|ya fue transmitid/i.test(err.message)
    );
  }
  return false;
}