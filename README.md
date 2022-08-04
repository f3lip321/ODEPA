
![analytics image (flat)](https://raw.githubusercontent.com/vitr/google-analytics-beacon/master/static/badge-flat.gif)
![analytics](https://www.google-analytics.com/collect?v=1&cid=555&t=pageview&ec=repo&ea=open&dp=/Plantilla-de-repositorio/readme&dt=&tid=UA-4677001-16)

## Configuración del Aplicativo 👇


*Lo primero es dirigirse a la rama BD --> donde se debe descargar el SCRIPT de la BD con los insert de la tabla Región. Se deben ejecutar en un motor de BD Mysql para el correcto funcionamiento del mantenedor*


## Back End
---
En la rama Back End --> Se encuentra el desarrollo por el lado del Servidor, el cual debe ser utilizado en algun IDE que soporte el Framework de Spring Boot. Cargado el proyecto se debe realizar los cambios de la configuración de la BD en el archivo --> aplications.properties, estableciendo los datos de conexión.

Teniendo lo anterior listo, ya es posible ejecutar la aplicación en el IDE. Es importante detectar en que puerto esta corriendo el lado del Back End, por si hace necesario modificar las rutas que apuntan desde la capa del Front End.


## Front End
---
Con la capa Back End en ejecución y cargada nuestra capa Front End(Rama Front) en algun IDE como Visual Studio Code, verificamos que en las rutas de nuesta capa Front End, especificamente en la capa Service --> formulario.service.ts y region.service.ts, esten apuntando correctamente a nuestro ambiente servidor. Verificada esta información ya es posible correr nuesto lado Cliente, el cual utiliza el framework de Angular. Para esto se debe considerar lo siguiente:


- Instalación de NodeJS.
- Instalación de Angular --> a travez del siguiente comando: npm install -g @angular/cli.
- Contando con los dos pasos anteriores --> Se procede a abrir una terminal en el IDE utilizado para el Front, utilizando alguna terminal como Bash o de NodeJS para realizar lo siguiente:
     - Con el comando CD, cambiarse al folder del proyecto. Ej: cd mantenedor.
     - Luego, ejecutar el comando ng serve, para correr la aplicación en Angular.
     - Identificar el puerto y la ip que se muestra por consola, para copiar este en un navegador de preferencia como Chrome.
     - Realizado todo esto, ya es posible visualizar la vista de la aplicación y comenzar a ejecutar esta misma.

