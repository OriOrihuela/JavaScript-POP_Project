# Documentació de desplegament de  aplicacions web

### Projecte del primer trimestre de 2nDaw Dual : POP

- Descripció general:

     De vez en cuando, usualmente entre las 8 y las 10 de la noche, Mariano se transforma en un    escurridizo pulpo de gran tamaño con una larga barba blanca, lo que en Galicia llamamos un pulpo de raza loba.

    Por un lado, Mariano se siente afortunado por no sufrir la típica licantropía de los gallegos. En vez de preocuparse por comerse accidentalmente a los paisanos de la aldea, está muy afligido pensando que terminará en la pota los martes en los que hay feria del pulpo en el pueblo. Tras varias ocasiones en las que se ha despertado aturdido y desnudo entre las rocas de la playa, ha decidido cerrar las puertas de su casa con llave y llenar la bañera con mejillones de la Ría para estar entretenido cuando se transforma.

    Pero Mariano lo está pasando mal y quiere solucionar su problema. Sospecha que hay algo que dispara la transformación, ya que no sucede todos los días. Como es un poco nerd, decide enfrentarse al problema de manera científica, registrando en un diario lo que hace cada día y anotando si se transformó o no con unos de sus seis brazos y 2 patas.

    Vamos a ayudarle a construir un programa mediante el cual pueda recoger la información que necesita en una estructura de datos, y luego aplicar un algoritmo para averiguar cuál o cuáles de las cosas que hace (caminar, ver la vuelta ciclista, beber vino, etc.) produce que se transforme en pulpo.

- Objectius i justificació.

    El objectiu principal, és el de desplegar aquesta aplicació web per tal de poder-la executar.
    Per a fer això necessitarem, realitzar diferentes tasques com: Instalar php,configurar les directives del servidor (En aquest cas d'Apache) i l'instalació de diferents mòduls per obtenir dades del nostre projecte.

- Requeriments i recursos del servidor

    Hem emprat obviament com a servidor apache, hem instalat la llibreria de php, més endavant explicaré com ho hem fet.

    Tot això, ho tenim desplegat a una màquina remota amb el servei de AWS però la IP no és estàtica.Per tant, cada pic que apag la màquina me canvia la ip.

    Per accedir al contigut, és a dir a la visualització de la execució del codi php hem d'agafar la ip de la màquina i posar-la al navegador

- Disseny i configuració del servidor

    Hem configurat el servidor perquè al moment de carregar apache tenguin preferència el arxiu index.php sobre el arxiu index.html que te precedència per defecte.

    ```
    DocumentRoot /var/www/html
    <Directory "/var/www/html/pop">
            DirectoryIndex index.php index.html
    </Directory>

    ``` 


- Instalació del mòdul de php i mysql:

    - Php:
  
        He empleat aquesta comanda per l'instalació : 
    apt install php libapache2-mod-php php-mysql

        Després he hagut de configurar apache perque m'agafi els fitxers .php abans que els .html com abans ja he explicat.

        He reiniciat el servici

        I per acabar, he creat un fitcher index.php per comprobar que funciona correctamen.
    
    - Mysql:
       
       He empreat aquesta comanda:

       apt install mysql-server -y

       Acte seguit, he realitzat aquesta comanda per configurar mysql:

        sudo /usr/bin/mysql_secure_installation

       Després he posat en marxa el servei de mysql

       sudo systemctl enable mysql.service

       I, finalment he obert el port 3306 a la màquina remota.  


-Instal·lació webalizer

    Primer haurem d'instal·lar  webalizer amb la comanda:

        ´´´
        sudo apt install webalizer
        ´´´
    
    Després, cambiam a la configuració l'extensió del fitxer, és a dir, feim la comanda:

        ´´´
        sudo nano /etc/webalizer/webalizer.conf
        ´´´

    i dins el fitxer canviam la linea:
     LogFile /var/log/apache2/access.log.1 
     per :
     LogFile /var/log/apache2/access.log

     Aixecam el serveim empleant la comanda:

     ´´´
     sudo webalizer
     ´´´
    
    Cream la directiva amb la comanda:

     ´´´
     sudo nano /etc/apache2/sites-avaible/000.default
      ´´´

      Dins el fitxer hem posat aquesta directiva
       
    Alias /webalizer /var/www/webalizer/
    
    <Directory /var/www/webalizer>
    DirectoryIndex index.html
    Require all granted
    </Directory>

    Ara reiniciam apache amb la comanda:

      ´´´
     sudo systemctl restart apache2
      ´´´
    
    Després accedim a la nostra ip o localhost si ho feim desde la mateixa màquina i afegim un /webalizer i ens hauría de aparèixer la pàgina de webalizer.


    Redireccions:

    He afegit 3 redireccions al servidor:

    1- Redirect /code https://github.com/mikiPP/pop-backend

        Aquesta redirigeix al codi del backend a github
    
    2- Redirect /front https://pop-project.herokuapp.com/
        
        Aquesta mostra el frontend de la aplicació
    
    3- Redirect /git https://github.com/OriOrihuela/JavaScript-POP_Project/

        Aquesta mostra el codi del front end de l'aplicació

        
    


