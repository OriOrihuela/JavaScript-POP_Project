# El pulpo de raza loba

De vez en cuando, usualmente entre las 8 y las 10 de la noche, Mariano se transforma en un escurridizo pulpo de gran tamaño con una larga barba blanca, lo que en Galicia llamamos un pulpo de raza loba.

Por un lado, Mariano está agradecido por no sufrir la típica licantropía de los gallegos. En vez de preocuparse por comerse accidentalmente al paisano de al lado, se preocupa de no terminar en la pota los martes en los que hay feria del pulpo en el pueblo. Tras varias ocasiones en las que se ha despertado aturdido y desnudo entre las rocas de la playa, ha decidido cerrar las puertas de su casa con llave y llenar la bañera con mejillones de la Ría para estar entretenido cuando se transforma.

Pero Mariano está preocupado y quiere solucionar su problema. Sospecha que hay algo que dispara la transformación, ya que no sucede todos los días. Como es un poco nerd, decide enfrentarse al problema de manera científica, registrando en un diario lo que hace cada día y anotando si se transformó o no con unos de sus ocho brazos.

Vamos a ayudarle a construir un programa mediante el cual pueda recoger la información que necesita en una estructura de datos, y luego aplicar un algoritmo para averiguar cuál o cuáles de las cosas que hace (caminar, ver la vuelta, beber vino, etc.) produce que se transforme en pulpo.

## Vamos a averiguar qué factores son los que más inciden en que Mariano se convierta en pulpo.

La **Correlación phi** _φ_ es una medida de la dependencia entre variables (_“variables” en el sentido estadístico, no en el de la programación_). Se expresa como un coeficiente cuyo valor cae en el rango de −1 a 1. Correlación 0 significa que las variables no están relacionadas, mientras que correlación 1 significa que las variables están perfectamente relacionadas: si conoces una, conoces el valor de la otra. Correlación con valores negativos, significa que las variables están relacionadas pero que son opuestas: cuando una es cierta, la otra es falsa.

Para variables binarias como el caso de las nuestras (_pulpo es verdadero o falso, “descansar” es verdadero o falso_), el coeficiente **phi** (_φ_) provee una buena medida de la correlación.

<div id='indice' />

## Índice

1. [Descripción Técnica](#id1)
    
    a. [Arquitectura de la aplicación](#id2)

    b. [Tecnologías usadas](#id3)

2. [Metodologías de trabajo utilizadas](#id4)
3. [Conclusiones](#id5)

    a. [Posibles Mejoras](#id6)

    b. [Principales dificultades encontradas](#id7)

<div id='id1' />

## Descripción técnica

<div id='id2' />

### Arquitectura de la aplicación:

La arquitectura de la aplicación se basa principalmente en una estructura modular de los diferentes componentes, de tal manera que cada archivo queda separado y diferenciado del resto de archivos de diferente extensión o propósito.

La actual arquitectura presenta claras diferenciaciones sobre el código o recursos usados para el desarrollo de la aplicación:

- 3 archivos `.html`
  - `index.html` -> pantalla de bienvenida al proyecto POP.
  - `diary.html` -> donde se visualizará el calendario y se permitirá al usuario interactuar con los diferentes días en él.
  - `actions.html` -> proveerá al usuario la capacidad de visualizar una gráfica sobre los valores distintos de PHI dependiendo de la acción realizada por Mariano.
- Archivo `index.js` -> éste archivo servirá como módulo de despliegue tanto local como remoto. En nuestro caso, nos permite desplegar la aplicación de forma adecuada en **Heroku** (_PaaS = Platform as a Service_), una oferta de cloud computing que proporciona a los usuarios un entorno de cloud en el que pueden desarrollar, gestionar y distribuir aplicaciones. Básicamente, crea nuestro propio servidor y lo ejecuta en el puerto o bien local o bien el que nos proporcione Heroku.

- Directorio `js` -> donde se hallarán las principales funcionalidades **Javascript** para el despliegue de datos necesarios al cliente. Éste contiene:
    - `actions.js` -> funcionalidades Javascript para el intercambio de información entre el módulo `functionalities/index.js` y la pantalla `actions.html`. Posee funciones propias, manejo del `DOM` y como peculiaridad crea una gráfica básica mediante puro `CSS`.
    - `diary.js` -> funcionalidades Javascript para el intercambio de información entre el módulo `domain/diary.js` y la pantalla `diary.html`. Mediante la interacción del usuario, permite visualizar el contenido de cada uno de ls dias registrados en el diario de Mariano mediante el manejo del `DOM.`
- Directorio `scss` -> donde se hallarán todos los archivos de tipo `.scss` para la edición de estilo sobre las pantallas.
    - Subdirectorio `actions` -> contiene `actions.scss` para el archivo `actions.html`
    - Subdirectorio `diary` -> contiene `diary.scss` para el archivo `diary.html`
    - Subdirectorio `index` -> contiene `index.scss` para el archivo `index.html`
    - Subdirectorio `commonSCSS`:
      - `footer.scss` -> contenido para el `footer` compartido por las 3 pantallas.
      - `grid.scss` -> contenido para llevar a cabo una web bajo el lema _**Responsive Design**_.
      - `header.scss` -> contenido para el `header` compartido por las 3 pantallas.
      - `palette.scss` -> diferentes colores para crear una paleta de colores para poder usar a lo largo de toda la aplicación.
      - `style.scss` -> contiene estilos genéricos para toda la aplicación. Realiza `@import` sobre el resto de módulos `.scss`.
- Directorio `images` -> contiene diferentes imágenes a usar en la aplicación, desde el `favicon` de la web hasta el `logo` del header, por ejemplo.
  - `canitaBrava.png` -> imagen del famoso pulpo gallego Mariano (_¡¿Cañita Brava?!_).
  - `gallega.png` -> imagen que representa lo que no queremos que le suceda a Mariano.
  - `pop.png` -> imagen en la que se puede ver a Mariano en todo su esplendor (_por esplendor nos referimos a transformado en pulpo, meh..._).
  - Subdirectorio `icons`-> contendrá diferentes iconos usados a lo largo de la aplicación.
    - `copyright.svg` -> imagen para simular que el copyright de esta página pertenece a _LasEncinas_.
    - `hashtag.svg` -> **#MarianoSeConvierte** requiere del hashtag pertinente. Nada más que añadir.
    - `pulpo.png` -> iconito chiquitito para la pestaña del navegador + el `header`.
- Directorio `domain` -> contiene el archivo `diary.js`, el cual nos sirve como `BBDD` para recorrer el diario de Mariano e interactuar con él. Éste archivo contiene la `const` **DIARY**, la cual es un `array` compuesto de objetos **Javascript**, con diferentes propiedades:
  - `eventos` -> `array` de `strings`. Cada `string` es un evento realizado por Mariano ése día.
  - `pulpo` -> `boolean` que nos indica si Mariano se ha convertido en pulpo o no ése día.
- Directorio `functionalities` -> contiene las diferentes funcionalidades **Javascript** para realizar el cálculo de **Phi**, las tablas de correlación, etc.
  - `correlationTables.js` -> usa `domain/diary.js` para el cálculo de la propiedad _correlationTable_ por cada una de las acciones de Mariano a lo largo de su diario. Consta de dos funciones:
    - `createCorrelationTable` -> contabiliza las veces que aparece cierta acción y si Mariano se convierte en pulpo o no por cada uno de los días en el diario de Mariano. De esta forma, se creará una matriz de `arrays`, la cual contendrá los valores necesarios para calcular **Phi**.
    - `iscorrelationTableValid` -> método por el cual se verifica que la propiedad _correlationTable_ creada mediante `createCorrelationTable` contiene los datos necesarios para poder calcular **Phi**. En cuyo caso no los contuviera, la propiedad se setearía a `null` y se desplegaría un `alert(...)` sobre el cliente.
  - `phi.js` -> contiene la función `calculatePhi`, la cual calcula la correlación (_**Phi**_) de la acción actual sobre la transformación de Mariano mediante la fórmula pertinente.
  - `index.js` -> contiene las funcionalidades principales para obtener los datos necesarios de las acciones realizadas por Mariano y así poder desplegarlos sobre la `UI`. Éste archivo lleva a cabo:
    - Un `import` del diario de Mariano (`domain/diary.js`).
    - Crear un nuevo objeto llamado `actionUtils`, utilizando a `Object` como nuevo prototipo a implementar sobre él.
    - `getAllActions` -> su objetivo es recorrer el diario de Mariano, y por cada día en él, acceder a cada uno de los eventos y crear una nueva propiedad en `actionUtils` la cual tendrá como clave el nombre de la acción y como valor un nuevo objeto **Javascript**.
    - la función `Action` tiene el cometido de definir un nuevo objeto **Javascript** para definir cada una de las nuevas propiedades del objeto `actionUtils`.
- Directorio `doc` -> contendrá documentación requerida para el desarollo del proyecto:
  - Diagrama de componentes -> boceto sobre la arquitectura escogida y las relaciones entre sus componentes.
  - Diagrama E/R de la `BBDD`.
  - Un diagrama (_circular, barras, etc_) donde se presente el tiempo invertido por componente y/o asignaturas, proporcionado por la aplicación **Clockify**.
- Directorio `.github` -> contiene un subdirectorio llamado `workflows` que hace referencia a una nueva característica de **Github** llamada _**Actions**_, la cual permite llevar a cabo una serie de acciones automatizadas cada vez que se realiza un despliegue a remoto. En nuestro caso, se realiza:
  - `nodejs.yml`-> un archivo que ejecuta una serie de acciones del entorno de desarrollo `NodeJS`. Ejecuta en concreto los comandos:
    - `npm ci` -> comando similar a `npm install`, el cual actualiza o instala los paquetes necesarios para la aplicación. La diferencia es que se usa en entornos automatizados (plataformas de testing, integración contínua, despliegue).
    - `npm test` -> ejecutará el módulo `__tests__` para el correcto chequeo de que el código pasa satisfactoriamente los casos test y la lógica no ha sido modificada para mal.
- Directorio `__tests__` -> contienes módulos `.js` creados con el propósito de poner a prueba la lógica establecida para el cálculo de las tablas de correlación, **Phi**, y el diario de Mariano. Contiene:
  - `actionUtilsTests/tests.js` -> tests sobre `functionalities/index.js` y sus funcionalidades.
  - `diaryTests/tests.js` -> tests sobre `domain/diary.js` y la `const` **DIARY** que contiene.
- `package.json` + `package-lock.json` -> archivos de carácter informativo sobre el proyecto y sus dependencias para llevarlo a cabo.
- Archivo `Procfile` -> arhivo que sirve para que Heroku sepa qué comandos ejecutar una vez la aplicación esté desplegada. En nuestro caso, ejecutará el comando `web`, el cual buscará nuestro servidor web (declarado en la carpeta raíz, en `index.js`) y lo pondrá en funcionamiento.

[_Volver al índice_](#indice)

<div id='id3' />

### Tecnologías usadas:

Las tecnologías usadas para llevar a cabo ésta aplicación son:
- Documentos **HTML** -> lenguaje de marcado utilizado mundialmente para el desarrollo de casi todo tipo de web actual. Consta de las siguientes características:
  - Es un lenguaje muy simple y general, que sirve para definir la estructura de los contenidos y desarrollar una descripción sobre cómo aparecen a lo largo del documento.
  - El texto en él se crea a partir de etiquetas, también llamadas `tags`, que permiten interconectar diversos conceptos y formatos.
  - Los elementos dan forma a la estructura esencial del lenguaje, ya que tienen dos propiedades (_el contenido en sí mismo y sus atributos_).
  - Cabe destacar que el **HTML** permite ciertos códigos que se conocen como `scripts`, los cuales brindan instrucciones específicas a los navegadores que se encargan de procesar el lenguaje: 
    - Entre los `scripts` que pueden agregarse, los más conocidos y utilizados son **JavaScript** y **PHP**.
  
- Módulos **Javascript** -> `scripts` que permiten crear contenido nuevo y dinámico, controlar archivos de multimedia, crear imágenes animadas, entre otras cosas más:
  - El lenguaje Javascript es ejecutado por el motor del navegador de Javascript, luego que el código **HTML** y **CSS** han sido juntados y congregados dentro de la página Web. Esto asegura que el estilo y la estructura de la página están en su lugar en el momento en que Javascript comienza a ejecutarse.
  - Esto es algo muy bueno, algo muy común en el uso de Javascript para modificar dinámicamente el código HTML y CSS, para que la interfaz de usuario sea actualizada, usando **DOM**:
    - El **DOM** (_Document Object Model_) `API` te permite manipular, crear, remover y cambiar códigos escritos en lenguaje HTML y CSS, incluso aplicando dinámicamente nuevos estilos a tu página web, etc. Cada vez que aparezca un aviso (_popup_) en una página web, o nuevo contenido a mostrarse en ella, es tan sólo un ejemplo, de lo que se puede hacer con la acción `DOM`.
- Edición/creación de hojas de estilo con **SASS**/**SCSS** -> estos preprocesadores son herramientas para los desarrolladores de sitios web, que permiten traducir un código de hojas de estilo no estándar, específico del preprocesador en cuestión, a un código CSS estándar, entendible por los navegadores. Los preprocesadores básicamente nos ofrecen diversas utilidades que a día de hoy no se encuentran en el lenguaje CSS, o bien no son compatibles con todos los navegadores:
  - Ejemplos pueden ser variables, anidación de selectores, funciones (denominadas mixins), etc.
  - En el caso concreto de SASS/SCSS, dispone de dos sintaxis diferentes:
    - `SASS` -> al igual que **Stylus** y **coffeescript** para el lenguaje de programación Javascript, no hace uso de llaves ni punto y coma final, en busca de la simplicidad.
    - `SCSS` -> Los `.scss` salieron con la versión 3 del preprocesador y permiten utilizar llaves e incorporar código de CSS clásico.
  - Tanto la sintaxis de `.sass` como la de `.scss` no puede ser interpretada directamente por los navegadores, por lo se debe compilar para traducir nuestro archivo SASS en un clásico fichero CSS.
- Empaquetador de aplicaciones web **Parcel JS** -> empaquetador de aplicaciones web, que se diferencia por la experiencia ofrecida a los desarrolladores. Ofrece un rendimiento ultra-rápido, utilizando procesamiento multinúcleo, y no requiere configuración.
  - Parcel puede utilizar cualquier tipo de archivo como punto de entrada, pero un archivo HTML o JavaScript es un buen lugar para comenzar. Si enlazas tu archivo JavaScript principal en el HTML usando rutas relativas, entonces Parcel lo procesará por ti, y reemplazará la referencia con una URL al archivo de salida.
  - Dispone de un servidor de desarrollo **embebido**, el cual automáticamente reconstruye su aplicación cuando realiza cambios en los archivos, y soporta reemplazo de _módulos en caliente_ para desarrollar rápidamente. 
  - **Parcel está basado en recursos**. Un recurso puede ser cualquier archivo, sin embargo, parcel tiene soporte especial para algunos tipos de archivos como JavaScript, CSS, y HTML. Parcel analiza automáticamente las dependencias a las que se hace referencia en estos archivos y los incluye en el paquete de salida. Recursos similares son agrupados en un mismo paquete de salida. Si importas un tipo de recurso diferente (por ejemplo, si importas un archivo CSS a partir de un archivo JS), empieza la construcción de un segundo archivo y añade una referencia al paquete de salida principal.
- Infraestructura web con la _api_ de **Express JS** -> nos provee una infraestructura web rápida, minimalista y flexible para _Node.js_. Sus principales características son:
  - **Aplicaciones web**: Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.
  - **API**: con miles de métodos de programa de utilidad HTTP y middleware a su disposición, la creación de una API sólida es rápida y sencilla.
  - Rendimiento: Express proporciona una delgada capa de características de aplicación web básicas, que no ocultan las características de Node.js que tanto ama y conoce.
- Casos test a servicio del framework **Jest** -> ha sido desarrollado por el equipo de Facebook y, aunque nace en el contexto de **React**, es un framework de testing generalista que podemos utilizar en cualquier situación. A día de hoy su popularidad ha ido _in crescendo_ por ofrecer una `api` de testing sencilla y fácil de aplicar para cualquier código Javascript. Aún así, cabe mencionar otros como: MochaJS, Jasmine, Karma, Puppeteer, etc.
  - Cero configuración por parte del tester.
  - Las pruebas se paralelizan ejecutándolas en sus propios procesos para maximizar el rendimiento.
  - Al garantizar que sus pruebas tengan un estado global único, Jest puede ejecutar pruebas de forma confiable en paralelo. Para agilizar las cosas, Jest ejecuta primero las pruebas previamente fallidas y reorganiza las ejecuciones en función de la duración de los archivos de prueba.
- Entorno de desarrollo servidor para Javascript **Node JS** -> concebido como un entorno de ejecución de JavaScript orientado a eventos asíncronos, `Node.js` está diseñado para construir aplicaciones en red escalables. 
  - Esto contrasta con el modelo de concurrencia más común hoy en día, donde se usan hilos del Sistema Operativo. Las operaciones de redes basadas en hilos son relativamente ineficientes y son muy difíciles de usar. Además, los usuarios de Node.js están libres de preocupaciones sobre el bloqueo del proceso, ya que no existe. 
  - Casi ninguna función en Node.js realiza **I/O** (_input/output_) directamente, así que el proceso nunca se bloquea. Debido a que no hay bloqueo es muy razonable desarrollar sistemas escalables en Node.js.
    - (_periférico de un computador capaz de interactuar con los elementos externos a ese sistema de forma bidireccional, es decir, que permite tanto que sea ingresada información desde un sistema externo, como emitir información a partir de ese sistema_).
- Despliegue de la aplicación **Heroku** y **AWS**:
  - Antes que nada, necesitamos entender a qué hacen referencia los conceptos `IaaS` y `PaaS`:
    - `IaaS` -> (_Infraestructure-as-a-Service_) es el sistema idóneo para desarrolladores que deseen encargarse de la gestión y administración de su infraestructura. Ofrece un mayor control que otras alternativas como `PaaS`, de modo que el desarrollador es el responsable de todo lo relacionado con el mantenimiento de la infraestructura, incluso de escalar sus aplicaciones en función de cuáles sean sus necesidades.
    - `PaaS` -> (_Platform-as-a-Service_) se presenta como la alternativa idónea para aquellos desarrolladores de aplicaciones que únicamente quieren preocuparse de construir la app. La infraestructura la proporciona la plataforma y se ocupa tanto de su gestión como de su mantenimiento.
  
  - `AWS` (_Amazon Web Services_)-> Es el mayor proveedor (_y uno de los pioneros_) de infraestructura en la nube (_IaaS_). `AWS` permite crear servidores virtuales de distintas capacidades y con sistemas operativos preinstalados. Los servidores pueden ser iniciados o detenidos en cualquier momento y el coste es calculado por hora.
    - **El principal ofrecimiento de AWS es el de proveer infraestructura**, es decir, los servidores no tienen ningún software preinstalado (_solo el sistema operativo_). Si el objetivo es publicar una aplicación en `PHP`, `Ruby` o `Python`, el cliente es el responsable de instalar y configurar todas las dependencias manualmente. 
    - También se deben configurar los balanceadores de carga y firewalls, y distribuir el servicio en las distintas zonas de `AWS` para garantizar la alta disponibilidad.
    - `AWS` también ofrece un amplio abanico de productos en la nube, como manejador de DNS (_Route53_), Bases de datos (_DynamoDB_, _SimpleDB_, _RDS_), almacenamientos de ficheros (_S3_, _EBS_), respaldos (_AMI_), colas/mensajes (_SQS_), notificaciones (_SNS_) y muchos otros. Estos servicios se complementan e integran muy bien entre ellos. Algunas alternativas similares a `AWS` son `Google Compute Engine` y `Rackspace Managed Cloud`.
  - `Heroku` -> A diferencia de `AWS`, cuyo principal foco es en infraestructura, Heroku está enfocado en la plataforma (_PaaS_). En lugar de servidores, **`Heroku` ofrece contenedores de Aplicaciones llamados `Dynos`**. Los Dynos están preconfigurados para los distintos lenguajes o tecnologías.
    - La mayor ventaja de este paradigma es la rapidez con la que se puede publicar una aplicación a la nube. Con un comando `git push heroku master`, la aplicación está lista para recibir peticiones. 
    - No hay que invertir tiempo en configurar servidores, firewalls, ni bases de datos. Todo esto viene con un coste adicional asociado, pero generalmente para aplicaciones o equipos pequeños realmente vale la pena ya que ahorra muchos problemas y dolores de cabeza que pueden presentarse si además hay que mantener la infraestructura.
    - La mayor desventaja con servicios como `Heroku` es la falta de personalización y optimizaciones que pueden realizarse cuando hay acceso más abierto a la infraestructura. Para una aplicación pequeña esto no es un problema representativo. Pero para una aplicación con decenas de millones de visitas al día, las optimizaciones a nivel de infraestructura pueden representar la diferencia entre funcionar o colapsar, además de representar grandes ahorros de coste. Entre algunas de las alternativas a `Heroku` encontramos a `Google App Engine`, `Openshift`, `AppFog` y `DotCloud`.
- Gestión del tiempo invertido en el proyecto mediante **Clockify** -> es una aplicación simple de seguimiento de tiempo y plantilla de horarios que permite realizar el seguimiento de las horas trabajadas en los proyectos. Es gratuita, independientemente de cuántos usuarios o proyectos tengas. Con esta herramienta puedes:
  - Realizar el seguimiento del tiempo dedicado a actividades con un clic.
  - Obtener una vista precisa de tu semana de trabajo.
  - Mejorar la rentabilidad de tus proyectos.
  - Mostrar a los clientes cuánto has trabajado.
  - Ver cómo tu equipo está distribuyendo su tiempo.
- Gestor de _BBDD_ **MySQL** -> sistema de gestión de base de datos relacional (_RDBMS_ por sus siglas en inglés) de código abierto, basado en lenguaje de consulta estructurado (_SQL_).
  - `MySQL` se ejecuta en prácticamente todas las plataformas, incluyendo Linux, UNIX y Windows. A pesar de que se puede utilizar en una amplia gama de aplicaciones, MySQL se asocia más con las aplicaciones basadas en la web y la publicación en línea.
  - `SQL` le dice al servidor qué hacer con los datos. En este caso, las declaraciones de SQL pueden indicarle al servidor que realice ciertas operaciones:
    - **Consulta de datos**: solicitar información específica de la base de datos existente.
    - **Manipulación de datos**: agregar, eliminar, cambiar, ordenar y otras operaciones para modificar los datos, los valores o los elementos visuales.
    - **Identidad de datos**: definir tipos de datos, por ejemplo, cambiar datos numéricos a números enteros. Esto también incluye la definición de un esquema o la relación de cada tabla en la base de datos.
    - **Control de acceso a los datos**: proporcionar técnicas de seguridad para proteger los datos, lo que incluye decidir quién puede ver o usar cualquier información almacenada en la base de datos.
- _IDE_ de desarrollo **Visual Studio Code** -> es un editor de código fuente desarrollado por Microsoft para Windows, Linux y macOS. Incluye soporte para la depuración, control integrado de `Git`, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código. Presenta destacables características como:
  - _Intellisense_ -> ir más allá del resaltado de sintaxis y `autocomplete` con IntelliSense, que proporciona terminaciones inteligentes basadas en tipos de variables, definiciones de funciones y módulos importados. 
  - Depuración de código -> directamente desde el editor, permite depurar aplicaciones en ejecución con puntos de interrupción, pilas de llamadas y una consola interactiva.
  - Comandos Git incorporados -> trabajar con `Git` y otros proveedores de `SCM` (_Software Configuration Manager_) nunca ha sido tan fácil. Permite revisar archivos `diff`, organizar y realizar confirmaciones directamente desde el editor, etc.
  - Extensible y personalizable -> Se puede instalar extensiones para agregar nuevos idiomas, temas, depuradores y para conectarse a servicios adicionales. Las extensiones se ejecutan en procesos separados, así pues no ralentizan ningún proceso relacionado con la aplicación.
  - Implementar con confianza y facilidad -> Con **Microsoft Azure** puedes implementar y alojar tus sitios: 
    - _React_ 
    - _Angular_
    - _Vue_
    - _Node_
    - _Python_
  - Almacenar y consultar datos basados ​​en documentos y relacionales, y escalar con computación sin servidor desde Visual Studio Code.
- Generador para paletas de colores **Coolors.co** -> generador de paletas de colores, gratuito y con más de 1.650.515 esquemas de colores dispuestos a ser de utilidad. Cuenta con:
  - Más de `450.000` usuarios.
  - `640.000` tipos de paletas de colores diferentes.
  - Más de `50.000` descargas.
  
  Entre sus principales características destacamos:
  - **Rápido y sencillo** -> Presionando la barra espaciadora, puedes crear diferentes esquemas de colores, los cuales están predefinidos para combinar entre sí.
  - **Imagen a colores** -> elegir los colores iniciales de tus imágenes y obtener la combinación perfecta automáticamente.
  - **Ajustar y refinar** -> personaliza tus colores con precisión ajustando la temperatura, el tono, la saturación, el brillo, etc.
  - **Exportar y compartir** -> exporta tus paletas en varios formatos útiles como `PNG`, `PDF`, `SCSS`, `SVG` o copia las URL permanentes.
  - **Colección de paletas** -> crea tu perfil y mantén todos tus esquemas de colores bien organizados con nombre y etiquetas.
  - **Colores en la nube** -> inicia sesión en tu cuenta y accede a tus creaciones en cualquier parte.

[_Volver al índice_](#indice)

<div id='id4' />

## Metodologías de trabajo aplicadas
En éste punto a tratar, cabe mencionar que hemos seguido principalmente 3 metodologías de desarrollo de software para llevar a cabo éste proyecto. Dichas metodologías son las siguientes:
- **eXtreme Programming (_XP_)** -> pone más énfasis en la adaptabilidad que en la previsibilidad. 
  - **Considera que los cambios de requisitos sobre la marcha son un aspecto natural, inevitable e incluso deseable del desarrollo de proyectos**.
  - Ser capaz de adaptarse a los cambios de requisitos en cualquier punto de la vida del proyecto es una aproximación mejor y más realista que intentar definir todos los requisitos al comienzo del proyecto e invertir esfuerzos después en controlar los cambios en los requisitos.
  - Se puede considerar la programación extrema como la adopción de las mejores metodologías de desarrollo de acuerdo a lo que se pretende llevar a cabo con el proyecto, y aplicarlo de manera dinámica durante el ciclo de vida del software.
  - `Existen diferentes valores` de acuerdo a ésta filosofía de desarrollo:
    - **Simplicidad** -> se simplifica el diseño para agilizar el desarrollo y facilitar el mantenimiento.
      - Refactorización del código: ésta es la manera de mantener el código simple a medida que crece (_evitar deuda técnica_).
      - Simplicidad en la documentación: de esta manera el código debe comentarse en su justa medida.
      - Los nombres largos no decrementan la eficiencia del código ni el tiempo de desarrollo.
    - **Comunicación** -> Para los programadores el código comunica mejor cuanto más simple sea. Si el código es complejo hay que esforzarse para hacerlo inteligible.
      - El código autodocumentado (_aquél que habla por sí solo_) es más fiable que los comentarios ya que éstos últimos pronto quedan desfasados con el código a medida que es modificado.
    - **Retroalimentación** (_feedback_) -> al estar el cliente integrado en el proyecto, su opinión sobre el estado del proyecto se conoce en tiempo real (en nuestro caso, el _cliente_ / _Product Owner_ es [David Gelpi](https://github.com/dfleta))
      - Debido a los `sprints` realizados a lo largo de estos últimos meses, hemos podido desarrollar e implementar diversas funcionalidades dependiendo de los conceptos dados por nuestro profesor.
      - Asimismo, el proyecto habla por sí solo -> han habido modificaciones que afectan a las funcionalidades `core` del código Javascript, y éstas quedan retratadas por el `control de versiones` llevado a cabo gracias a la _integración contínua_.
      - Gracias a los dos puntos anteriores, los criterios establecidos por el cliente se han podido llevar a cabo de forma satisfactoria. De esta forma, queda demostrado que la **retroalimentacón es un punto clave en el desarrollo de software**.
    - **Coraje** o **valentía** -> muchas de las prácticas implican `valentía`. Una de ellas es **siempre diseñar y programar para hoy y no para mañana**. Esto es un esfuerzo para evitar empantanarse en el diseño y requerir demasiado tiempo y trabajo para implementar el resto del proyecto.
      - La valentía le permite a los desarrolladores que se sientan cómodos con reconstruir su código cuando sea necesario.
      - Otro ejemplo de valentía es saber cuando desechar un código: valentía para quitar código fuente obsoleto, sin importar cuanto esfuerzo y tiempo se invirtió en crear ese código.
        >     Valentía significa persistencia: 𝑢𝑛 𝑝𝑟𝑜𝑔𝑟𝑎𝑚𝑎𝑑𝑜𝑟 𝑝𝑢𝑒𝑑𝑒 𝑝𝑒𝑟𝑚𝑎𝑛𝑒𝑐𝑒𝑟 𝑠𝑖𝑛 𝑎𝑣𝑎𝑛𝑧𝑎𝑟 𝑒𝑛 𝑢𝑛 𝑝𝑟𝑜𝑏𝑙𝑒𝑚𝑎 𝑐𝑜𝑚𝑝𝑙𝑒𝑗𝑜 𝑝𝑜𝑟 𝑢𝑛 𝑑í𝑎 𝑒𝑛𝑡𝑒𝑟𝑜, 𝑦 𝑙𝑢𝑒𝑔𝑜 𝑙𝑜 𝑟𝑒𝑠𝑜𝑙𝑣𝑒𝑟á 𝑟á𝑝𝑖𝑑𝑎𝑚𝑒𝑛𝑡𝑒 𝑎𝑙 𝑑í𝑎 𝑠𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒, 𝑠ó𝑙𝑜 𝑠𝑖 𝑒𝑠 𝑝𝑒𝑟𝑠𝑖𝑠𝑡𝑒𝑛𝑡𝑒.
    - **Respeto** -> el respeto se manifiesta de varias formas. Por mencionar algunas:
      - Los miembros respetan su trabajo porque siempre están luchando por la alta calidad en el producto y buscando el diseño óptimo o más eficiente para la solución a través de la refactorización del código.
      - Los miembros del equipo respetan el trabajo del resto no haciendo menos a otros, una mejor autoestima en el equipo eleva su ritmo de producción.
- **Pair Programming** -> requiere que dos programadores participen en un esfuerzo combinado de desarrollo en un sitio de trabajo. Cada miembro realiza una acción que el otro no está haciendo actualmente: Mientras que uno codifica las pruebas de unidades el otro piensa en la clase que satisfará la prueba, por ejemplo.
  
  La persona que está haciendo la codificación se le da el nombre de **controlador** mientras que a la persona que está dirigiendo se le llama el **navegador**. Se sugiere a menudo para que a los dos socios cambien de papeles por lo menos cada media hora o después de que se haga una prueba de unidad. Presenta ciertas características:
  - **Dos cabezas son mejores que una** -> si el **navegador** o **controlador** encuentra un problema con el código, habrá dos de ellos que resolverán el problema.
  
  - **Más eficiente** -> el pensamiento común es que ralentiza el tiempo de finalización del proyecto porque efectivamente está poniendo a dos programadores para desarrollar un solo programa, en lugar de hacer que trabajen independientemente en dos programas diferentes. Pero los estudios han demostrado que dos programadores que trabajan en el mismo programa son sólo un `15%` más lentos que cuando estos programadores trabajan de forma independiente, en lugar de la reducción del `50%` presupuestada.
  - **Menos errores de codificación** -> debido a que hay otro programador que supervisa tu trabajo, el resultadose plasma en un mejor código. De hecho, algunos estudios muestran que da como resultado un `15%` menos de errores que el código escrito por programadores en solitario. Además, permite que el **controlador** permanezca enfocado en el código que se escribe mientras el **navegador** atiende asuntos externos o interrupciones.
  - **Una forma efectiva de compartir conocimiento** -> puedes aprender mejor de tu pareja, especialmente en áreas que pueden no serte familiares. Los desarrolladores también pueden elegir las mejores prácticas y mejores técnicas de los programadores más avanzados.
  - **Desarrolla las habilidades interpersonales del personal** -> colaborar en un solo proyecto ayuda al equipo a apreciar el valor de la comunicación y el trabajo en conjunto.
- **Integración contínua** ->  es un modelo informático propuesto inicialmente por `Martin Fowler` que consiste en hacer integraciones automáticas de un proyecto lo más a menudo posible para así poder detectar fallos cuanto antes. Entendemos por integración la compilación y ejecución de pruebas de todo un proyecto.
  
  El proceso suele ser: cada cierto tiempo (_horas_), descargarse las fuentes desde el control de versiones (_por ejemplo CVS, Git, Subversion, Mercurial o Microsoft Visual SourceSafe_) compilarlo, ejecutar pruebas y generar informes.

  - En nuestro caso, la integración contínua ha sido llevada a cabo mediante `Git`, usando su sistema de control de versiones. Éste nos ha permitido desplegar contínuamente nuevo contenido a la aplicación. Por cada despliegue, se evitaban conflictos con la creación de _ramas_ (`branch`), asegurándonos que el trabajo realizado anteriormente no se vería perjudicado.
  - La creación del módulo `__tests__` y su ejecución automática llevada a cabo por las **Github Actions**, permite que podamos trabajar tranquilos sabiendo que la lógica principal del `core` del proyecto no ha sido alterada, y por tanto, establecemos un marco de seguridad sobre el código realizado hasta la fecha. En el caso de que se implementaran nuevas funcionalidades, tan sólo habría que crear nuevos casos tests para ellas, y éstas serían puestas a prueba por los casos tests de manera automatizada y verificada por el propio **Github**.
    - Sobre éste apartado, cabe mencionar que cada vez que se realiza una `merge/pull request` a través de la interfaz de Github, es la propia plataforma la que te indica de forma visual que el mergeo es posible, siempre pasadas las pruebas unitarias pertinentes. Ésto se debe a la configuración mencionada anteriormente del archivo `.github/workflows/nodejs.yml`, el cual ejecuta ciertos comandos `npm` sobre el proyecto.
  
  [_Volver al índice_](#indice)

<div id='id5' />

## Conclusiones
Por lo general, estamos satisfechos con el trabajo realizado. Hemos aprendido mucho a lo largo de estos 3 meses, y todo ello lo hemos intentado aplicar de la mejor forma posible al `Proyecto-POP`.

Para ser un proyecto sencillo, nos hemos encontrado en diferentes tesituras en las que, o bien no hemos encontrado una salida fácil y sencilla para X problema, o bien hemos conseguido encontrar la aguja en el pajar necesaria para seguir adelante. 

Y es por ello que Mariano va a formar parte de nosotros como programadores, desde ahora y para siempre (_siempre y cuando no nos lo encontremos cabreado y transformado en su ducha, lo cual sería violento_).

[_Volver al índice_](#indice)

<div id='id6' />

### Posibles Mejoras
- La posibilidad de crear un `CRUD`, es decir,  no únicamente leer el diario sino poder crear más días y/o eventos, la posibilidad de modificar algún día  y de eliminarlo, etc.
- La llamada `Ajax` -> aunque lo hayamos intentado, al final no la hemos podido realizar. Por lo tanto una gran mejora sería poder conectar el `backend` con el `frontend`. Y así no tendríamos que cargar el diario desde fichero en el `frontend`.
- Mejora de la `UI`-> debido al poco tiempo entre asignaturas, vida personal, etc, hemos optado por una interfaz gráfica bastante simple. En el caso de haber implementado más funcionalidades, la interfaz habría cambiado completamente.
- Ahorrar código HTML reutilizando `componentes`, los cuales van a ser utilizados a lo largo de la aplicación.


[_Volver al índice_](#indice)

<div id='id7' />

### Principales dificultades encontradas
- La llamada `AJAX`, puesto que al ser un evento asíncrono no hemos podido guardar el valor de la llamada para poder contar con el diario `backend`.
- Mantener la codificación UTF-8 en el servidor ya que algunos caracteres daban conflictos como: `ñ`, `ú`, etc.  
- Desplegar el servidor con base de datos desde un `Apache-server`.
- Gestionar bien el tiempo a dedicar en el proyecto, ya que la combinación de estudios externos + vida personal + FP Dual puede ser un poco _"dura"_.
- No volverse locos intentando realizar cosas por nuestra cuenta o que no se han podido ver en clase. 
- Documentarse adecuadamente e invertir tiempo en ello, ya que a veces los problemas que hemos tenido que afrontar al desarrollar ciertas cosas han sido por falta de conocimiento de causa.
- Satisfacer todos (_o casi todos, jeje_) los requerimientos de las asignaturas implicadas en el proyecto.


[_Volver al índice_](#indice)