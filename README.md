
![analytics image (flat)](https://raw.githubusercontent.com/vitr/google-analytics-beacon/master/static/badge-flat.gif)
![analytics](https://www.google-analytics.com/collect?v=1&cid=555&t=pageview&ec=repo&ea=open&dp=/Plantilla-de-repositorio/readme&dt=&tid=UA-4677001-16)

## Configuraci贸n del Aplicativo 馃憞


*Lo primero es dirigirse a la rama BD --> donde se debe descargar el SCRIPT de la BD con los insert de la tabla Regi贸n. Se deben ejecutar en un motor de BD Mysql para el correcto funcionamiento del mantenedor*


## Back End
---
En la rama Back End --> Se encuentra el desarrollo por el lado del Servidor, el cual debe ser utilizado en algun IDE que soporte el Framework de Spring Boot. Cargado el proyecto se debe realizar los cambios de la configuraci贸n de la BD en el archivo --> aplications.properties, estableciendo los datos de conexi贸n.

Teniendo lo anterior listo, ya es posible ejecutar la aplicaci贸n en el IDE. Es importante detectar en que puerto esta corriendo el lado del Back End, por si hace necesario modificar las rutas que apuntan desde la capa del Front End.


## Front End
---
Con la capa Back End en ejecuci贸n y cargada nuestra capa Front End(Rama Front) en algun IDE como Visual Studio Code, verificamos que en las rutas de nuesta capa Front End, especificamente en la capa Service --> formulario.service.ts y region.service.ts, esten apuntando correctamente a nuestro ambiente servidor. Verificada esta informaci贸n ya es posible correr nuesto lado Cliente, el cual utiliza el framework de Angular. Para esto se debe considerar lo siguiente:


- Instalaci贸n de NodeJS.
- Instalaci贸n de Angular --> a travez del siguiente comando: npm install -g @angular/cli.
- Contando con los dos pasos anteriores --> Se procede a abrir una terminal en el IDE utilizado para el Front, utilizando alguna terminal como Bash o de NodeJS para realizar lo siguiente:
     - Con el comando CD, cambiarse al folder del proyecto. Ej: cd mantenedor.
     - Luego, ejecutar el comando ng serve, para correr la aplicaci贸n en Angular.
     - Identificar el puerto y la ip que se muestra por consola, para copiar este en un navegador de preferencia como Chrome.
     - Realizado todo esto, ya es posible visualizar la vista de la aplicaci贸n y comenzar a ejecutar esta misma.


# Pendiente por realizar:

-Grabar --> Al utilizar dos tablas se me hizo complicado grabar la llave foranea de la Regi贸n, se creo como tabla Regi贸n para cargar los datos en la lista desplegable.
-Editar --> Lo mismo comentado arriba.
-Test Unitarios por capas.
-Mensajes al Agregar, Editar y Eliminar.
-Validar campos obligatorios.

Lo reconfortante fue haber aprendido durante el desarrollo de este desafio. Siendo mi mayor experiencia con Angular, la cual como habia comentado con anterioridad manejaba muy poco. Por otro lado la falta de tiempo y la alta carga de trabajo que me toco estos d铆as hizo que no pudiera completar el desafio y no demostrar que tal vez si podria haberlo completado. 
