import { GameplayMission } from '../../types';
import { BCV_RATE_STRING } from '../bcvServiceFallback';

export const BVC_15_CHALLENGES: GameplayMission[] = [
  // Desafío 1 (401)
  {
    id: 401,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 1,
    level_title: "Desafío 1 de 15: Renta Variable y Acciones en la BVC",
    title: "Diferencia entre Deuda (Bonos) y Acciones en la BVC",
    source_text: "La Bolsa de Valores de Caracas (BVC) transa empresas tradicionales como CANTV (Clase D), Ron Santa Teresa, Banco Nacional de Crédito (BNC) y Fondo de Valores Inmobiliarios.",
    question: "Cuando adquieres acciones comunes de una empresa en la BVC, ¿qué derecho económico y societario adquieres?",
    options: [
      {
        id: 1,
        text: "Te conviertes en copropietario de una fracción del patrimonio de la empresa, con derecho a participar en dividendos y asambleas.",
        feedback_immediate: "¡Precisión Bursátil! Has comprendido la esencia de la renta variable y la participación en el capital productivo.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Te conviertes en acreedor con un interés garantizado del 100% mensual obligatorio sin importar cómo le vaya a la empresa.",
        feedback_immediate: "La renta variable no garantiza un interés fijo; su rendimiento depende de los resultados y cotización de la empresa.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Estás comprando una criptomoneda emitida por el banco central sin respaldo societario.",
        feedback_immediate: "Las acciones de la BVC son títulos valores de empresas reales venezolanas supervisadas formalmente por SUNAVAL.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Visión Bursátil BVC de Carlos (+20% Bonus)",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 2 (402)
  {
    id: 402,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 2,
    level_title: "Desafío 2 de 15: Casas de Bolsa y Diversificación",
    title: "Intermediación Bursátil y Gestión de Portafolio",
    source_text: "Para operar en la BVC es mandatorio abrir una cuenta de corretaje a través de una Casa de Bolsa autorizada y registrada ante la SUNAVAL (Superintendencia Nacional de Valores).",
    question: "¿Cuál es la recomendación prudencial para construir un portafolio de inversión en el mercado bursátil venezolano?",
    options: [
      {
        id: 1,
        text: "Diversificar entre diferentes sectores (bancario, industrial/consumo masivo, telecomunicaciones e inmobiliario) y evaluar dividendos en acciones.",
        feedback_immediate: "¡Magistral criterio de inversión! La diversificación mitiga el riesgo sectorial y aprovecha el potencial de dividendos recurrentes.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Invertir el 100% de los ahorros familiares en una sola acción pequeña y venderla en 24 horas por impulso.",
        feedback_immediate: "La concentración excesiva en un solo activo eleva el riesgo de pérdida patrimonial total.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Comprar acciones a personas anónimas por redes sociales mediante transferencias informales sin casa de bolsa.",
        feedback_immediate: "Todas las órdenes legítimas deben canalizarse por Casas de Bolsa autorizadas con custodia en la Caja Venezolana de Valores.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Estrategia de Portafolio de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 3 (403)
  {
    id: 403,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 3,
    level_title: "Desafío 3 de 15: Papeles Comerciales y Renta Fija Indexada",
    title: "Instrumentos de Deuda Corporativa y Cobertura Cambiaria",
    source_text: "Una empresa venezolana emite Papeles Comerciales autorizados por SUNAVAL en la BVC. La emisión está indexada al tipo de cambio oficial del BCV y paga una tasa de interés del 12% anual con vencimiento a 180 días.",
    question: "¿Qué ventaja financiera ofrece un papel comercial indexado al tipo de cambio oficial BCV para el inversionista?",
    options: [
      {
        id: 1,
        text: "Proporciona cobertura contra la devaluación al ajustar el capital a la tasa oficial BCV del día, sumado al cobro de intereses pactados.",
        feedback_immediate: "¡Impecable análisis financiero! La renta fija indexada preserva el poder adquisitivo del capital en bolívares combinando tasa y tipo de cambio.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Garantiza que el inversionista toma el control del 51% de la directiva de la empresa emisora de inmediato.",
        feedback_immediate: "Los instrumentos de deuda (renta fija) confieren derecho de cobro de capital e interés, no derechos políticos de accionista.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Exige pagar una penalización del 50% si el tipo de cambio oficial del BCV se actualiza.",
        feedback_immediate: "La cláusula de indexación protege al acreedor ajustando el valor, nunca penalizándolo.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Auditoría de Instrumentos Bursátiles de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 4 (404)
  {
    id: 404,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 4,
    level_title: "Desafío 4 de 15: El Rol Supervisor de la SUNAVAL",
    title: "Transparencia de Información y Prospectos de Emisión",
    source_text: "La Superintendencia Nacional de Valores (SUNAVAL) exige que toda empresa que desee cotizar o emitir deuda pública presente un Prospecto de Emisión auditado por contadores públicos colegiados.",
    question: "¿Por qué el Prospecto de Emisión es un documento vital para el pequeño inversionista?",
    options: [
      {
        id: 1,
        text: "Porque revela los estados financieros reales de la empresa, los factores de riesgo del negocio, el uso que darán a los fondos y la solvencia del emisor.",
        feedback_immediate: "¡Auditoría de transparencia perfecta! El prospecto auditado elimina la asimetría de información y fundamenta decisiones de inversión racionales.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Es solo un folleto decorativo de fotos que no contiene datos contables relevantes.",
        feedback_immediate: "El prospecto es el documento legal vinculante más importante de cualquier colocación bursátil regulada.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Garantiza por ley que la empresa nunca tendrá pérdidas bajo ninguna circunstancia.",
        feedback_immediate: "El prospecto informa la verdad financiera, no elimina los riesgos intrínsecos de la actividad mercantil.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "dante_albornoz",
    bonus_tag: "Verificación Regulatoria de Iván",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 5 (405)
  {
    id: 405,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 5,
    level_title: "Desafío 5 de 15: La Caja Venezolana de Valores (CVV)",
    title: "Custodia Electrónica y Desmaterialización de Títulos",
    source_text: "Cuando compras acciones en la BVC, ya no te entregan un certificado de papel físico que guardas en tu casa. Los títulos se registran electrónicamente en la Caja Venezolana de Valores (CVV).",
    question: "¿Qué garantía y seguridad aporta la custodia centralizada en la CVV a los titulares de acciones?",
    options: [
      {
        id: 1,
        text: "Elimina el riesgo de robo o extravío físico del papel, automatiza el abono de dividendos y certifica de forma inmutable la titularidad jurídica del accionista.",
        feedback_immediate: "¡Comprensión de la infraestructura bursátil impecable! La CVV es la entidad depositaria que asegura la propiedad registral de cada valor negociado.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Permite que la Casa de Bolsa venda tus acciones sin tu autorización en cualquier momento.",
        feedback_immediate: "La CVV protege al propietario; ninguna Casa de Bolsa puede traspasar títulos en custodia sin una orden firmada por el cliente.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Obliga a viajar a Caracas cada semana a firmar la libreta de accionistas.",
        feedback_immediate: "Todo el sistema de la CVV está modernizado y digitalizado para consulta en línea desde cualquier parte del país.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "kael_rivera",
    bonus_tag: "Custodia Digital de Jorge",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 6 (406)
  {
    id: 406,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 6,
    level_title: "Desafío 6 de 15: Dividendos en Efectivo vs en Acciones",
    title: "Distribución de Utilidades Societarias",
    source_text: "Una asamblea de accionistas de una empresa cotizada en la BVC aprueba un decreto de dividendos: '50% en efectivo pagadero en cuenta bancaria y 50% en acciones liberadas de nueva emisión por capitalización de reservas.'",
    question: "¿Qué efecto produce recibir 'acciones liberadas' para el accionista?",
    options: [
      {
        id: 1,
        text: "Aumenta la cantidad de títulos que posee en su cuenta de la CVV sin tener que pagar dinero adicional por ellos, manteniendo su proporción en el capital.",
        feedback_immediate: "¡Maestría en derechos corporativos! Las acciones liberadas capitalizan las reservas de la empresa y multiplican el número de acciones del inversionista.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Le cobran una multa del 100% por recibir más acciones.",
        feedback_immediate: "Las acciones liberadas no conllevan multas; son un dividendo patrimonial que premia la fidelidad de los socios.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Sus acciones anteriores se eliminan y quedan solo las nuevas.",
        feedback_immediate: "Las nuevas acciones se suman a las que ya poseía en su portafolio de custodia.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Análisis de Dividendos de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 7 (407)
  {
    id: 407,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 7,
    level_title: "Desafío 7 de 15: Lectura del Boletín Bursátil Diario",
    title: "Interpretación de Precios de Cierre y Volumen Operado",
    source_text: "El boletín de la BVC muestra para una acción: 'Apertura: 25.00 VES, Máximo: 27.50 VES, Mínimo: 24.80 VES, Cierre: 27.00 VES, Volumen Efectivo: 1,500,000 VES.'",
    question: "¿Cuál fue la variación del precio durante la jornada y qué señala el volumen efectivo?",
    options: [
      {
        id: 1,
        text: "La acción subió de 25.00 a 27.00 VES (+8% diario) y se transó un monto total de 1.5 millones de bolívares en compras y ventas efectivas durante la sesión.",
        feedback_immediate: "¡Lectura analítica de pizarra bursátil impecable! El volumen valida la fuerza de la tendencia alcista de la acción en la jornada.",
        points_delta: 100
      },
      {
        id: 2,
        text: "La acción cayó a cero porque el volumen fue muy pequeño.",
        feedback_immediate: "El precio de cierre fue de 27.00 VES, por encima de la apertura, demostrando una jornada positiva.",
        points_delta: -25
      },
      {
        id: 3,
        text: "El precio máximo es el monto que todos los inversionistas deben pagar obligatoriamente al día siguiente.",
        feedback_immediate: "El precio máximo refleja el pico transado durante la jornada, no una orden fija obligatoria para el futuro.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Lectura de Pizarra de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 8 (408)
  {
    id: 408,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 8,
    level_title: "Desafío 8 de 15: El Índice Bursátil Caracas (IBC)",
    title: "El Termómetro del Mercado de Capitales Venezolano",
    source_text: "En los medios económicos se informa: 'El IBC de la Bolsa de Valores de Caracas cerró la semana con una ganancia del 4.2% impulsado por el sector bancario y agroindustrial.'",
    question: "¿Qué mide concretamente el IBC?",
    options: [
      {
        id: 1,
        text: "Es un índice compuesto ponderado por capitalización bursátil que refleja la tendencia y salud general del conjunto de las principales acciones de la BVC.",
        feedback_immediate: "¡Cultura financiera de alto calibre! El IBC es el promedio ponderado de referencia del mercado bursátil nacional.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Mide el precio de la gasolina en las estaciones de servicio.",
        feedback_immediate: "El IBC es un índice financiero de acciones bursátiles, no un indicador de combustibles.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Es una cuenta de banco personal del presidente de la bolsa.",
        feedback_immediate: "El IBC es un indicador estadístico matemático de libre consulta pública para el análisis económico.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Análisis Macro Bursátil de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 9 (409)
  {
    id: 409,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 9,
    level_title: "Desafío 9 de 15: Tipos de Órdenes Bursátiles",
    title: "Orden a Mercado vs Orden Limitada",
    source_text: "Deseas comprar 100 acciones de una empresa que cotiza cerca de 10 VES, pero no estás dispuesto a pagar más de 9.50 VES por acción.",
    question: "¿Qué tipo de orden bursátil debes instruir a tu corredor de bolsa?",
    options: [
      {
        id: 1,
        text: "Una Orden Limitada fijando el precio tope en 9.50 VES; la compra solo se ejecutará si el mercado baja a ese precio o menor, protegiendo tu capital.",
        feedback_immediate: "¡Control técnico de ejecución perfecto! Las órdenes limitadas evitan pagar sobreprecios inesperados por volatilidad momentánea.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Una Orden a Mercado abierta para que el corredor pague cualquier precio sin importar si sube a 20 VES.",
        feedback_immediate: "Las órdenes a mercado compran al mejor precio disponible inmediatamente, lo que puede provocar compras a precios muy altos en mercados ilíquidos.",
        points_delta: -25
      },
      {
        id: 3,
        text: "No colocar ninguna orden y pedirle al cajero del banco que compre las acciones por teléfono.",
        feedback_immediate: "Las operaciones bursátiles solo se cursan a través de sistemas autorizados de Casas de Bolsa con órdenes formales.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Ejecución de Órdenes de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 10 (410)
  {
    id: 410,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 10,
    level_title: "Desafío 10 de 15: Mercado Primario vs Secundario",
    title: "Financiamiento Directo a la Producción Empresarial",
    source_text: "Una empresa venezolana emite por primera vez acciones al público en una Oferta Pública Inicial (OPI) autorizada en la BVC. Luego, los inversionistas revenden esas acciones entre sí en la pizarra diaria.",
    question: "¿En cuál de los dos momentos la empresa recibe fondos frescos de capital para construir nuevas fábricas?",
    options: [
      {
        id: 1,
        text: "En el Mercado Primario, donde los inversionistas compran directamente los títulos nuevos emitidos por la empresa.",
        feedback_immediate: "¡Distinción técnica bursátil fundamental! El mercado primario canaliza el ahorro directamente a la inversión productiva de las empresas.",
        points_delta: 100
      },
      {
        id: 2,
        text: "En el Mercado Secundario, porque cada vez que dos inversionistas intercambian acciones la empresa cobra el 100% de la venta.",
        feedback_immediate: "En el mercado secundario el dinero fluye entre el comprador y el vendedor; la empresa ya no recibe fondos directos.",
        points_delta: -25
      },
      {
        id: 3,
        text: "En ninguno de los dos; las bolsas de valores no tienen relación con la producción real.",
        feedback_immediate: "La función principal de la bolsa es la intermediación para financiar proyectos productivos reales.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Mercado Primario de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 11 (411)
  {
    id: 411,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 11,
    level_title: "Desafío 11 de 15: Pagarés Bursátiles para Pymes",
    title: "Financiamiento de Capital de Trabajo para Emprendedores",
    source_text: "Una mediana empresa agroindustrial necesita financiar la compra de semillas para la cosecha. La banca tradicional tarda 6 meses en responderle. La empresa acude a la BVC para emitir Pagarés Bursátiles a 90 días.",
    question: "¿Qué ventaja competitiva encuentra la empresa en el mercado bursátil?",
    options: [
      {
        id: 1,
        text: "Acceso ágil a liquidez directa proveniente de ahorristas e inversionistas institucionales que buscan rendimientos superiores a la tasa bancaria pasiva.",
        feedback_immediate: "¡Conexión productiva real! Los pagarés bursátiles para pymes democratizan el crédito empresarial a tasas de mercado competitivas.",
        points_delta: 100
      },
      {
        id: 2,
        text: "La bolsa les regala el dinero a fondo perdido sin obligación de pagar intereses.",
        feedback_immediate: "Los pagarés bursátiles son instrumentos de deuda exigibles que devengan intereses y deben reembolsarse al vencimiento.",
        points_delta: -25
      },
      {
        id: 3,
        text: "No necesitan presentar ningún estado financiero ni tener RIF legal.",
        feedback_immediate: "La emisión bursátil requiere aprobación rigurosa de SUNAVAL con balances contables auditados.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Financiamiento Pyme BVC de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 12 (412)
  {
    id: 412,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 12,
    level_title: "Desafío 12 de 15: Facturas Negociables en la BVC",
    title: "Descuento de Facturas Comerciales (Factoring Bursátil)",
    source_text: "Un fabricante de empaques vende mercancía a una cadena de supermercados con factura a 90 días. El fabricante necesita dinero hoy para pagar su nómina semanal, por lo que registra la factura negociable en la BVC.",
    question: "¿Cómo opera el descuento de facturas comerciales en bolsa?",
    options: [
      {
        id: 1,
        text: "Un inversionista compra la factura con un pequeño descuento (ej. al 96% de su valor facial), adelantando liquidez al fabricante y cobrando el 100% al vencimiento.",
        feedback_immediate: "¡Operación de factoring bursátil ejemplar! El fabricante obtiene liquidez inmediata y el inversionista una tasa de rendimiento atractiva a corto plazo.",
        points_delta: 100
      },
      {
        id: 2,
        text: "El supermercado queda exento de pagar la factura por haber sido registrada en bolsa.",
        feedback_immediate: "El pagador original sigue obligado a pagar la factura en su fecha de vencimiento a quien posea el título.",
        points_delta: -25
      },
      {
        id: 3,
        text: "El fabricante debe devolver el doble del dinero a los 10 días.",
        feedback_immediate: "El factoring bursátil es una cesión de derecho de cobro a tasa transparente regulada por SUNAVAL.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Factoring Bursátil de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 13 (413)
  {
    id: 413,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 13,
    level_title: "Desafío 13 de 15: Ratio Precio/Ganancia (PER)",
    title: "Análisis Fundamental y Valoración de Acciones",
    source_text: "Dos empresas del sector consumo transan en la BVC. La Empresa A tiene un PER de 6x (su acción cuesta 6 veces su ganancia anual por acción), mientras que la Empresa B tiene un PER de 45x con ganancias estancadas.",
    question: "¿Qué interpretación analítica sugiere el ratio PER de la Empresa A frente a la Empresa B?",
    options: [
      {
        id: 1,
        text: "La Empresa A presenta una valoración potencialmente más atractiva o 'subvalorada' (se recupera la inversión en 6 años de utilidades), mientras que la Empresa B luce sobrevaluada.",
        feedback_immediate: "¡Métrica de análisis fundamental dominada! El PER compara el precio de cotización con los beneficios reales reportados por la empresa.",
        points_delta: 100
      },
      {
        id: 2,
        text: "La Empresa B es automáticamente mejor porque su número 45 es más grande.",
        feedback_immediate: "Un PER excesivamente alto sin crecimiento que lo justifique suele indicar sobreprecio especulativo de la acción.",
        points_delta: -25
      },
      {
        id: 3,
        text: "El ratio PER indica la cantidad de empleados que trabajan en la fábrica.",
        feedback_immediate: "El PER es Price to Earnings Ratio (Precio sobre Ganancias), una métrica puramente contable de valoración bursátil.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Análisis Fundamental de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 14 (414)
  {
    id: 414,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 14,
    level_title: "Desafío 14 de 15: Riesgo de Liquidez Bursátil",
    title: "Profundidad del Mercado y Facilidad de Venta",
    source_text: "Un inversionista desea vender con urgencia $5,000 USD equivalentes en acciones de una empresa muy pequeña que solo transa $10 USD diarios en la BVC.",
    question: "¿Qué efecto provocará intentar vender todo su paquete de acciones en una sola orden?",
    options: [
      {
        id: 1,
        text: "Desplome de precio (deslizamiento por iliquidez); la falta de compradores dispuestos obligará a bajar el precio drásticamente para liquidar la posición.",
        feedback_immediate: "¡Sabiduría de mercado invaluable! El riesgo de liquidez enseña a evaluar el volumen promedio diario antes de acumular posiciones grandes.",
        points_delta: 100
      },
      {
        id: 2,
        text: "El precio se multiplicará por 100 veces de inmediato.",
        feedback_immediate: "Una orden de venta masiva en un mercado con poca demanda presiona el precio a la baja, nunca al alza.",
        points_delta: -25
      },
      {
        id: 3,
        text: "El sistema de la bolsa congelará el dinero para siempre.",
        feedback_immediate: "El sistema no congela los títulos; simplemente no se emparejan órdenes hasta que aparezca una contraparte al precio ofertado.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Control de Liquidez de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  },
  // Desafío 15 (415)
  {
    id: 415,
    module_id: "bvc",
    module_name: "Bolsa de Valores de Caracas",
    level_number: 15,
    level_title: "Desafío 15 de 15: Ética Bursátil e Información Privilegiada",
    title: "Prohibición de Insider Trading y Sanciones Penales",
    source_text: "El contador de una empresa cotizada en la BVC descubre que los resultados del trimestre superarán en 300% las expectativas, antes de que el informe sea público. Le pide a un amigo que compre acciones para repartirse la ganancia.",
    question: "¿En qué infracción bursátil de máxima gravedad incurre el contador y cuál es la sanción legal?",
    options: [
      {
        id: 1,
        text: "Uso indebido de información privilegiada (Insider Trading); es un delito grave tipificado por la Ley de Mercado de Valores penado con prisión, multas severas e inhabilitación profesional.",
        feedback_immediate: "¡Gran Maestro de la Bolsa de Valores! Defiendes la transparencia e igualdad de condiciones del mercado bursátil, completando con honores los 15 desafíos de la BVC.",
        points_delta: 100
      },
      {
        id: 2,
        text: "Es una jugada astuta completamente legal y recomendada en las finanzas corporativas.",
        feedback_immediate: "Operar con información reservada destruye la confianza pública en los mercados y está penado severamente por la ley.",
        points_delta: -25
      },
      {
        id: 3,
        text: "Solo es delito si el contador utiliza su propio nombre en la orden de compra.",
        feedback_immediate: "Usar intermediarios o testaferros agrava la conspiración delictiva ante la SUNAVAL y el Ministerio Público.",
        points_delta: -25
      }
    ],
    correct_option_id: 1,
    bonus_avatar_id: "valeria_montero",
    bonus_tag: "Gran Maestro Bursátil BVC de Carlos",
    bcv_rate_context: BCV_RATE_STRING
  }
];
