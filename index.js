/* const x = 0; <<es una constante y su valor no se puede modificar>> 
let y = 0; <<cambiar la variable dependiendo del contexto>> 
var z = 0; <<igual que let>> 
*/

const express = require('express');
//<<require>> palabra reservada para importar archivos
//<<express>> es una clase de la cual nosotros queremos tener una instancia
const app = express();

/*
Verbos HTTP (denotan una accion en particular)
GET - obtener recurso (ejecuta en los navegadores cada vez que ponemos una direccion URL, regresan una pagina Web)
POST - guardar y/o publicar algo - almacenar/crear recursos
PATCH - actualizacion de datos de un recurso especifico - modificar una parte de un recurso
PUT - actualizacion de todos los elementos de datos - modificar un recurso
DELETE - eliminar un recurso/registro de una base de datos 
*/

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Bienvenido");
});
/*Resivira dos parametros (dentro del parentesis despues de get)
<</>> El primero es la URL que va a interpretar
<<>> El segundo es una funcion que tendra tres parametros:
    <<req>> almacena la info de la petición que nos hace el cliente
    <<res>> respuesta (objeto) que nosotros vamos a dar
    <<next>> 
    )*/

//levantando un servicio, osea, creando un servidor y el servidor permanece escuchando nuevas peticiones y por eso no termina su ejecucuión
app.listen(3000, () => {
    console.log("Server is running...")
});
/*Resivira dos parametros (dentro del parentesis despues de listen)
<<3000>> El primero será el puerto que va a levantar nuestro servidor
<<fuction>> El segundo será una funcion que se va a ejecutar de manera constante mientras el servidor este arriba*/