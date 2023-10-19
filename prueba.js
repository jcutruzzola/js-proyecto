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
 Luego me gustaria que estos usuarios puedan ser ingresados por un form.
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



// console.log(usuarios);

const nombresUsuarios = usuarios.map(() => {
    if (usuarios["nombre"] != "" ) {
        return console.log(usuarios[0].nombre);
    };

})




// const user1 = {

//     nombre: "Juan",
//     apellido: "Flores",
//     edad: 25,
//     altura: "1.73",
//     fechaNacimiento: "18-Nov-90",
//     pesoInicial: 91,
//     correo: "juanflores@gmail.com"

// }

// console.log(user1["nombre"]);