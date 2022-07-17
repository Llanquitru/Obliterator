# Obliterator backend

## Requesitos previos

Para levantar este backend en local en modo desarrollo o producción es necesario contar con las variables de entorno especificadas en el archivo [.env.example](./.env.example), pero en un archivo .env en el root del proyecto.

Así mismo, se usó Node.js v16.16.0 y npm 8.11.0 para el desarrollo.

## Instalación

Para instalar las dependencias del proyecto, se debe correr en la terminal:

```bash
$ npm i
```

## Uso

Una vez instaladas los paquetes necesarios para el proyecto, podemos correrlo localmente usando:

```bash
$ npm run service
```

De no haber ningún error tendremos un output similar a este:

```bash
➜ npm run service

> server@1.0.0 service
> nodemon

[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/* .env .env.example package.json
[nodemon] watching extensions: js
[nodemon] starting `npm run start`

> server@1.0.0 start
> node -r dotenv/config src/index.js

Mysql connection established.
Obliterator running at port: 3003
```