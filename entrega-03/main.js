
// ----> CREADOR DE USUARIOS <---- \\

class Usuario {
    constructor (info) {
    this.nombre = info.nombre;
    this.apellido = info.apellido;
    this.edad = info.edad;
    this.altura = info.altura;
    this.fechaNacimiento = info.fechaNacimiento;
    this.pesoInicial = info.pesoInicial;
    this.correo = info.correo;
    this.inscripto = false;

    }

    inscribir(usuarios) {
        this.inscripto = true;
        this.id = usuarios.length + 1;
        usuarios.push(this);
    }
};


// ARRAY \\ 
const usuarios = [];

// USUARIOS INSCRIPTOS\\

/* 
 Luego me gustaria que estos usuarios puedan ser ingresados por un form. --------> // PENDIENTE \\ <----------
*/

new Usuario ({

    nombre: "Norman",
    apellido: "Parra",
    edad: 21,
    altura: "1.79",
    fechaNacimiento: "6-Jan-94",
    pesoInicial: 70,
    correo: "normanparra@gmail.com",

}).inscribir(usuarios);

new Usuario ({

    nombre: "Maximiliano",
    apellido: "Soto",
    edad: 22,
    altura: "1.87",
    fechaNacimiento: "19-Oct-93",
    pesoInicial: 108,
    correo: "maxisoto@gmail.com",
                    
 }).inscribir(usuarios);

new Usuario ({
    nombre: "César",
    apellido: "Villareal",
    edad: 25,
    altura: "1.85",
    fechaNacimiento: "26-Dec-90",
    pesoInicial: 92,
    correo: "cesarvillarreal@gmail.com",
        
}).inscribir(usuarios);

new Usuario ({
    nombre: "Irving",
    apellido: "fierro",
    edad: 24,
    altura: "1.80",
    fechaNacimiento: "30-Oct-91",
    pesoInicial: 97,
    correo: "irvingfierro@gmail.com",
            
}).inscribir(usuarios);

new Usuario ({
    nombre: "Juan",
    apellido: "Flores",
    edad: 25,
    altura: "1.73",
    fechaNacimiento: "18-Nov-90",
    pesoInicial: 91,
    correo: "juanflores@gmail.com",
                
}).inscribir(usuarios);


// ENVIO DE LOS USUARIOS AL LOCALSTORAGE \\

localStorage.setItem("usuarios", JSON.stringify(usuarios));

// ----> INGRESAR NUEVO USUARIO <-----  \\

const crearUsuario = (info) => {
    let usuarioJson = localStorage.getItem("usuarios");
    let usuarios = JSON.parse(usuarioJson);

    let nombre = prompt("Ingrese el nombre del usuario");
    let apellido = prompt("Ingrese el apellido del usuario");
    let edad = Number(prompt("Ingrese la edad del usuario"));
    let altura = Number(prompt("Ingrese la altura del usuario"));
    let fechaNacimiento = prompt("Ingrese fecha de nacimiento formato DD/MM/AA");
    let pesoInicial = Number(prompt("Ingrese peso"));
    let correo = prompt("Ingrese correo electrónico");


    let nuevoUsuario = new Usuario ({
        nombre,
        apellido,
        edad,
        altura,
        fechaNacimiento,
        pesoInicial,
        correo,
    }).inscribir(usuarios);

    // usuarios.push(nuevoUsuario); \\ el método del constructor ya hace el push.

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
};


// -----> BOTON PARA CREAR USUARIOS <----- \\   

let botonCrearUsuario = document.createElement("button");
botonCrearUsuario.addEventListener("click", (info) => crearUsuario(info));

botonCrearUsuario.innerHTML = "Crear Usuario";
document.getElementById("botonUsuario").append(botonCrearUsuario);


//----> CONTADOR DE USUARIOS <---- \\

const contadorUsuarios = usuarios.length;

const contador = document.getElementById("contador");
contador.innerHTML = contadorUsuarios;
contador.className = "counter";
document.body.append;


// ENVIO DE LISTA DE NOMBRES AL HTML \\

const nombresUsuarios = usuarios.map((usuario) => {
    if (usuarios["nombre"] != "" ) {
        return usuario.nombre;
    };

});

const listaUsuarios = document.createElement("li");
    listaUsuarios.innerHTML = nombresUsuarios;
    listaUsuarios.className = "lista";
    document.querySelector("#list").append(listaUsuarios);

// BÚSQUEDA DE USUARIOS \

function buscar() {

    let nombre = prompt("Ingrese el nombre de usuario que desea conocer los datos, para salir ingrese TERMINAR");

    while(nombre.toUpperCase() != "SALIR") {
        let usuario;

            for (const item of usuarios) {
                if(item.nombre.toUpperCase() === nombre.toUpperCase()){
                    usuario = item;
                }
            
            }

            if (usuario) {
                let mensaje = `
                
                Nombre: ${usuario.nombre}
                Edad: ${usuario.edad}
                Estatura: ${usuario.altura}
                Peso: ${usuario.pesoInicial}

                `;

                alert (mensaje);

            } else {
                alert("El usuario no existe");
            }
        nombre = prompt("Ingrese el nombre de usuario que desea conocer los datos, para salir ingrese SALIR");
    }
};

const boton = document.createElement("button");
boton.addEventListener("click", buscar);

boton.innerHTML = "Buscar Usuario";
document.querySelector("#boton").append(boton);




