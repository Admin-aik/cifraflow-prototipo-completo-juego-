import { GameplayMission } from '../../types';
import { BCV_RATE_STRING } from '../bcvServiceFallback';

export const EMPRENDIMIENTO_15_CHALLENGES: GameplayMission[] = [
  // Desafío 1 (301)
  {
    id: 301,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 1,
    level_title: "Desafío 1 de 15: Estructura de Costos y Punto de Equilibrio",
    title: "Calculando el Margen Real de un Proyecto Digital",
    source_text: "Tu emprendimiento de diseño web genera $1,000 al mes. Tus costos de hosting, software y luz son $300 (fijos). Cobras $100 por cliente y cada cliente consume $20 en materiales/horas de terceros (costo variable).",
    question: "¿Cuántos clientes mínimos al mes requieres para alcanzar el Punto de Equilibrio donde no ganas ni pierdes?",
    options: [
      {
        id: 1,
        text: "Aproximadamente 4 clientes ($300 de costo fijo / $80 de margen de contribución = 3.75 -> 4 clientes).",
        feedback_immediate: "¡Matemática Financiera Perfecta! Dominas el margen de contribución unitario y la fórmula de punto de equilibrio.",
        points_delta: 100
      },
      {
        id: 2,
        text: "15 clientes, porque siempre hay que multiplicar los costos fijos por 5 sin importar el margen.",
        feedback_immediate: "Cálculo erróneo. Multiplicar arbitrariamente desorienta la planificación operativa y financiera del negocio.",
        points_delta: -25
      },
      {
        id: 3,
        text: "1 solo cliente, porque el hosting se paga una sola vez y no importa el gasto variable.",
        feedback_immediate: "Un solo cliente deja un déficit de -$220 al mes llevando al emprendimiento a la quiebra inminente.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Reactor 50/30/20 de Carlos (+20% Bonus)",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 2 (302)
  {
    id: 302,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 2,
    level_title: "Desafío 2 de 15: La Regla 50/30/20 y Fondo de Emergencia",
    title: "Distribución Inteligente de Ganancias Netas",
    source_text: "Tu proyecto arrojó una utilidad neta mensual equivalente a 40 USD a tasa oficial BCV. Quieres aplicar la metodología financiera disciplinada 50/30/20 para blindar tu negocio.",
    question: "¿Cuál es la distribución exacta de estos fondos para garantizar supervivencia y crecimiento?",
    options: [
      {
        id: 1,
        text: "50% para reinversión operativa obligatoria (20 USD eq.), 30% para mejoras o deseos flexibles (12 USD eq.) y 20% para Fondo de Emergencia / Ahorro Invertible (8 USD eq.).",
        feedback_immediate: "¡Estrategia Maestra de Finanzas! Cumples con la regla 50/30/20 protegiendo el negocio contra imprevistos.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Gastar el 90% en publicidad en redes sociales y esperar que lleguen más ventas inmediatamente.",
        feedback_immediate: "Agotar la liquidez sin fondo de reserva deja a la empresa vulnerable ante el primer imprevisto técnico o de mercado.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Repartir el 100% como dividendo personal y financiar el siguiente mes con deudas al 30% de interés.",
        feedback_immediate: "Espiral de sobreendeudamiento. Destruye la solvencia operativa en menos de 90 días.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Resiliencia Presupuestaria de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 3 (303)
  {
    id: 303,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 3,
    level_title: "Desafío 3 de 15: Optimización de Costos Cloud & Fiscalidad",
    title: "Radar Anti-Gastos y Formalización con Facturación Digital",
    source_text: "Tu plataforma digital tiene instancias en la nube encendidas las 24 horas que nadie usa de noche, consumiendo $120 al mes. Además, necesitas emitir facturas legales con tu RIF SENIAT para cobrar a corporaciones.",
    question: "¿Qué estrategia conjunta optimiza tu flujo de caja y eleva el perfil institucional del negocio?",
    options: [
      {
        id: 1,
        text: "Activar auto-escalado cloud apagando servidores ociosos (-60% de costo) y emitir facturas electrónicas con providencia SENIAT.",
        feedback_immediate: "¡Magistral optimización cloud y tributaria! El radar anti-gastos de Ircar detuvo fugas presupuestarias y habilitó clientes corporativos de alto valor.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Dejar todos los servidores encendidos con capacidad máxima y operar sin registrar ventas en ningún libro contable.",
        feedback_immediate: "Mantener gasto zombi quema capital operativo y operar al margen de la ley expone al negocio a multas severas.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Cancelar el servicio de copias de seguridad de la base de datos para ahorrar $5 mensuales.",
        feedback_immediate: "Eliminar respaldos es un riesgo catastrófico que destruye la empresa ante cualquier caída de servidor.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "maya_chen",
    bonus_tag: "Radar Anti-Gastos Cloud de Ircar (+25 Pts Bonus)",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 4 (304)
  {
    id: 304,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 4,
    level_title: "Desafío 4 de 15: Fijación de Precios de Venta (Pricing)",
    title: "Margen Bruto vs Margen Neto y Riesgo Inflacionario",
    source_text: "Un emprendimiento de repostería produce tortas con un costo directo de ingredientes de $10 USD. El emprendedor las vende a $12 USD pensando que gana el 20%, pero olvida el costo del gas, empaque, delivery y su propio tiempo de trabajo que suman $3 USD adicionales.",
    question: "¿Cuál es la realidad contable de este negocio?",
    options: [
      {
        id: 1,
        text: "Está vendiendo a pérdida real (-$1 USD por torta); debe sumar costos directos e indirectos antes de aplicar el margen de ganancia neta deseado.",
        feedback_immediate: "¡Revelación financiera fundamental! Ignorar los costos indirectos y el tiempo de trabajo conduce a la descapitalización invisible.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Está ganando $2 USD limpios porque el gas y el delivery se pagan solos a fin de mes.",
        feedback_immediate: "Los servicios públicos y empaques no son gratuitos; deben prorratearse en cada unidad vendida.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Debe bajar el precio a $8 USD para vender el doble y compensar la pérdida.",
        feedback_immediate: "Vender a un precio menor al costo unitario solo acelera la velocidad de la quiebra.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Estructura de Precios de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 5 (305)
  {
    id: 305,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 5,
    level_title: "Desafío 5 de 15: Separación de Finanzas",
    title: "Sueldo del Fundador vs Utilidad de la Empresa",
    source_text: "Un joven emprendedor utiliza la cuenta bancaria del negocio para pagar sus compras de comida personal, salidas de fin de semana y ropa, sin registrar retiros formales.",
    question: "¿Qué grave anomalía financiera ocurre y cómo debe subsanarse?",
    options: [
      {
        id: 1,
        text: "Mezclar finanzas personales con las de la empresa falsea la rentabilidad real; debe asignarse un salario fijo mensual transferido a su cuenta personal.",
        feedback_immediate: "¡Higiene contable primordial! Un salario fijo asignado permite conocer la rentabilidad auténtica del proyecto sin descapitalizar la empresa.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Es una práctica excelente porque al ser el dueño, todo el dinero de la caja le pertenece libremente en cualquier momento.",
        feedback_immediate: "Usar la caja de la empresa como billetera personal es la causa #1 de insolvencia en pymes y emprendimientos.",
        points_delta: -25
      },
      {
        id: 3,
        text: "No pagarse nunca ningún sueldo durante 5 años para que el dinero se quede en el banco.",
        feedback_immediate: "No asignarse un salario genera frustración personal y oculta el costo real de la mano de obra del fundador.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Gobernanza Presupuestaria de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 6 (306)
  {
    id: 306,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 6,
    level_title: "Desafío 6 de 15: Ciclo de Conversión del Efectivo",
    title: "Gestión de Cobranzas y Plazos de Proveedores",
    source_text: "Tu tienda de tecnología vende productos a clientes a crédito a 60 días, pero tus proveedores de insumos te exigen el pago de contado en 7 días.",
    question: "¿Qué problema de tesorería inminente enfrentará tu emprendimiento?",
    options: [
      {
        id: 1,
        text: "Asfixia de liquidez (quiebra por flujo de caja); te quedarás sin dinero para pagar a proveedores mientras esperas 60 días por el cobro a clientes.",
        feedback_immediate: "¡Diagnóstico de tesorería brillante! El ciclo de cobranza debe ser menor o igual al plazo de crédito con proveedores para mantener liquidez positiva.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Abundancia extrema de billetes en la cuenta bancaria.",
        feedback_immediate: "Falso. Vender a crédito prolongado sin cobrar desangra la cuenta bancaria del negocio.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Aumentar el plazo de crédito a los clientes a 180 días para hacerlos más felices.",
        feedback_immediate: "Aumentar el plazo a 180 días destruye cualquier posibilidad de reponer inventario a tiempo.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Flujo de Caja Táctico de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 7 (307)
  {
    id: 307,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 7,
    level_title: "Desafío 7 de 15: Control de Inventario y Método PEPS",
    title: "Primero en Entrar, Primero en Salir (FIFO / PEPS)",
    source_text: "En tu almacén de productos perecederos compraste 100 unidades el lunes a $2 USD c/u y 100 unidades el jueves a $2.5 USD c/u. Deseas rotar el stock para evitar mermas por caducidad.",
    question: "¿Qué lote de productos debes despachar primero a los clientes según el método PEPS?",
    options: [
      {
        id: 1,
        text: "Despachar primero las unidades del lunes (las más antiguas), asegurando que el inventario no venza y reconociendo el costo histórico de adquisición.",
        feedback_immediate: "¡Gestión de almacén impecable! El método PEPS reduce el riesgo de mermas por vencimiento y mantiene el inventario valorizado adecuadamente.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Despachar las del jueves y dejar que las del lunes se pudran en el fondo del depósito.",
        feedback_immediate: "Dejar mercancía antigua al fondo causa mermas y pérdidas económicas directas del 100%.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Mezclar todos los productos sin etiquetar fechas de vencimiento.",
        feedback_immediate: "No rotar por fecha de vencimiento es un error grave que ocasiona sanciones sanitarias y pérdida de clientes.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Rotación de Inventarios de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 8 (308)
  {
    id: 308,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 8,
    level_title: "Desafío 8 de 15: Flujo de Caja Proyectado",
    title: "Previsión de Estacionalidad y Meses de Bajas Ventas",
    source_text: "Tu negocio de útiles escolares genera el 70% de sus ingresos en agosto y septiembre, pero en mayo y junio las ventas caen drásticamente mientras los costos fijos de alquiler continúan iguales.",
    question: "¿Cómo debe planificarse la tesorería durante los meses de alta facturación?",
    options: [
      {
        id: 1,
        text: "Reservar parte de los excedentes de agosto en un fondo de estabilización para cubrir los costos fijos de los meses de baja temporada sin pedir préstamos de emergencia.",
        feedback_immediate: "¡Maestría en planificación estacional! Aplanar la curva de flujo de caja garantiza la solvencia de la empresa durante todo el ciclo anual.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Gastar todo el dinero de agosto en una fiesta corporativa y rezar para que en mayo las ventas suban solas.",
        feedback_immediate: "Ignorar la estacionalidad deja a la empresa insolvente frente a compromisos de nómina y alquiler.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Cerrar el local en mayo y despedir a todo el equipo para volver a contratar en agosto.",
        feedback_immediate: "La inestabilidad laboral destruye la cultura de equipo y multiplica costos de reclutamiento y liquidaciones.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Previsión Estacional de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 9 (309)
  {
    id: 309,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 9,
    level_title: "Desafío 9 de 15: Financiamiento y Costo de Dilución",
    title: "Capital Semilla vs Deuda Bancaria vs Ceder Acciones",
    source_text: "Necesitas $5,000 USD para comprar maquinaria. Un inversionista te ofrece los $5,000 USD pero exige el 60% de las acciones de tu empresa y el control de las decisiones.",
    question: "¿Cuál es el costo oculto de esta oferta de financiamiento?",
    options: [
      {
        id: 1,
        text: "Pierdes la mayoría del control de tu propia empresa (dilución excesiva); es preferible evaluar financiamiento por deuda bancaria o ceder un porcentaje minoritario (10-15%).",
        feedback_immediate: "¡Criterio estratégico extraordinario! Ceder el 60% por una suma modesta te despoja de la propiedad y del fruto de tu esfuerzo futuro.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Aceptar inmediatamente porque quedarse con el 40% es mejor que no tener dinero hoy.",
        feedback_immediate: "Ceder el control mayoritario permite al inversionista despedirte de tu propio emprendimiento.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Pedirle que se quede con el 90% para no tener que trabajar tanto.",
        feedback_immediate: "Regalar la empresa anula tu rol como emprendedor y liquida tu patrimonio.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Defensa del Capital Social de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 10 (310)
  {
    id: 310,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 10,
    level_title: "Desafío 10 de 15: CAC y LTV en Proyectos Digitales",
    title: "Costo de Adquisición de Clientes vs Valor de Vida del Cliente",
    source_text: "Gastas $50 USD en publicidad digital para conseguir un solo cliente (CAC = $50). Ese cliente compra una sola vez un producto donde tu margen de ganancia es de solo $15 USD y nunca más vuelve a comprar.",
    question: "¿Por qué este modelo de marketing digital es inviable a mediano plazo?",
    options: [
      {
        id: 1,
        text: "Porque el CAC ($50) es mayor que el LTV ($15), perdiendo $35 USD netos por cada cliente nuevo; el LTV debe ser al menos 3 veces superior al CAC.",
        feedback_immediate: "¡Economía de escala y métricas SaaS dominadas! Una relación LTV/CAC saludable (3:1 o superior) es la brújula indispensable de un negocio escalable.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Es un negocio excelente porque al menos se consiguió una venta.",
        feedback_immediate: "Comprar ventas a pérdida sostenida agota el capital de trabajo en pocas semanas.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Aumentar el presupuesto publicitario a $500 USD por cliente para ganar más seguidores.",
        feedback_immediate: "Aumentar la inversión en un embudo deficitario solo multiplica el tamaño de las pérdidas.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "maya_chen",
    bonus_tag: "Métricas Digitales de Ircar",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 11 (311)
  {
    id: 311,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 11,
    level_title: "Desafío 11 de 15: Depreciación y Fondo de Reposición",
    title: "Mantenimiento Técnico y Reserva de Maquinaria",
    source_text: "Compraste una impresora 3D por $1,000 USD con una vida útil estimada de 2 años (24 meses). Cada mes la máquina produce piezas y genera ingresos.",
    question: "¿Qué provisión contable mensual debes apartar para reemplazarla cuando termine su vida útil?",
    options: [
      {
        id: 1,
        text: "Apartar aproximadamente $41.67 USD mensuales como provisión de depreciación en un fondo de reposición de activos productivos.",
        feedback_immediate: "¡Visión de largo plazo magistral! La reserva de depreciación garantiza que renueves tus equipos sin endeudarte al momento de su desgaste natural.",
        points_delta: 100
      },
      {
        id: 2,
        text: "$0 USD, porque las máquinas nunca se dañan ni se desgastan.",
        feedback_immediate: "Todos los equipos mecánicos y tecnológicos sufren obsolescencia y desgaste físico continuo.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Comprar otra impresora 3D idéntica cada semana con dinero de la caja diaria.",
        feedback_immediate: "Comprar activos de forma desordenada sin plan financiero destruye la liquidez disponible.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Reserva de Activos de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 12 (312)
  {
    id: 312,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 12,
    level_title: "Desafío 12 de 15: Cargas Laborales y Prestaciones",
    title: "Presupuesto Real de Nómina y Ley del Trabajo (LOTTT)",
    source_text: "Contratas a tu primer colaborador con un sueldo acordado de $100 USD mensuales. Calculas que el costo para la empresa será únicamente de $100 USD exactos.",
    question: "¿Qué conceptos de ley debes prever para calcular el costo total laboral real?",
    options: [
      {
        id: 1,
        text: "Prever la reserva mensual para prestaciones sociales (antigüedad), bono vacacional, utilidades de fin de año y aportes patronales de seguridad social.",
        feedback_immediate: "¡Responsabilidad patronal impecable! El costo laboral real suele ser entre 30% y 50% superior al sueldo base debido a pasivos laborales de ley.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Descontarle al empleado el costo del uniforme y de la electricidad de la oficina.",
        feedback_immediate: "Hacer deducciones ilegales al salario de los trabajadores viola la LOTTT y acarrea multas del Ministerio del Trabajo.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Pagar las prestaciones sociales solo si a la empresa le sobra dinero al final del año.",
        feedback_immediate: "Las prestaciones sociales son un derecho constitucional irrenunciable que debe provisionarse mes a mes.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Cálculo Laboral de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 13 (313)
  {
    id: 313,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 13,
    level_title: "Desafío 13 de 15: Ventas B2B y Retenciones Fiscales",
    title: "Agentes de Retención de IVA e ISLR en Venezuela",
    source_text: "Emites una factura formal de $1,000 USD a una gran empresa designada como 'Contribuyente Especial' por el SENIAT. Al recibir el pago, notas que te transfieren menos dinero del total facturado.",
    question: "¿Cuál es la causa legítima de este descuento y qué documento debes exigir?",
    options: [
      {
        id: 1,
        text: "La empresa aplicó la retención de ley del IVA (75% o 100%) y de ISLR; debes exigir de inmediato los Comprobantes de Retención oficiales para descontarlos en tu declaración tributaria.",
        feedback_immediate: "¡Conocimiento tributario corporativo perfecto! Los comprobantes de retención son créditos fiscales que respaldan tus pagos de impuestos ante el SENIAT.",
        points_delta: 100
      },
      {
        id: 2,
        text: "La empresa te robó dinero y debes demandarlos ante la policía penal de inmediato.",
        feedback_immediate: "Los Contribuyentes Especiales están obligados por ley a retener impuestos; no es un robo, es un mandato legal.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Romper la factura y anular el servicio prestado.",
        feedback_immediate: "Anular servicios legítimamente entregados perjudica la relación comercial y no anula tus deberes formales.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Gestión Tributaria de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 14 (314)
  {
    id: 314,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 14,
    level_title: "Desafío 14 de 15: Producto Mínimo Viable (MVP)",
    title: "Metodología Lean Startup y Validación con Clientes",
    source_text: "Tienes una idea para una aplicación móvil. El desarrollo completo toma 8 meses y cuesta $10,000 USD que no tienes.",
    question: "¿Cuál es la ruta ágil (MVP) para validar si el mercado realmente pagará por tu solución antes de invertir dinero?",
    options: [
      {
        id: 1,
        text: "Construir una versión simple (MVP) con herramientas no-code o un prototipo funcional en 2 semanas, presentándolo a clientes reales para medir interés de compra verificado.",
        feedback_immediate: "¡Metodología Lean Startup en su máxima expresión! Validar con usuarios reales antes de gastar ahorros ahorra meses de trabajo y capital valioso.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Vender la casa familiar para financiar los $10,000 USD sin haber hablado con ningún cliente potencial.",
        feedback_immediate: "Apostar todo el patrimonio familiar a una idea no validada es la ruta directa a la ruina financiera.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Guardar la idea en secreto bajo llave y no mostrársela a nadie para que nadie te la copie.",
        feedback_immediate: "Las ideas sin ejecución ni validación en el mercado tienen valor cero; el secreto impide conseguir clientes.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "maya_chen",
    bonus_tag: "Prototipado Ágil de Ircar",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 15 (315)
  {
    id: 315,
    module_id: "emprendimiento",
    module_name: "Emprendimiento",
    level_number: 15,
    level_title: "Desafío 15 de 15: Cobertura y Blindaje Patrimonial",
    title: "Protección del Flujo de Caja ante Volatilidad de Costos",
    source_text: "En economías con inflación y fluctuación cambiaria, un emprendimiento vende mercancía y guarda los bolívares en una cuenta corriente sin moverlos durante 6 meses.",
    question: "¿Cuál es la estrategia financiera correcta para evitar la descapitalización por devaluación monetaria?",
    options: [
      {
        id: 1,
        text: "Reinvertir la liquidez rápidamente en reposición de inventario de alta rotación, activos productivos o instrumentos indexados a tasa oficial BCV para preservar el poder de compra.",
        feedback_immediate: "¡Gran Maestro del Emprendimiento! Has dominado el blindaje de capital productivo, convirtiéndote en un estratega financiero integral de CifraFlow.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Dejar el dinero inmóvil en la cuenta bancaria confiando en que los precios bajarán con el tiempo.",
        feedback_immediate: "La inacción en entornos inflacionarios destruye el poder de compra de la tesorería de manera irreversible.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Comprar billetes de lotería para intentar duplicar los fondos del negocio.",
        feedback_immediate: "Apostar los fondos de trabajo es una conducta destructiva y contraria a la gestión empresarial.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Gran Maestro de Finanzas de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  }
];
