import { GameplayMission } from '../../types';
import { BCV_RATE_STRING } from '../bcvServiceFallback';

export const COMPRENSION_15_CHALLENGES: GameplayMission[] = [
  // Desafío 1
  {
    id: 101,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 1,
    level_title: "Desafío 1 de 15: Detección de Cláusulas Abusivas",
    title: "Auditoría del Contrato Digital de Servicios Fintech",
    source_text: "Extracto de Términos: 'La plataforma se reserva el derecho no revocable de modificar comisiones mensuales de mantenimiento unilateralmente, debitar penalizaciones automáticas sin previo aviso judicial y compartir el historial de compras con terceras entidades publicitarias sin consentimiento explícito.'",
    question: "Como auditor digital de contratos, ¿cuál es la acción legal y protectora inmediata que debes exigir?",
    options: [
      {
        id: 1,
        text: "Aceptar los términos rápidamente para no perder acceso a la billetera digital.",
        feedback_immediate: "Aceptar unilateralmente autoriza débitos sin aviso y compromete tus datos privados ante terceros.",
        points_delta: -25
      },
      {
        id: 2,
        text: "Rechazar la cláusula de débito unilateral no notificado y exigir el consentimiento explícito (Opt-in) según leyes de protección al usuario.",
        feedback_immediate: "¡Excelente decisión legal! Has detectado la cláusula abusiva protegiendo el patrimonio y la privacidad de los usuarios.",
        points_delta: 100
      },
      {
        id: 3,
        text: "Ignorar el texto y borrar el historial de navegación para evitar el rastreo publicitario.",
        feedback_immediate: "Borrar cookies locales no anula un contrato vinculante ya aceptado en los servidores de la plataforma.",
        points_delta: -25
      }
    ],
    correct_option_id: 2,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Monóculo Scanner de Iván (+25 Pts Bonus)",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 2
  {
    id: 102,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 2,
    level_title: "Desafío 2 de 15: Desinformación y Fake News Financieras",
    title: "Verificación de Rumores Bursátiles en Redes Sociales",
    source_text: "Un canal de Telegram publica: '¡URGENTE! Todas las acciones de la BVC van a multiplicarse por 1000% mañana a las 8:00 AM gracias a un nuevo decreto secreto. Deposita en este enlace no regulado para reservar tu cupo.'",
    question: "¿Cuál es el criterio analítico de lectura crítica para evaluar este mensaje?",
    options: [
      {
        id: 1,
        text: "Identificar los sesgos de urgencia artificial, ausencia de comunicado oficial de la SUNAVAL o BVC y el enlace fraudulento externo.",
        feedback_immediate: "¡Impecable pensamiento crítico! Neutralizaste el esquema Ponzi/Phishing usando pensamiento analítico y verificación formal.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Compartir el enlace con familiares y amigos para que aprovechen la oportunidad antes de que venza.",
        feedback_immediate: "Difundir noticias financieras no verificadas propaga fraudes piramidales y ocasiona pérdidas masivas.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Depositar solo la mitad del dinero recomendado para medir si es verdad.",
        feedback_immediate: "Nunca debes transferir capital a canales o enlaces no autorizados por la superintendencia de valores.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Lectura Crítica & Detección de Fraude",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 3
  {
    id: 103,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 3,
    level_title: "Desafío 3 de 15: Letra Pequeña en Préstamos y Pólizas",
    title: "Análisis de Tasa Efectiva Anual (TEA) y Cláusulas Ocultas",
    source_text: "Folleto de Crédito: 'Obtén tu laptop hoy con solo 1% de interés nominal semanal. Sin embargo, en el anexo final se estipula un cargo de apertura del 15%, seguro de desgravamen obligatorio mensual no reembolsable y penalización moratoria del 10% por cada día de retraso.'",
    question: "¿Cuál es la conclusión técnica al calcular el Costo Total Efectivo de este financiamiento?",
    options: [
      {
        id: 1,
        text: "Calcular el Costo Anual Total (CAT/TEA), el cual supera el 120% anual real por los cargos y seguros obligatorios anexos.",
        feedback_immediate: "¡Auditoría brillante! Desentrañaste la trampa del 1% nominal desenmascarando un financiamiento usurero mediante lectura crítica profunda.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Aceptar el crédito porque el 1% semanal parece una cifra pequeña y fácil de pagar sin leer los anexos.",
        feedback_immediate: "Ignorar las comisiones ocultas y seguros obligatorios infla la deuda hasta volverla impagable.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Firmar el pagaré en blanco para agilizar la entrega del equipo tecnológico.",
        feedback_immediate: "Firmar documentos financieros en blanco es una imprudencia extrema penada por las buenas prácticas financieras.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Auditoría Forense de Contratos de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 4
  {
    id: 104,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 4,
    level_title: "Desafío 4 de 15: Pólizas de Seguro y Deducibles",
    title: "Exclusiones de Cobertura en Seguro para Equipos Tecnológicos",
    source_text: "Póliza: 'Se ampara robo con fractura en local cerrado. Queda expresamente excluida toda pérdida por extravío involuntario, daño por fluctuación eléctrica sin protector homologado y eventos ocurridos fuera del territorio nacional.'",
    question: "¿Qué condición técnica debes constatar antes de reportar un siniestro eléctrico?",
    options: [
      {
        id: 1,
        text: "Verificar que el equipo estaba conectado a un protector eléctrico homologado con certificación técnica para que el deducible aplique.",
        feedback_immediate: "¡Excelente lectura de exclusiones! Cumpliste con la condición sine qua non establecida en la póliza aseguradora.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Reportar que el equipo se cayó en la calle para que el seguro lo cubra bajo extravío.",
        feedback_immediate: "Mentir a una aseguradora constituye fraude tipificado en el código penal y anula toda indemnización.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Tirar el protector dañado a la basura para no tener que mostrarlo al perito tasador.",
        feedback_immediate: "Destruir la evidencia física impide la pericia técnica y provoca el rechazo inmediato del reclamo.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Lectura de Pólizas de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 5
  {
    id: 105,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 5,
    level_title: "Desafío 5 de 15: Contrato de Arrendamiento Comercial",
    title: "Canon de Arrendamiento e Indexación Cambiaria",
    source_text: "Contrato de Local: 'El canon mensual será fijado en bolívares calculados a la tasa oficial BCV del primer día hábil del mes. Todo pago tardío generará un recargo del 0.5% diario, y el arrendatario asume reparaciones mayores estructurales.'",
    question: "¿Cuál cláusula es contraria a la jurisprudencia ordinaria de arrendamiento inmobiliario?",
    options: [
      {
        id: 1,
        text: "Trasladar las reparaciones mayores estructurales al arrendatario, ya que por ley corresponden al propietario del inmueble.",
        feedback_immediate: "¡Gran detección contractual! Las reparaciones estructurales mayores son responsabilidad del arrendador según la ley mercantil e inmobiliaria.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Usar la tasa oficial del BCV para fijar el canon en bolívares.",
        feedback_immediate: "El uso de la tasa oficial publicada por el BCV como unidad de referencia es legal y estándar en contratos venezolanos.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Pagar el canon el primer día hábil de cada mes.",
        feedback_immediate: "Pactar la fecha de pago el primer día hábil es una cláusula completamente lícita y habitual.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Scanner Contractual de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 6
  {
    id: 106,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 6,
    level_title: "Desafío 6 de 15: Ofertas de Rendimiento Imposible",
    title: "Detección de Esquemas Piramidales de 'Riesgo Cero'",
    source_text: "Un anuncio en Instagram proclama: 'Gana 15% semanal en dólares garantizado sin riesgo con nuestro bot de arbitraje automatizado. Retira tus ganancias cuando quieras tras invitar a 3 amigos.'",
    question: "¿Qué axioma económico y de lectura crítica desenmascara este fraude de inmediato?",
    options: [
      {
        id: 1,
        text: "A mayor rendimiento, mayor riesgo; ningún activo legítimo ofrece 15% semanal garantizado y la obligación de invitar amigos delata un esquema piramidal (Ponzi).",
        feedback_immediate: "¡Criterio financiero insuperable! Identificaste la clásica trampa piramidal que subsiste solo con el ingreso de dinero de nuevas víctimas.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Invertir una pequeña suma de $20 para ver si el bot paga la primera semana.",
        feedback_immediate: "Los esquemas Ponzi suelen pagar las primeras cuotas con dinero de otros usuarios para generar falsa confianza y robar sumas mayores.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Crear cuentas falsas para cobrar el bono de los 3 amigos.",
        feedback_immediate: "Alimentar plataformas fraudulentas compromete tu seguridad informática y expone tus datos bancarios.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Defensa Anti-Ponzi de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 7
  {
    id: 107,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 7,
    level_title: "Desafío 7 de 15: Arbitraje Obligatorio y Renuncia Judicial",
    title: "Resolución de Controversias en Plataformas Digitales",
    source_text: "Términos de billetera virtual: 'El usuario renuncia expresamente al derecho de acudir a tribunales nacionales y acepta que toda disputa será resuelta por un árbitro privado en una isla remota, asumiendo costos iniciales de $5,000 USD.'",
    question: "¿Qué efecto produce esta cláusula sobre los derechos del consumidor digital?",
    options: [
      {
        id: 1,
        text: "Crea una barrera económica insalvable que anula en la práctica el derecho constitucional de reclamo y tutela judicial efectiva.",
        feedback_immediate: "¡Análisis jurídico impecable! Es una cláusula leonina diseñada para impedir reclamos de pequeños montos.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Protege al usuario porque los árbitros en islas remotas siempre fallan a favor de los clientes.",
        feedback_immediate: "Falso. Los tribunales lejanos con costos prohibitivos dejan en indefensión total al usuario común.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Abarata los costos de cualquier juicio mercantil.",
        feedback_immediate: "Un costo inicial de $5,000 USD excede con creces el saldo promedio de una billetera digital estudiantil.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Tutela Judicial de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 8
  {
    id: 108,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 8,
    level_title: "Desafío 8 de 15: Renovaciones Ocultas en Software SaaS",
    title: "Auditoría de Suscripciones en Plataformas en la Nube",
    source_text: "Licencia de Software: 'Al suscribirte al periodo de prueba gratuito de 7 días, autorizas la renovación automática de un plan anual no reembolsable de $299 USD si no cancelas con al menos 72 horas de anticipación al vencimiento.'",
    question: "¿Qué acción preventiva de lectura y gestión digital debes ejecutar de inmediato?",
    options: [
      {
        id: 1,
        text: "Fijar una alarma de calendario al 4to día y desactivar la renovación automática en los ajustes de suscripción antes de las 72 horas exigidas.",
        feedback_immediate: "¡Maniobra táctica brillante! Evitaste el cobro sorpresivo de $299 USD desactivando el débito automático a tiempo.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Esperar a que cobren los $299 USD y luego pedirle al banco que cancele la tarjeta sin justificación.",
        feedback_immediate: "El banco no reversará un débito autorizado en los términos y condiciones firmados voluntariamente.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Desinstalar la aplicación del celular creyendo que con eso se cancela la suscripción.",
        feedback_immediate: "Desinstalar una app no cancela el contrato de suscripción recurrente en los servidores del proveedor.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Control de Suscripciones de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 9
  {
    id: 109,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 9,
    level_title: "Desafío 9 de 15: Pagarés y Letras de Cambio",
    title: "Obligaciones Cambiarias y la Figura del Aval",
    source_text: "Documento de Pago: 'Por este pagaré me obligo a pagar solidariamente e incondicionalmente la suma adeudada a la vista. El avalista asume idéntica responsabilidad sin beneficio de excusión ni división.'",
    question: "¿Qué significa que el avalista renuncie al 'beneficio de excusión'?",
    options: [
      {
        id: 1,
        text: "Que el acreedor puede demandar y cobrar la deuda directamente al avalista sin necesidad de embargar primero los bienes del deudor principal.",
        feedback_immediate: "¡Comprensión técnica sobresaliente! El aval solidario sin beneficio de excusión convierte al fiador en pagador directo en caso de mora.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Que el avalista queda totalmente libre de pagar la deuda si el deudor se muda de ciudad.",
        feedback_immediate: "Todo lo contrario: la renuncia a la excusión agrava la responsabilidad patrimonial del avalista.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Que la deuda prescribe automáticamente en 24 horas.",
        feedback_immediate: "Los pagarés comerciales no prescriben en 24 horas y gozan de fuerza ejecutiva ante tribunales.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Auditoría Mercantil de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 10
  {
    id: 110,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 10,
    level_title: "Desafío 10 de 15: Lectura de Balances Financieros",
    title: "La Ecuación Patrimonial Fundamental",
    source_text: "Informe de Auditoría: 'La empresa reporta Activos Totales por $50,000 USD (bancos, inventario y equipos) y Pasivos Totales por $35,000 USD (préstamos bancarios y proveedores).'",
    question: "¿Cuál es el Patrimonio Neto o Capital Contable real perteneciente a los accionistas?",
    options: [
      {
        id: 1,
        text: "$15,000 USD, calculado mediante la ecuación básica contable: Patrimonio = Activos ($50,000) menos Pasivos ($35,000).",
        feedback_immediate: "¡Exactitud contable! Dominas la lectura del balance general y la salud financiera neta de la empresa.",
        points_delta: 100
      },
      {
        id: 2,
        text: "$85,000 USD, sumando activos y pasivos como si todo fuera ganancia.",
        feedback_immediate: "Las deudas (pasivos) nunca se suman como riqueza; deben restarse de los activos para obtener el valor neto.",
        points_delta: -25
      },
      {
        id: 3,
        text: "$0 USD, porque los pasivos anulan automáticamente todos los activos.",
        feedback_immediate: "La empresa cuenta con solvencia positiva de $15,000 USD de patrimonio neto respaldado en bienes reales.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Lectura de Balances de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 11
  {
    id: 111,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 11,
    level_title: "Desafío 11 de 15: Phishing en Notificaciones Legales",
    title: "Inspección de Citaciones Judiciales Electrónicas Falsas",
    source_text: "Correo electrónico: 'De: citaciones@tribunales-notificacion-urgente.tk. Asunto: Embargo preventivo inmediato. Abra el archivo adjunto Demanda.pdf.exe para conocer el tribunal que emite la orden.'",
    question: "¿Qué anomalías en la estructura del mensaje confirman que es un archivo malicioso?",
    options: [
      {
        id: 1,
        text: "El dominio falso '.tk', la urgencia artificial intimidatoria y la doble extensión fraudulenta '.pdf.exe' que oculta un ejecutable dañino.",
        feedback_immediate: "¡Detección forense impecable! Desactivaste un malware troyano disfrazado de documento legal con lectura analítica.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Abrir el archivo inmediatamente para verificar cuál tribunal está demandando.",
        feedback_immediate: "Ejecutar un archivo '.exe' desconocido instala un troyano que roba tus contraseñas y claves bancarias.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Reenviar el correo a los compañeros de clase para advertirles del supuesto embargo.",
        feedback_immediate: "Propagar correos con ejecutables maliciosos infecta la red de tu institución educativa.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Forense Digital de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 12
  {
    id: 112,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 12,
    level_title: "Desafío 12 de 15: Propiedad Intelectual Freelance",
    title: "Contratos de Desarrollo de Software y Derechos de Autor",
    source_text: "Contrato de Servicios: 'El desarrollador transfiere la totalidad de derechos patrimoniales sobre el código creado al recibir el pago final convenido. El desarrollador conservará el derecho moral de ser reconocido como autor en su portafolio profesional.'",
    question: "¿Qué facultad tiene el programador según este acuerdo una vez cobrado su trabajo?",
    options: [
      {
        id: 1,
        text: "Mostrar el proyecto en su portafolio como creador (derecho moral inalienable), pero no puede vender el mismo código a un competidor (derecho patrimonial cedido).",
        feedback_immediate: "¡Distinción legal perfecta! Comprendes con claridad la diferencia entre derechos patrimoniales y derechos morales de autor.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Borrar la base de datos del cliente cuando quiera porque el código fue escrito por él.",
        feedback_immediate: "Sabotear el software entregado constituye delito informático y acarrea penas de cárcel e indemnizaciones civiles.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Revenderle el mismo sistema exclusivo a la competencia al día siguiente.",
        feedback_immediate: "Vender una obra cuyos derechos patrimoniales ya fueron cedidos es un incumplimiento contractual flagrante.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Propiedad Intelectual de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 13
  {
    id: 113,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 13,
    level_title: "Desafío 13 de 15: Privacidad y Monetización de Datos",
    title: "Consentimiento Informado y Venta de Geolocalización",
    source_text: "Política de Privacidad de App de Linterna: 'La aplicación recopila coordenadas GPS precisas de fondo, lista de contactos y número IMEI del dispositivo, los cuales podrán ser transferidos a redes de anunciantes globales para publicidad dirigida.'",
    question: "¿Por qué esta política de privacidad es desproporcionada y riesgosa?",
    options: [
      {
        id: 1,
        text: "Porque una herramienta básica de linterna no requiere rastrear ubicación continua ni acceder a la libreta de contactos para su funcionamiento básico.",
        feedback_immediate: "¡Excelente auditoría de privacidad! Aplicaste el principio de minimización de datos rechazando la recolección abusiva.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Es normal, ya que la luz de la linterna necesita saber en qué país te encuentras para calibrar el brillo.",
        feedback_immediate: "Ninguna función óptica de un teléfono depende de vender tu ubicación o tus contactos a terceros.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Aceptar todos los permisos para que la linterna no se descargue rápido.",
        feedback_immediate: "Los permisos de fondo aumentan el consumo de batería y vulneran tu privacidad de forma permanente.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Minimización de Datos de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 14
  {
    id: 114,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 14,
    level_title: "Desafío 14 de 15: Fuentes Oficiales vs Cadenas Virales",
    title: "Verificación de Decretos Económicos en Gaceta Oficial",
    source_text: "Circula un audio de WhatsApp: 'El primo de un compadre en un ministerio dice que cerrarán las cuentas bancarias que no tengan $1,000 en 48 horas.'",
    question: "¿Cuál es el protocolo formal de verificación que un ciudadano instruido debe realizar?",
    options: [
      {
        id: 1,
        text: "Desestimar el audio anónimo y consultar exclusivamente las resoluciones emitidas por la SUDEBAN y publicadas en la Gaceta Oficial de la República.",
        feedback_immediate: "¡Rigurosidad ciudadana ejemplar! Neutralizaste el pánico financiero verificando en la fuente legal primaria y oficial.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Reenviar el audio a todos los grupos familiares para que tomen precauciones.",
        feedback_immediate: "Reenviar cadenas sin sustento oficial propaga histeria colectiva y beneficia a desestabilizadores.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Ir corriendo al banco a cerrar la cuenta sin preguntar.",
        feedback_immediate: "Tomar decisiones financieras precipitadas basadas en chismes ocasiona pérdidas de tiempo y dinero.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Verificación en Gaceta Oficial de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 15
  {
    id: 115,
    module_id: "comprension",
    module_name: "Comprensión Lectora",
    level_number: 15,
    level_title: "Desafío 15 de 15: Acuerdos de Confidencialidad (NDA)",
    title: "Cláusulas de No Divulgación y Secretos Comerciales",
    source_text: "Contrato NDA: 'La Parte Receptora se compromete a no divulgar la información técnica confidencial por un periodo de 2 años. Queda excluida toda información que ya fuera de dominio público o que haya sido desarrollada independientemente sin usar datos confidenciales.'",
    question: "¿Qué documento o código puede compartir un desarrollador sin infringir el NDA?",
    options: [
      {
        id: 1,
        text: "Librerías de código abierto y conocimientos públicos generales que ya se encontraban disponibles libremente en internet.",
        feedback_immediate: "¡Maestría en acuerdos de confidencialidad! Has demostrado dominio absoluto en la lectura crítica de contratos legales y comerciales.",
        points_delta: 100
      },
      {
        id: 2,
        text: "La arquitectura propietaria del algoritmo del cliente publicada en GitHub público.",
        feedback_immediate: "Publicar el algoritmo protegido bajo NDA constituye violación grave de secreto comercial sujeta a juicio civil y penal.",
        points_delta: -25
      },
      {
        id: 3,
        text: "La base de datos de usuarios con correos y contraseñas del cliente.",
        feedback_immediate: "Filtrar datos de clientes es una infracción penal severa que destruye cualquier reputación profesional.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Gran Maestro de Contratos de Iván",
    bcv_rate_context: BCV_RATE_STRING
  }
];
