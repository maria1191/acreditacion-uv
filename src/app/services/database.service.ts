import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  noticias = [{
      titulo: 'UV destaca en ranking I+D+i Universitas-El Mercurio',
      image: 'https://uv.cl/images/index/_img_n2f.php?id=2704',
      video: null,
      cuerpo: ['La institución se ubicó novena en Chile y mejoró todos sus índices respecto a la medición de 2019.',
        'Una destacada figuración logró la Universidad de Valparaíso en el ranking I+D+i Universitas-El Mercurio, publicado este jueves.',

        'Tal como lo indica su nombre, este estudio realizado por el Grupo de Estudios Avanzados Universitas analiza la evolución de la investigación, el desarrollo y la innovación en las instituciones de educación superior chilenas y la de 2021 es su segunda entrega, tras su primera publicación en 2019.',
        'Ya hace dos años la UV había logrado un destacado noveno puesto, que en la presente versión del ranking mantuvo, pero con dos diferencias sustanciales: en primer lugar, esta vez el escalafón contempló a 53 instituciones, en vez de las 28 de la edición 2019; y en segundo término, la Universidad de Valparaíso subió su evaluación en las tres dimensiones que contempla el estudio.',
        'Así, en la categoría Capacidad y Productividad, la más importante y que tiene un 50% de ponderación, la UV mejoró de 13,8 puntos en 2019 a 22,25 ahora; en Impacto y Calidad (30% de ponderación), subió de 9,7 a 13,14; y en Transferencia e Innovación (20%) pasó de 1,8 a 3,77. Es por ello que la Universidad de Valparaíso subió su puntaje total en un 54,94% (de 25,3 en 2019 a 39,2) y se ubicó a sólo cuatro décimas de la universidad que figura octava, mientras que hace dos años estaba a 2,9 puntos de distancia.',
        'En los rankings específicos de cada ítem, la UV se ubica décima en Chile en Impacto y Calidad y Transferencia e Innovación, mientras que en Capacidad y Productividad se ubica duodécima.',
        'El Grupo de Estudios Avanzados Universitas destacó a la Universidad de Valparaíso como una de las casas de estudios por “utilizar creativamente las oportunidades de investigación que ofrecen las respectivas regiones y transformarse en polos de desarrollo”.',
        'En el caso de la UV, destaca específicamente que “cultiva 206 áreas temáticas, siendo astronomía y astrofísica (22,5%), biología molecular (4,3%) y neurociencias (4,2%) sus mayores fortalezas”.',
        'La importancia de los doctorados',
        'Dentro de la dimensión Capacidad y Productividad se destaca la importancia de los doctorados que cada universidad imparte.',
        'En este acápite la UV también figura entre las universidades destacadas, ya que está décima entre las que más programas ofrece (nueve), pero, sobre todo, porque se ubica séptima entre las que mayor promedio de años de acreditación de sus doctorados poseen, con 4,44.',
        'También la UV se destaca entre las universidades con mayor cantidad de académicos con doctorado, con un total de 615, que la deja en el octavo lugar a nivel nacional.',
        'Asimismo, la institución es destacada entre las que más proyectos Fondecyt se ha adjudicado entre 2010 y 2021, sumando un total de 43, que la posicionan novena.',
        'Líderes en investigación avanzada',
        'Dentro de esta misma categoría de Capacidad y Productividad, la Universidad de Valparaíso es destacada como una institución líder a nivel nacional a la hora de albergar o ser socia de centros de investigación avanzada, vale decir, institutos y núcleos Milenio, centros regionales, FONDAP y PIA con aporte basal.',
        'Aquí la UV figura en un destacadísimo cuarto lugar, al albergar o ser socia de trece de estos centros, lo que la pone primera en este ítem entre las universidades regionales estatales y también en la cima entre las universidades de la Región de Valparaíso.',
        'Fondef y patentes',
        'En el capítulo de Transferencia e Innovación, la UV también logra importantes resultados.',
        'Aquí la mejor nota la recibe la adjudicación de proyectos en el Fondo de Fomento al Desarrollo Científico y Tecnológico (Fondef), en el que la casa de estudios figura con cuatro propuestas aceptadas en 2020, lo que ubica quinta a nivel nacional y primera en la Región de Valparaíso.',
        'Asimismo, en el difícil ámbito de la generación de patentes, la UV es una de escasas universidades que muestra números importantes, contando con un total de 16 patentes solicitadas para el período 2009-2019, lo que la deja en el décimo puesto en Chile.',
        'Finalmente, en la Dimensión Impacto y Calidad, la UV figura en el octavo lugar nacional y primero en la Región de Valparaíso dentro de la subcategoría Porcentaje de top papers, que considera las publicaciones más citadas de cada disciplina.',
        'Para María Soledad Torres, vicerrectora de Investigación e Innovación de la Universidad de Valparaíso, "esta calificación responde a nuestra larga tradición en investigación científica y tecnológica de excelencia. Como se indicó en el estudio, el posicionamiento de la UV es muy fuerte en ciencias básicas, este elemento es central y permite la sustentabilidad de la decisión de la institución de continuar avanzando en el desarrollo de la innovación y la transferencia mediante la generación de nuevos productos y servicios para el mundo público y privado, y generar también el entorno que fomente el emprendimiento de base científico tecnológico".',
        'En tanto, Alejandro Dinamarca director de Innovación y Transferencia Tecnológica UV dijo que "estamos felices, porque en este ranking se sitúa a nuestra institución dentro del top ten de las universidades más importantes a nivel nacional en el área de la investigación, desarrollo e innovación. Esta felicidad se sustenta en que el área de innovación de nuestra universidad obtiene un puntaje destacado y, por lo tanto, demuestra que el trabajo de nuestras y nuestros innovadores están logrando que la ciencia y el conocimiento puedan ser contextualizados en problemas complejos para generar productos y servicios que se están transfiriendo a la sociedad con un impacto positivo.',
        '"Ese es el camino correcto y no tengo ninguna duda que la Universidad va a seguir avanzando en esta área, con más patentes otorgadas a tecnologías que cambiarán nuestras sociedades de manera positiva. Por lo tanto, desde la Dirección de Innovación y Transferencia Tecnológica de la Vicerrectoría de Investigación e Innovación quiero agradecer a todas y todos quienes están involucrados en lo que es la innovación y transferencia tecnológica, y de manera especial a nuestras y nuestros académicos que han iniciado este camino de innovar para transferir en base al conocimiento que generan", agregó.',
      ],
      published:  '11 de Noviembre de 2021'
    },{
    titulo: 'Consejo Académico de la UV se reunió para revisar estado de avance de proceso de autoevaluación',
      image: 'https://i.ytimg.com/vi_webp/KYzV--E8DhY/maxresdefault.webp',
      video: 'https://www.youtube.com/embed/KYzV--E8DhY',
      cuerpo: ['La jornada contempló la realización de un focus group para levantar información cualitativa para el proceso.',
               '',
               'El rector de la Universidad de Valparaíso, Osvaldo Corrales, y la directora general de Desarrollo Institucional y Aseguramiento de la Calidad, Soledad Narea, encabezaron el Consejo Académico extraordinario que se realizó este martes 26 en dependencias del Hotel del Bosque, en Reñaca. La finalidad del encuentro fue presentar a los representantes de académicos, funcionarios y estudiantes el estado de avance del trabajo de autoevaluación con miras al proceso de acreditación institucional, junto con aprovechar la instancia para levantar información cualitativa para el desarrollo del informe.',
               'Según explicó el rector Corrales, la reunión tuvo varios objetivos: “Tiene como primer propósito un reencuentro personal entre quienes constituimos este importante espacio de deliberación universitaria. Y, en segundo lugar, lo hemos dedicado al proceso que tal vez sea el más importante que vamos a vivir dentro de los próximos meses, que es el de autoevaluación con fines de acreditación institucional. Lo que hemos hecho hoy día es presentar a los integrantes y las integrantes de este consejo los resultados que hemos obtenido en las encuestas que se han aplicado durante este año, así como en otros instrumentos que la Dirección de Análisis Institucional ha venido aplicando a los distintos estamentos”.',
               'Añadió que “como un segundo propósito, vamos a hacer también un proceso de levantamiento de información cualitativa. El proceso de acreditación es un proceso que tiene que ser participativo y que tiene que ser por supuesto analítico, y para eso necesitamos no sólo aplicar encuestas, sino también recoger las opiniones más razonadas que los integrantes de la comunidad académica tienen, y entonces también en este Consejo Académico vamos a aprovechar de realizar ese proceso de reflexión colectiva acerca de los logros que la Universidad ha tenido durante los últimos cinco años, que es lo que dura el proceso de autoevaluación y acreditación anterior”',
               'Soledad Narea apuntó que “este Consejo Académico extraordinario tiene por finalidad dos momentos importantes: uno es dar cuenta del estado de avance del proceso de autoevaluación con fines de acreditación institucional, y el otro momento tiene que ver con realizar un focus group con los miembros del Consejo Académico, para recoger cierta información que para nosotros es relevante de cara a la elaboración del informe de autoevaluación”.',
               'Respecto de cómo se están cumpliendo los plazos en el desarrollo del proceso de autoevaluación, la directora general de Desarrollo Institucional y Aseguramiento de la Calidad afirmó: “Muy bien. Nosotros cuando asumimos en marzo realizamos una planificación muy detallada, y esa planificación se ha ido cumpliendo. Estamos en este minuto ya con los reportes de las comisiones completos, en un proceso de revisión y de mayor análisis del informe de autoevaluación, y nuestra idea es poder entregarlo en marzo a la CNA, para cumplir con los siete meses previos al vencimiento de la acreditación institucional, que es en octubre de 2022”.',
               'Asimismo, Soledad Narea destacó el positivo apoyo de la comunidad universitaria al proceso, indicando que “personas con las cuales he tenido contacto han valorado mucho la información y el proceso participativo que se ha llevado a cabo”.',
               'En la ocasión, el director de Análisis Institucional, Fuad Hatibovic, presentó los resultados de la Encuesta General de Autoevaluación, la que fue aplicada a académicos, académicas, funcionarios, funcionarias, estudiantes de pregrado y estudiantes de postgrado. La encuesta fue calificada como un instrumento de alta utilidad, por cuanto fue respondida por cuatro mil 389 personas, constituyéndose en una muestra representativa, que recogió una data de gran valor para el proceso de autoevaluación.'
              ],
      published:  '26 de Octubre de 2021'
    },{
      titulo: 'DGDIAC informó a facultades y unidades académicas sobre las funciones que desarrolla',
      image:  'https://www.uv.cl/images/index/_img_n2f.php?id=2435',
      cuerpo: [
        'Decanos, secretarios de Facultad, directores de escuelas e institutos, jefes de carrera y miembros de comités de calidad, autoevaluación y planificación estratégica participaron en las Jornadas de Socialización de la Dirección General de Desarrollo Institucional y Aseguramiento de la Calidad (DGDIAC), destinadas a difundir los aspectos relevantes de las funciones que dicha dirección desarrolla.',
        'En total, participaron de las jornadas, realizadas en dos días, alrededor de 125 personas.',
        'El programa de ambas jornadas se inició con la intervención de Soledad Narea, directora general de Desarrollo Institucional y Aseguramiento de la Calidad, quien expuso sobre las funciones y estructura de la DGDIAC, el modelo articulado PM/PDE y el estado de avance del proceso de autoevaluación con fines de acreditación institucional.',
        'Seguidamente, expuso Paula Quiroz, directora de Planificación, quien abordó las funciones, procesos y estado actual de situación de la DIRPLAN, construcción y seguimiento PD, facultades y escuelas, presentación de flujogramas y Smartsheet y socialización de responsables de seguimientos.',
        'A continuación, Daniela Moya, directora de Autoevaluación y Acreditación, se refirió a las funciones, procesos y estado actual de situación de la DAA, construcción y seguimiento PM carreras, presentación de flujogramas y Smartsheet y socialización de responsables de seguimientos.',        
        'Finalmente, Fuad Hatibovic, director de Análisis Institucional, explicó funciones, procesos y ficha institucional de datos de la DAI.'
      ],
      published:  '30 de Agosto de 2021'
    },{
      titulo: 'Consejo Académico es informado sobre avance de proceso de autoevaluación institucional',
      image:  'https://www.uv.cl/images/index/_img_n2f.php?id=2390',
      cuerpo: [
        'El Consejo Académico recibió una primera presentación del estado de avance del proceso de autoevaluación con miras a la acreditación institucional de la Universidad de Valparaíso este martes 27 de julio. La próxima presentación está anunciada para dentro de un par de meses y la última será al finalizar el informe.',
        'Según explica Soledad Narea, directora general de Desarrollo Institucional y Aseguramiento de la Calidad, “en el contexto de la difusión del estado de avance del proceso de autoevaluación, el martes 27 de julio se realizó una presentación en el Consejo Académico. Con respecto al estado de avance en específico, a la fecha se han entregado tres reportes desde las comisiones de Autoevaluación al Comité Técnico”.',        
        'Cabe recordar que las comisiones de Autoevaluación son los espacios en donde se levanta la evidencia verificable que permitirá dar cuenta del cumplimento de los criterios que establece la CNA. Están conformadas de manera triestamental y sus integrantes fueron ratificados o elegidos por Consejo Académico o por los consejos sectoriales.',
        'Las comisiones de Gestión, Pregrado, Postgrado, Investigación y Vinculación con el Medio entregan sus reportes al Comité Técnico, que los integra y consolida, para luego ser enviados a revisión del Comité de Calidad.'
      ],
      published:  '29 de julio de 2021'
    },{
    titulo: 'A buen paso se desarrolla proceso de Autoevaluación en Consejos de Facultad y campus',
      image: 'https://www.uv.cl/images/index/_img_n2f.php?id=2315',
      cuerpo: [
        'Directora general de Desarrollo Institucional y Aseguramiento de la Calidad valora el apoyo de toda la comunidad de la UV.',
        'En lo que se refiere al estado de avance del proceso en los Consejos de Facultad y Campus, Soledad Narea destaca que “se ha desarrollado de acuerdo a lo planificado, y en ese sentido quisiera destacar el gran apoyo que se ha tenido en los distintos niveles. Particularmente quiero relevar el rol de los académicos, funcionarios y estudiantes que son parte de las comisiones, y de los decanos y decana. Actualmente, nos encontramos a la espera del tercer reporte de fase desde las comisiones, para consolidarlo y enviarlo desde el Comité Técnico al Comité de Calidad”.',
        'En cuanto al trabajo de las facultades, explica la directora que “por un lado, en las comisiones participan decanos, académicos y estudiantes. Junto con ello, los decanos y decana han sido un gran apoyo en términos de ser parte activa del trabajo, pero además en colaborar con la difusión del proceso”.',
        'En lo referido a los campus San Felipe y Santiago, subraya Soledad Narea que “han participado en todos los procesos de difusión, a partir de la participación de sus consejos. Por otro lado, sus directores son parte de la comisión de gestión. De todas formas, los informes que se generan deben reflejar desde las diferentes áreas todo su desarrollo”.'
      ],
      published: '25 de junio de 2021'
    },{
      titulo: 'Rector Osvaldo Corrales invita a la comunidad UV a ser partícipe del proceso de autoevaluación',
      image: '/assets/noticias/Rector_Noticia-6f413fbc.jpeg',
      video: 'https://www.youtube.com/embed/rbDeliNYAtE?disablekb=1',
      cuerpo: [
        'Destacó el deber de “seguir honrando nuestra condición de institución pública de educación superior”.',
        'Con un mensaje en video de poco más de cinco minutos de duración, el rector de la Universidad de Valparaíso, doctor Osvaldo Corrales, invita a toda la comunidad de la institución a ser partícipe del proceso de autoevaluación con miras a la próxima acreditación.',
        'Días atrás dimos inicio formal al proceso de autoevaluación con fines de acreditación. En estos momentos estamos en la etapa de conformación de los distintos comités que llevarán a cabo esta actividad en virtud del conjunto de criterios que lo rigen y de los lineamientos establecidos por la Dirección General de Desarrollo Institucional y Aseguramiento de la Calidad, responsable del mismo”, expresa el rector Corrales al iniciar su mensaje.',
        'Como rector, pide a la comunidad universitaria, “muy sinceramente, que en adelante realicen el mayor esfuerzo posible para estar al tanto del desarrollo de esta importante actividad, y en caso de ser necesario, participen activamente de cualquier convocatoria que se les haga llegar, de modo que podamos contar con la mayor cantidad de información y así seamos capaces de poner en valor los importantes avances y mejoras que la institución, gracias al esfuerzo de cada una y cada uno de ustedes, ha experimentado en estos años”.',
        'Destaca el doctor Corrales que el proceso será participativo, de manera que la información será accesible para todos y todas. Asimismo, valora los pasos sustantivos que la UV ha dado en años precedentes “para consolidarse como una institución compleja” en distintas áreas, tales como pregrado, investigación, postgrado, infraestructura y vinculación con el medio.',
        'También el rector valora el aporte que la Universidad de Valparaíso ha hecho a la comunidad durante la pandemia, a través del trabajo de profesionales y centros de distintas disciplinas “que convirtieron el conocimiento en noticia”.',
        'En su mensaje, Corrales formula un llamado “a que, como tantas veces, nuevamente nos dispongamos para actuar como la comunidad que somos. Tenemos un deber con la institución, con la responsabilidad que demanda ser parte de una universidad pública, que tiene la noble misión de formar personas y generar conocimiento (…) Para seguir honrando nuestra condición de institución pública de educación superior”.'
      ],
      published: '31 de mayo de 2021'
    }, {
      titulo: 'Fue constituido el Comité de Calidad para el proceso de autoevaluación institucional',
      image: '/assets/noticias/ComiCal-b8c2eae9.jpeg',
      cuerpo: ['Instancia es liderada por el rector Osvaldo Corrales.',
        'Dentro del proceso de autoevaluación que se está llevando a cabo en la Universidad de Valparaíso con miras a la próxima acreditación institucional, este miércoles 19 de mayo se constituyó el Comité de Calidad, instancia encabezada por el rector de la casa de estudios, Osvaldo Corrales.',
        'Este Comité de Calidad está a cargo de coordinar de manera general el proceso de autoevaluación que está desarrollando la UV, y forma parte de la estructura propuesta por la Dirección General de Desarrollo Institucional y Aseguramiento de la Calidad y la Dirección de Autoevaluación y Acreditación para el proceso de autoevaluación institucional.',
        'El Comité de Calidad, liderado por el rector, está conformado por los vicerrectores, el prorrector, el contralor, la secretaria general, la directora general de Desarrollo Institucional y Aseguramiento de la Calidad, el director de Autoevaluación y Acreditación, el encargado de la Unidad de Modernización de la Gestión y un representante del gabinete del rector.',
        'La finalidad del Comité de Calidad es, según explica Soledad Narea, directora general de Desarrollo Institucional y Aseguramiento de la Calidad, “revisar los reportes de fase que emergen desde el Comité Técnico y que, a su vez, llegan al Comité Técnico desde las comisiones. Por otro lado, también tendrán la tarea de validar el informe final de autoevaluación que se va a ingresar a la CNA en marzo de 2022”.',
      ],
      published: '20 de mayo de 2021'
    },{
      titulo: 'Comisiones de Autoevaluación para la acreditación ya están constituidas y trabajando',
      image: '/assets/noticias/ComitTEc2-92dd24e6.jpeg',
      cuerpo: [      
        'Cada comisión revisará las áreas a acreditar. Todas están conformadas triestamentalmente.',
        'Entre el 6 y el 12 de mayo fueron conformadas e iniciaron sus tareas las cinco comisiones de Autoevaluación creadas en el contexto del proceso de autoevaluación con miras a la acreditación institucional de la Universidad de Valparaíso.',
        'Según explica Soledad Narea, directora general de Desarrollo Institucional y Aseguramiento de la Calidad, “para llevar adelante el proceso es fundamental el trabajo que realizarán las comisiones de Gestión, Pregrado, Postgrado, Investigación y Vinculación con el Medio, pues es en esos espacios en los que se levantará la evidencia verificable que permitirá dar cuenta del cumplimento de los criterios que establece la CNA”.',
        'Añade la directora que “estas comisiones están articuladas con el Comité Técnico a través de los integrantes denominados ‘contrapartes’, quienes tienen por función ser facilitadores del trabajo de cada comisión, orientando la recopilación de información y sistematizándola para entregar reportes que están establecidos en el cronograma del proceso de autoevaluación”.',
        'Asimismo, Soledad Narea enfatiza: “Me parece muy importante poner en valor que estas comisiones están conformadas de manera triestamental, y que los distintos representantes fueron ratificados o elegidos por Consejo Académico o por los consejos sectoriales”.'
      ],
      published: '17 de mayo de 2021'  
    },{
      titulo: 'Comité Técnico de Autoevaluación dio inicio a sus actividades',
      image: '/assets/noticias/ComitTEc1-b861946e.jpeg',
      cuerpo: [
        'Asimismo, se realizó un taller de inducción para las comisiones de autoevaluación.',
        'Como parte del proceso de autoevaluación con miras a la acreditación institucional que está desarrollando la Universidad de Valparaíso, este jueves 29 de abril se constituyó el Comité Técnico, instancia encargada de brindar soporte para el funcionamiento de las distintas Comisiones de Autoevaluación ‒una por cada área a acreditar‒, además de organizar, integrar y redactar el informe de autoevaluación que será entregado el año próximo a la CNA.',
        'Según explica Soledad Narea, directora general de Desarrollo Institucional y Aseguramiento de la Calidad, “dentro de la metodología aprobada para el proceso de autoevaluación, tanto en la Junta Directiva como en el Consejo Académico, se considera un nivel de coordinación general denominado Comité de Calidad, y luego el Comité Técnico. Luego, existen las comisiones en las áreas de Gestión Institucional, Pregrado, Posgrado, Investigación y Vinculación con el Medio, en las que se realiza la revisión documental y se redacta lo que hemos denominado informes de fase”.',
        'En este contexto, añade la académica, “el Comité Técnico se constituyó el 29 de abril, instancia en la cual se realizó una presentación por parte de su presidente, el director de Autoevaluación y Acreditación, profesor Nicolás Fuster, respecto a la estructura y funciones del Comité, además de los hitos más importantes del cronograma de autoevaluación”.',
        'El Comité Técnico está conformado por los directores de Autoevaluación y Acreditación (DAA), Nicolás Fuster; la directora de planificación, Paula Quiroz; el director de Análisis Institucional, Fuad Hatibovic; la encargada de la Unidad de Igualdad y Diversidad, Karin Berlien; la coordinadora técnica de la DAA, Jennifer Medina; la profesional de la DAA Silvana García, y los profesionales que actúan como contraparte en cada comisión: Alejandro Villela en Gestión, Pregrado y Postgrado; Yenny Olivares y Priscilla Berrios en Vinculación con el Medio, y Claudia Allendes en Investigación; Claudia Allendes es además asesora de redacción del informe.',
        'Las sesiones del Comité Técnico serán quincenales, mientras que las subcomisiones se reunirán de forma semanal o de acuerdo a requerimientos.',
        '',
        'Taller de Inducción',
        'Por otro lado, Soledad Narea se refirió al taller de inducción para las comisiones de autoevaluación, que también se desarrolló este jueves, con la participación de 58 personas.',  
        '“El objetivo del taller de inducción fue entregar información relevante para llevar a cabo el proceso de autoevaluación a los integrantes de las cinco comisiones (Gestión, Docencia Pregrado, Docencia Postgrado, Investigación y Vinculación con el Medio). En esta instancia se presentó primeramente el modelo de aseguramiento de la calidad de nuestra universidad por parte mía, y luego el profesor Fuster se refirió a las orientaciones para el proceso de autoevaluación con miras a acreditación institucional que entrega la CNA. Posteriormente, el profesor Hatibovic presentó la ficha institucional de datos en su versión digital, desarrollada por los profesionales de la Dirección de Análisis Institucional, y que será una importante herramienta al servicio del trabajo de las distintas comisiones. Finalmente, se presentaron las orientaciones para el trabajo de las comisiones, además de las fechas más importantes que deben tener a la vista”, indica la directora general de Desarrollo Institucional y Aseguramiento de la Calidad.',
        'Estas comisiones, que están conformadas de manera triestamental, deben comenzar a sesionar a partir de la semana del 3 de mayo.'
        
      ],
      published: '30 de abril de 2021'
    },{
      titulo: 'UV lanzó oficialmente proceso de autoevaluación con miras a la acreditación institucional',	
      image: '/assets/noticias/_img_n2f2-e900bfc4.jpeg',
      cuerpo: [
      '	Rector Osvaldo Corrales instó a la comunidad universitaria a hacerse parte del importante proceso.	',
      '	En un acto encabezado por el rector Osvaldo Corrales, acompañado por la directora general de Desarrollo Institucional y Aseguramiento de la Calidad, Soledad Narea, la Universidad de Valparaíso lanzó oficialmente este jueves 21 de abril su proceso de autoevaluación, con miras a la acreditación institucional 2022.	',
      '	La ceremonia, que se realizó por vía telemática y fue transmitida por streaming, contó con la presencia del prorrector, Christian Corvalán; la secretaria general, Daniela Marzi; y el contralor, Cristián Moyano, junto a los decanos de las once facultades de la UV, los vicerrectores, secretarios de Facultad, directores y directoras de escuelas, y representantes de los estudiantes, funcionarios y académicos.	',
      '	El proceso de autoevaluación con miras a la acreditación institucional corresponde a un proceso interno, reflexivo y participativo, mediante el cual la institución y su comunidad llevan a cabo un examen crítico, analítico y sistemático, cuyo objetivo es brindar información verificable y confiable respecto del cumplimiento de los criterios y estándares definidos por la institución.	',
      '	La primera en hacer uso de la palabra fue la directora general de Desarrollo Institucional y Aseguramiento de la Calidad, quien destacó que la autoevaluación es un proceso muy complejo, que al requerir de la participación de muchas personas se convierte en un trabajo de cohesión, que se articula y orienta hacia un objetivo común, y que desarrollarlo en este especial contexto socioepidemiológico será un enorme desafío.	',
      '	Asimismo, dijo Soledad Narea, todas las voluntades deben movilizarse hacia el objetivo de la acreditación, y se declaró confiada en que será un proceso exitoso, dada la solidez y excelencia de la Universidad de Valparaíso.	',
      '	Por su parte, el rector Osvaldo Corrales se refirió a la enorme importancia que tiene la acreditación institucional en el contexto de la educación superior chilena, altamente compleja y competitiva. En este sentido, se refirió a las diferencias existentes entre las instituciones reguladas ‒como es el caso de la UV en cuanto universidad pública‒ y las no reguladas, que se expanden cada vez más y dificultan el ejercicio de las primeras.	',
      '	Corrales afirmó que este proceso de autoevaluación debe involucrar a toda la Universidad, a sus tres estamentos, por cuanto se trata de un proceso reflexivo, que debe poner en valor todos los méritos que la institución tiene, y que desde la última acreditación, en 2017, han crecido en todas las áreas: Docencia de Pregrado, Docencia de Postgrado, Gestión Institucional, Investigación y Vinculación con el Medio.	',
      '	Del mismo modo, comentó que este proceso de autoevaluación alcanza a la UV en un contexto peculiarmente difícil, marcado por la pandemia así como por nuevas exigencias de parte de la Comisión Nacional de Acreditación. Sin embargo, subrayó, gracias al trabajo de todas y todos los miembros de la comunidad, el proceso se enfrenta sobre bases sólidas, que han permitido a la UV no sólo adaptarse a seguir trabajando y creciendo en pandemia, sino que además a convertirse en la institución regional que más ha aportado a la comunidad y al país en estos difíciles tiempos.	',
      '	Para cerrar, invitó a toda la comunidad de la casa de estudios a tomar parte en este proceso, de forma crítica, pero poniendo en valor todos los méritos que la institución tiene.	',
      '	Para finalizar la ceremonia, se exhibió un video en que algunos destacados exalumnos de la UV dieron testimonio de lo que significó para ellos estudiar en la institución; uno de esos testimonios fue el de Haroldo Brito, ex presidente de la Corte Suprema. La Universidad de Valparaíso ha titulado en su historia a más de 60 mil profesionales.	',
      ],
      published: '21 de abril de 2021'
    },{
      titulo: '	Expertos llaman a la comunidad UV a vacunarse	',
      image: '/assets/noticias/s12039-chica-efb4721f.jpeg',
      video: 'https://www.youtube.com/embed/dcf06Kz9-LA?disablekb=1',
      cuerpo: [		
      '	Este miércoles comienza el proceso de inoculación a personas sanas menores de 60 años.	',
      '	Una invitación especial a todas las personas que integran la comunidad de la Universidad de Valparaíso para que se vacunen contra el Covid-19, de acuerdo con el calendario y los requisitos establecidos por la autoridad sanitaria para el efecto, extienden la doctora e inmunóloga Caroline Weinstein y los médicos infectólogos Rodrigo Cruz y Rodrigo Vergara.	',
      '	Este miércoles comenzará en nuestro país el proceso de inoculación a personas sanas menores de 60 años, el grueso de la población chilena, y este llamado se suma a los mensajes que la rectoría de nuestra casa de estudios ha formulado en múltiples oportunidades a quienes forman parte de ella en cuanto a actuar con responsabilidad, cuidarse y cumplir con las medidas de prevención contra esta enfermedad, para evitar infectarse y con ello impedir que la pandemia se siga expandiendo en la Región y el país.	',
      '	La doctora Caroline Weinstein, profesora de Inmunología en la carrera de Química y Farmacia, y quien además forma parte del equipo de asesores externos del Instituto de Salud Pública (ISP), llamó a la comunidad a asumir el compromiso de vacunarse. “Quiero recordar que la historia de la inmunología ha demostrado que la vacunación ha permitido erradicar infecciones que otrora causaron grandes pandemias y graves problemas a la salud de la población, incluso la muerte, tal como la viruela y luego la poliomielitis. Por lo tanto, hoy día acudir al llamado, considerando la fortuna que tenemos, porque no en todos los países tienen la posibilidad de ser vacunados oportunamente, es un deber moral”.	',
      '	Agregó que “es un deber moral no solo sobre nosotros mismos para protegernos, sino que también para proteger a nuestra comunidad, a los seres que queremos. La vacunación no es solo un acto personal, al vacunarnos protegemos a nuestro entorno. Las cifras que tenemos de nuevos casos día a día muestran lo importante que es responder como seres humanos, que somos sensibles a lo que pasa a nuestro alrededor, a nuestros compañeros, hermanos, amigos e incluso a un desconocido que nos podamos encontrar en el transporte público, en distintas actividades, que aunque restringidas aún siguen ocurriendo. Considero muy importante que esta población general, que probablemente es la que más se moviliza, la más expuesta al contacto con terceros, asuma su responsabilidad social y moral de ir a vacunarse. No hay que hacer caso de las noticias falsas, que intentan crear pánico en la población: las vacunas son tan seguras como muchos medicamentos que las personas toman día a día. Han sido probadas. Actualmente han sido administradas a millones de personas y el beneficio supera largamente el riesgo. Por lo mismo, le pido a la comunidad que cuando le corresponda, por su grupo etario, asista a vacunarse y tome las precauciones que se han establecido, como es el quedarse en el sitio de vacunación, durante media hora, que es cuando pueden ocurrir las reacciones adversas más severas y que es donde se tendrán todos los medios para asistir a estas personas. Y también no olvidemos que el vacunarnos no significa que vamos a poder volver a la vida normal, ya que es un escudo más que se suma al uso de la mascarilla, el distanciamiento físico y el lavado de manos”.	',
      '	“La situación epidemiológica y sanitaria es realmente crítica, con un sistema hospitalario que día a día sufre de estrés y falta de camas. Nuestra universidad, con el apoyo de las autoridades, ha participado directamente en una serie de acciones destinadas a contribuir tanto al diagnóstico como a la difusión de las medidas de prevención del Covid-19. Por eso, les llamamos a que nos cuidemos como comunidad, lo que entre otras cosas implica que nos vacunemos, especialmente quienes pertenecen a los grupos de riesgo, ya que nuestra labor es esencial para muchas otras personas”, afirma el doctor Rodrigo Cruz.	',
      '	“La invitación es para todas las personas que cumplan con los requisitos de edad o tengan patologías de base para que se vacunen y lo hagan a su debido tiempo. Esta es la manera efectiva de protegernos a nosotros, a nuestras familias y al resto de la gente. Además, como integrantes de una comunidad universitaria, hacerlo es dar al mismo tiempo un mensaje destinado a que la población se dé cuenta de la importancia que tiene la decisión de ponerse la vacuna. Porque solo si logramos que el 80% de la población nacional esté vacunada vamos a poder pensar en controlar la pandemia”, asegura a la vez el doctor Rodrigo Vergara.	',
      ],
      published: '23 de marzo de 2021'		
  }];

  constructor() { }

  getNoticias(start: number=0, pageCount: number=9): any[] {
      return this.noticias.slice(start, pageCount);
  }
}


import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 