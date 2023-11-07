/* let nuevoUsuario = new Usuario ({
    nombre: info.nombre,
    apellido: info.apellido,
    edad: info.edad,
    altura: info.altura,
    fechaNacimiento: info.fechaNacimiento,
    pesoInicial: info.pesoInicial,
    correo: info.correo,
});

 */
// Traigo primero la lista de nombres de manera Independiente

// const nombresUsuarioStorage = localStorage.getItem("usuarios");

// const nombresUsuarios = JSON.parse(nombresUsuarioStorage).map((usuario) => {
//     if (usuarios["nombre"] != "" ) {
//         return usuario.nombre;
//     };
// });

// const nombresUsuarios = usuarios.map((usuario) => usuario.nombre);

// // Envío la lista de nombres al html

// const listaNombres = document.querySelector("#list");
// listaNombres.innerHTML = ""; // Limpia la lista existente


// const listaNombres = nombresUsuarios.forEach((item) => {
//     const listaUsuarios = document.createElement("li");
//     listaUsuarios.innerHTML = `${item}`;
//     listaUsuarios.className = "lista";
//     document.querySelector("#list").append(listaUsuarios);
// });