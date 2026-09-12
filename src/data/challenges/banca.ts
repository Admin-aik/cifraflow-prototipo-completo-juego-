import { GameplayMission } from '../../types';
import { BCV_RATE_STRING } from '../bcvServiceFallback';

export const BANCA_15_CHALLENGES: GameplayMission[] = [
  // Desafío 1 (201)
  {
    id: 201,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 1,
    level_title: "Desafío 1 de 15: Requisitos de Identidad y Biometría Facial",
    title: "Apertura Digital en BDV / Plaza / Tesoro",
    source_text: "El estudiante desea abrir su primera cuenta digital en el Banco de Venezuela (BDV) o Banco Plaza. El sistema solicita la captura de la Cédula de Identidad laminada y prueba de vida facial.",
    question: "¿Qué práctica garantiza que la apertura de la cuenta sea legítima, segura y a tu nombre?",
    options: [
      {
        id: 1,
        text: "Permitir que un gestor externo en redes sociales realice el trámite a cambio de una pequeña comisión.",
        feedback_immediate: "Entregar tus credenciales, cédula y biometría a intermediarios facilita la suplantación de identidad y delitos bancarios.",
        points_delta: -25
      },
      {
        id: 2,
        text: "Completar el registro exclusivamente a través de la aplicación oficial del banco con tu propia Cédula y biometría directa.",
        feedback_immediate: "¡Cumplimiento impecable! Cumpliste con las normas de Debida Diligencia Bancaria (KYC) y protección de identidad ciudadana.",
        points_delta: 100
      },
      {
        id: 3,
        text: "Subir una fotografía editada de la cédula para ocultar la fecha de nacimiento.",
        feedback_immediate: "Los algoritmos bancarios rechazan documentos manipulados y bloquean permanentemente el registro por inconsistencias.",
        points_delta: -25
      }
    ],
    correct_option_id: 2,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "+15% Efectividad en Operaciones de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 2 (202)
  {
    id: 202,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 2,
    level_title: "Desafío 2 de 15: Pago Móvil Seguro y Tasa Oficial BCV",
    title: "Transacción Comercial y Verificación de la Tasa BCV Oficial",
    source_text: "Vas a realizar un Pago Móvil por un servicio cotizado en $10 USD. La tasa oficial del Banco Central de Venezuela (BCV) para hoy está publicada y en vigencia horaria, pero el comerciante te exige pagar a una tasa paralela no autorizada con un sobreprecio de 25%.",
    question: "¿Cuál es la conducta financiera y legal correcta según la normativa bancaria venezolana?",
    options: [
      {
        id: 1,
        text: "Exigir el cobro exacto a la tasa oficial publicada por el BCV para el día y verificar el código de referencia en el aplicativo bancario emisor.",
        feedback_immediate: "¡Extraordinaria gestión! Aplicaste la tasa legal BCV oficial y validaste el débito y referencia en tu banco emisor.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Pagar a la tasa no oficial con sobreprecio y enviar una captura de pantalla por WhatsApp sin revisar si los fondos salieron de tu cuenta.",
        feedback_immediate: "Aceptar sobreprecios infringe la ley bancaria cambiaria y confiar únicamente en capturas fomenta fraudes.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Desactivar la confirmación SMS y token digital de tu Pago Móvil para transferir más rápido.",
        feedback_immediate: "Desactivar tokens o factores 2FA expone tu cuenta bancaria a vaciados y transferencias no autorizadas.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Blindaje de Nómina y Transacciones de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 3 (203)
  {
    id: 203,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 3,
    level_title: "Desafío 3 de 15: Conciliación, IGTF y Tarjetas Biométricas",
    title: "Auditoría de Débitos y Prevención de Bloqueos en Cuentas",
    source_text: "Al cierre de mes, notas un débito bancario correspondiente al Impuesto a las Grandes Transacciones Financieras (IGTF) en divisas y comisiones interbancarias SUDEBAN. Asimismo, debes configurar límites de transferencias diarias.",
    question: "¿Cuál es el protocolo de conciliación bancaria para evitar fugas de capital y bloqueos preventivos?",
    options: [
      {
        id: 1,
        text: "Cotejar el extracto bancario con tus recibos de pago, registrar el IGTF legal y calibrar los límites diarios en la banca en línea.",
        feedback_immediate: "¡Maestría en gestión bancaria! La conciliación mensual regular detecta cobros indebidos y mantiene tu perfil crediticio impecable.",
        points_delta: 100
      },
      {
        id: 2,
        text: "No revisar los estados de cuenta mensuales y suponer que el banco nunca se equivoca en sus cálculos.",
        feedback_immediate: "Omitir la conciliación impide detectar suscripciones fantasmas, débitos duplicados o fraudes hormiga.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Compartir tu clave de coordenadas o token dinámico con un soporte telefónico no verificado para que concilien por ti.",
        feedback_immediate: "Ningún banco legítimo pide tus códigos de coordenadas o tokens dinámicos por teléfono.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Gobernanza Financiera de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 4 (204)
  {
    id: 204,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 4,
    level_title: "Desafío 4 de 15: Contraseñas y Token Dinámico",
    title: "Creación de Claves Bancarias Inmunes a Ataques por Diccionario",
    source_text: "Al configurar tu usuario de banca en línea, el sistema te solicita definir tu clave de acceso alfanumérica y afiliar la app de Token Dinámico (OTP).",
    question: "¿Cuál combinación de seguridad previene el descifrado por fuerza bruta o adivinación social?",
    options: [
      {
        id: 1,
        text: "Usar una frase de contraseña única mayor a 14 caracteres combinando símbolos, sin nombres familiares ni fechas, respaldada por Token Dinámico en app autenticadora.",
        feedback_immediate: "¡Blindaje criptográfico de nivel bancario! Has protegido tu acceso impidiendo ataques automatizados o espionaje de perfiles sociales.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Usar tu número de cédula seguido de tu año de nacimiento para no olvidarla jamás.",
        feedback_immediate: "Las contraseñas basadas en datos públicos de cédula son las primeras que prueban los ciberdelincuentes.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Anotar la clave en un papel adhesivo y pegarlo detrás de la tarjeta de débito.",
        feedback_immediate: "Dejar la clave junto a la tarjeta entrega acceso físico total a quien encuentre el plástico en caso de pérdida.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Criptografía de Accesos de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 5 (205)
  {
    id: 205,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 5,
    level_title: "Desafío 5 de 15: Chip EMV vs Banda Magnética",
    title: "Operaciones Seguras en Puntos de Venta (POS)",
    source_text: "En un comercio, el cajero intenta pasar tu tarjeta de débito deslizando la banda magnética varias veces, alegando que el lector de chip 'está lento'.",
    question: "¿Cuál es el riesgo de permitir el deslizamiento por banda magnética en lugar del chip inteligente EMV?",
    options: [
      {
        id: 1,
        text: "La banda magnética contiene datos estáticos fáciles de clonar mediante skimmers, mientras que el chip genera un criptograma único por transacción.",
        feedback_immediate: "¡Excelente conocimiento técnico bancario! El chip EMV genera firmas dinámicas inviolables que impiden la clonación del plástico.",
        points_delta: 100
      },
      {
        id: 2,
        text: "La banda magnética gasta más electricidad del punto de venta que el chip.",
        feedback_immediate: "El problema de la banda magnética no es el consumo de energía, sino la falta de cifrado dinámico de datos.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Permitir la banda magnética es más seguro porque no requiere ingresar la clave secreta.",
        feedback_immediate: "Operar sin clave y por banda magnética multiplica exponencialmente el riesgo de fraude financiero.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Defensa EMV de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 6 (206)
  {
    id: 206,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 6,
    level_title: "Desafío 6 de 15: Transferencias Inmediatas Interbancarias",
    title: "Validación de Códigos de Banco y Titularidad de Cuentas",
    source_text: "Vas a transferir fondos a un proveedor. Te suministra un número de cuenta de 20 dígitos y afirma que es del Banco Provincial (código 0108), pero los primeros cuatro dígitos del número son 0102.",
    question: "¿A cuál institución bancaria pertenece realmente la cuenta y qué riesgo existe?",
    options: [
      {
        id: 1,
        text: "Pertenece al Banco de Venezuela (0102); debes verificar con el beneficiario antes de transferir para no desviar los fondos a un tercero desconocido.",
        feedback_immediate: "¡Agudeza analítica bancaria! Los primeros cuatro dígitos definen la entidad financiera según la codificación bancaria nacional.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Los primeros cuatro dígitos son aleatorios y no indican a qué banco pertenece la cuenta.",
        feedback_immediate: "Falso. En Venezuela, los primeros 4 dígitos identifican de forma estricta y única a la entidad bancaria receptora.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Transferir inmediatamente porque el sistema bancario corregirá el banco de forma mágica.",
        feedback_immediate: "Transferir a datos bancarios erróneos congela los fondos o los envía irrevocablemente a otra persona.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Verificación de Enrutamiento de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 7 (207)
  {
    id: 207,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 7,
    level_title: "Desafío 7 de 15: Cuentas Nacionales en Moneda Extranjera",
    title: "Libre Convertibilidad y Débito en Divisas",
    source_text: "Abres una cuenta de ahorro en moneda extranjera (Convenio Cambiario N° 1) en tu banco nacional. Recibes pagos de clientes en el extranjero y deseas pagar consumos locales en bolívares.",
    question: "¿Cómo funciona el débito automático de tu tarjeta cuando pagas en un comercio nacional en bolívares?",
    options: [
      {
        id: 1,
        text: "El banco liquida la fracción exacta de divisas a la tasa oficial BCV del día en el momento exacto del pase de tarjeta, debitando en bolívares al comercio.",
        feedback_immediate: "¡Dominio cambiario perfecto! El sistema de libre convertibilidad automatiza la venta de divisas a la tasa legal vigente del BCV.",
        points_delta: 100
      },
      {
        id: 2,
        text: "El comerciante se queda con el 50% de las divisas como propina bancaria.",
        feedback_immediate: "Los comercios cobran en bolívares el monto de su factura; la liquidación cambiaría la realiza el banco emisor.",
        points_delta: -25
      },
      {
        id: 3,
        text: "La tarjeta solo sirve si viajas en avión fuera de Venezuela.",
        feedback_immediate: "Las cuentas en divisas de la banca nacional permiten consumos cotidianos en cualquier punto de venta del país.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Conversión Oficial BCV de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 8 (208)
  {
    id: 208,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 8,
    level_title: "Desafío 8 de 15: Comprobantes de Pago Falsificados",
    title: "Prevención de Estafas con Capturas Editadas de Pago Móvil",
    source_text: "Un cliente te muestra una captura de pantalla en su teléfono de una transferencia 'exitosa' por $50 USD y te pide que le entregues el producto de inmediato porque tiene prisa.",
    question: "¿Cuál es la regla de oro de tesorería y comercio antes de entregar cualquier mercancía?",
    options: [
      {
        id: 1,
        text: "Ingresar a tu propia aplicación bancaria y confirmar que el dinero esté efectivamente disponible en tu saldo conciliado, no solo confiar en la captura.",
        feedback_immediate: "¡Protección contra fraude exitosa! Existen aplicaciones que generan capturas falsas idénticas a los bancos; el saldo disponible en tu app es la única verdad.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Entregar el producto de inmediato si la captura tiene el logo del banco en alta resolución.",
        feedback_immediate: "Las imágenes son editables en segundos con editores gráficos; entregar mercancía sin conciliar causa pérdidas del 100%.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Anotar el número de teléfono del cliente y confiar en su buena fe.",
        feedback_immediate: "Muchos estafadores usan números temporales o chips descartables para desaparecer tras recibir el producto.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Conciliación en Tiempo Real de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 9 (209)
  {
    id: 209,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 9,
    level_title: "Desafío 9 de 15: Pérdida o Robo de Tarjeta",
    title: "Respuesta Inmediata y Bloqueo Preventivo Temporal",
    source_text: "Descubres que extraviaste tu billetera con tu tarjeta de débito en el transporte público. No estás seguro si se cayó o fue hurtada.",
    question: "¿Cuál es el primer paso de contención financiera que debes ejecutar en los primeros 2 minutos?",
    options: [
      {
        id: 1,
        text: "Entrar a la app bancaria móvil y activar el 'Bloqueo Temporal / Apagado de Tarjeta' inmediatamente, seguido del reporte formal de extravío.",
        feedback_immediate: "¡Reacción defensiva perfecta! El apagado digital de tarjeta en la app bloquea cualquier intento de compra contactless o débito en segundos.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Esperar 3 días para ver si una persona honesta la devuelve a la estación de policía.",
        feedback_immediate: "En 3 días una tarjeta extraviada puede ser usada en compras no autorizadas o vaciada.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Publicar en redes sociales tu número de tarjeta completo pidiendo que quien la encuentre te avise.",
        feedback_immediate: "Publicar fotos o números de tu tarjeta en redes expone tus datos a ciberdelincuentes internacionales.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Bloqueo Ultrarrápido de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 10 (210)
  {
    id: 210,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 10,
    level_title: "Desafío 10 de 15: Calibración de Límites Diarios",
    title: "Gestión Prudencial de Montos Máximos de Transferencia",
    source_text: "Tu banco te permite fijar el límite diario de operaciones por Pago Móvil y transferencias. Tus gastos diarios habituales no superan el equivalente a $20 USD.",
    question: "¿Qué configuración de límites reduce al mínimo el impacto patrimonial en caso de que hackeen tu dispositivo móvil?",
    options: [
      {
        id: 1,
        text: "Ajustar el límite diario al monto promedio de tus gastos habituales y elevarlo temporalmente solo cuando vayas a efectuar una compra mayor planificada.",
        feedback_immediate: "¡Estrategia de contención impecable! Si un atacante accede a tu teléfono, el límite bajo le impedirá drenar tus ahorros acumulados.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Configurar el límite en el máximo posible permitido por el banco para nunca tener que modificarlo.",
        feedback_immediate: "Un límite ilimitado permite a un atacante vaciar toda tu cuenta en una sola transacción nocturna.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Desactivar las alertas por correo electrónico para que los límites no envíen notificaciones.",
        feedback_immediate: "Eliminar las alertas impide enterarte a tiempo de transacciones no autorizadas.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Ajuste de Límites de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 11 (211)
  {
    id: 211,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 11,
    level_title: "Desafío 11 de 15: Pasarelas de Pago en Línea",
    title: "Validación de Certificados SSL/TLS en Compras Web",
    source_text: "Vas a recargar saldo en una tienda digital. Al llegar a la pasarela de pago, el navegador muestra una advertencia de 'Certificado de Seguridad no válido o vencido (HTTP no seguro)'.",
    question: "¿Qué acción precautoria debes adoptar ante esta advertencia de seguridad?",
    options: [
      {
        id: 1,
        text: "Cancelar la compra y no ingresar ningún dato de tarjeta, ya que la ausencia de cifrado HTTPS permite que cualquiera en la red intercepte tus datos de pago.",
        feedback_immediate: "¡Defensa cibernética estricta! Nunca deben ingresarse credenciales bancarias o números de tarjeta en sitios sin cifrado TLS legítimo.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Hacer clic en 'Avanzar de todos modos' e ingresar el código CVV de la tarjeta rápidamente.",
        feedback_immediate: "Avanzar en conexiones inseguras transmite tus datos bancarios en texto plano expuestos a intercepción.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Conectarte a una red Wi-Fi pública para ver si la advertencia desaparece.",
        feedback_immediate: "Las redes Wi-Fi públicas agravan el riesgo de interceptación mediante ataques man-in-the-middle.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Inspección TLS de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 12 (212)
  {
    id: 212,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 12,
    level_title: "Desafío 12 de 15: Tarjetas de Crédito Responsables",
    title: "La Trampa del 'Pago Mínimo' y el Interés Compuesto",
    source_text: "El estado de cuenta de tu tarjeta de crédito indica un saldo deudor total de $200 USD y una opción de 'Pago Mínimo' de solo $10 USD. El interés moratorio anual es del 36%.",
    question: "¿Qué ocurre financieramente si abonas únicamente el pago mínimo durante varios meses consecutivos?",
    options: [
      {
        id: 1,
        text: "Casi la totalidad de tu abono se destinará a cubrir intereses y comisiones, prolongando la deuda por años e incrementando el costo total pagado sustancialmente.",
        feedback_immediate: "¡Educación financiera de primer orden! Pagar el saldo total antes de la fecha límite evita cargos por intereses y construye un historial impecable.",
        points_delta: 100
      },
      {
        id: 2,
        text: "El banco premia al cliente condonando el resto de la deuda como regalo de fidelidad.",
        feedback_immediate: "Falso. Los bancos capitalizan los saldos insolutos generando intereses sobre intereses.",
        points_delta: -25
      },
      {
        id: 3,
        text: "El saldo restante de $190 USD desaparece mágicamente al siguiente mes.",
        feedback_immediate: "El saldo no desaparece; continúa acumulando recargos moratorios que dañan tu récord crediticio.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Salud Crediticia de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 13 (213)
  {
    id: 213,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 13,
    level_title: "Desafío 13 de 15: Detección de Skimming en Cajeros",
    title: "Inspección Física de Cajeros Automáticos y Teclados Falsos",
    source_text: "Vas a retirar efectivo en un cajero automático en la noche. Notas que la ranura verde donde se introduce la tarjeta está floja, tiene restos de pegamento y el teclado se siente abultado.",
    question: "¿Cuál es el vector de ataque presente y qué debes hacer?",
    options: [
      {
        id: 1,
        text: "Es un skimmer superpuesto con teclado clonador; debes abstenerte de insertar la tarjeta, retirarte del lugar y reportar el cajero a la agencia bancaria.",
        feedback_immediate: "¡Agudeza táctica salvadora! Detectaste un dispositivo físico de clonación antes de que capturara tu tarjeta y PIN.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Forzar la tarjeta hacia adentro para ver si el cajero logra leerla de todas formas.",
        feedback_immediate: "Insertar la tarjeta en un lector manipulado entrega los datos del chip y banda al clonador.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Pedirle a un transeúnte desconocido que inserte su tarjeta primero para probar.",
        feedback_immediate: "Exponer a otras personas o colaborar con cajeros sospechosos es negligente.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Detección Anti-Skimming de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 14 (214)
  {
    id: 214,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 14,
    level_title: "Desafío 14 de 15: Suscripciones y Débitos Automáticos",
    title: "Auditoría Periódica de Domiciliaciones Bancarias",
    source_text: "Revisas tu estado de cuenta y descubres un débito recurrente de $4.99 USD mensuales por un servicio de streaming que contrataste hace 6 meses para ver una sola película y no volviste a usar.",
    question: "¿Cuál es el impacto financiero acumulado de los microgastos no gestionados y cómo detenerlo?",
    options: [
      {
        id: 1,
        text: "Representa una fuga silenciosa de capital ('gasto vampiro'); debes cancelar la suscripción en el proveedor y revocar la domiciliación bancaria en tu banco.",
        feedback_immediate: "¡Excelente disciplina de tesorería! Detener fugas recurrentes ahorra capital significativo para invertir en tu futuro.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Dejar el débito activo porque $4.99 USD es una cifra muy pequeña que no afecta las finanzas.",
        feedback_immediate: "Los gastos vampiros acumulados erosionan miles de bolívares al año sin aportar ningún valor.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Vaciar la cuenta bancaria por completo cada mes para que el débito rebote con fondos insuficientes.",
        feedback_immediate: "Hacer rebotar débitos puede acarrear comisiones bancarias por saldo insuficiente y suspensión de servicios.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Eliminación de Gastos Vampiro de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 15 (215)
  {
    id: 215,
    module_id: "banca",
    module_name: "Primera Cuenta de Banco",
    level_number: 15,
    level_title: "Desafío 15 de 15: Origen de Fondos y Normativa SUDEBAN",
    title: "Cumplimiento Regulatorio y Prevención de Legitimación de Capitales",
    source_text: "Un conocido te ofrece $100 USD si permites que un desconocido transfiera dinero a tu cuenta bancaria y tú luego lo retires en efectivo para dárselo en persona.",
    question: "¿En qué delito financiero de alta gravedad te están intentando involucrar como 'cuenta puente' o 'mula bancaria'?",
    options: [
      {
        id: 1,
        text: "Legitimación de capitales y lavado de dinero ilícito; prestar tu cuenta bancaria para mover fondos de terceros es un delito penal federal con condenas de prisión y cierre de cuentas.",
        feedback_immediate: "¡Integridad y cumplimiento legal absoluto! Rechazaste el esquema de 'mula bancaria', protegiendo tu libertad, tu reputación y tu récord bancario.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Aceptar el trato porque $100 USD es dinero fácil y tú no conoces el origen de la plata.",
        feedback_immediate: "La ignorancia del origen de los fondos no exime de responsabilidad penal por colaborar con el lavado de activos.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Pedirle que en lugar de $100 te pague $200 para que valga la pena.",
        feedback_immediate: "Aumentar la tarifa agrava la complicidad intencional en delitos de legitimación de capitales.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Gran Maestro de Banca y Cumplimiento de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  }
];
