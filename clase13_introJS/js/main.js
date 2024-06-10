/**Clase23: intro JS*/

/*Hola mundo desde un archivo externo*/ 
/**console.log("Hola mundo");*/


//variables
/** 
var nombre ="Harry"
console.log(nombre)

let nombreLet ="Hermione" //string
console.log(nombreLet)

let edad = 10; //numerico
console.log(edad)
const PI =3.14;
let tenerMascotas = true; //variable boleana
console.log(edad, PI, tenerMascotas)

edad = 20;
console.log(edad, PI, tenerMascotas)*/

//operaciones basicas
/** 
let numeroA = 2;
let numeroB = 5;

let resultadoSuma = numeroA + numeroB;

console.log(resultadoSuma)

let nombre ="cosme";
let apellido ="fulanito";
const ESPACIO = " ";

let nombreCompleto = nombre +  ESPACIO + apellido;
console.log(nombreCompleto);

//prompt

let entrada = prompt("Ingrese su nombre");
let salida = "Hola " + entrada;
alert(salida);

let numero = parseInt(prompt("Ingrese un numero"));
const NUMEROB = 30;

let salidaNumero = numero + NUMEROB;
alert(salidaNumero);*/


// Solicitar el nombre al usuario y mostrar un saludo
/**let nombre = prompt("Ingrese su nombre");
let saludo = "Hola " + nombre;
alert(saludo);*/

// Solicitar un número al usuario, sumarlo a una constante y mostrar el resultado
/**let numero = parseInt(prompt("Ingrese un número"));
const NUMEROB = 20;

let suma = numero + NUMEROB;
alert("El resultado de sumar " + numero + " y " + NUMEROB + " es: " + suma);

// Solicitar dos textos al usuario, concatenarlos y mostrar el resultado
let texto1 = prompt("Ingrese el primer texto");
let texto2 = prompt("Ingrese el segundo texto");

let textoConcatenado = texto1 + " " + texto2;
alert("El texto concatenado es: " + textoConcatenado);*/

//Array
///Unidimensional
/**let numeros = [1,2,3,,5,8,9];
let colores = ["rojo", "verde", "azul"];

console.log(numeros[1]);
console.log(colores[0]);

//multidimensional
let colorMascota = [["perro", "marron", "gris", "rojo"],
["gato","blanco", "negro"],
["pez", "amarillo"],
["jirafa", "naranja"],];
console.log(colorMascota[1][2])
console.log(colorMascota[0][2].length)*/

//objeto utilizado como array asociativo

/**let persona = {
    nombre : "juan",
    edad : 28,
    profesion: "desarrollador",
};
console.log(persona["nombre"]);
console.log(persona["edad"]);
console.log(persona["profesion"]);

let empleados = [
    {nombre: "juan", edad: 32, profesion: "desarrollador"},
    {nombre: "lito", edad: 20, profesion: "tester"},
    {nombre: "Cosme", edad: 32, profesion: "Front end"}
];

console.log(empleados[1].nombre);*/


// Crear un array de strings con 5 elementos

/**let frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Uva"];

// Mostrar el array completo en la consola
console.log("El array de frutas es:", frutas);
console.log("El array tiene", frutas.length, "elementos.");
console.log("El primer elemento del array es:", frutas[0]);*/

// Crear un array de strings con 5 elementos
/**let colores = ["Rojo", "Azul", "Verde", "Amarillo", "Naranja"];

// Mostrar el array completo en la consola
console.log("El array de colores es:", colores);

// Mostrar cuántos elementos tiene el array
console.log("El array tiene", colores.length, "elementos.");

// Mostrar el primer elemento del array (índice 0)
console.log("El primer elemento del array es:", colores[0]);*/

// Crear una lista inicial de artículos para el supermercado
/**let listaSupermercado = ["Leche", "Pan", "Huevos", "Queso", "Manzanas"];

// Mostrar la lista inicial en la consola
console.log("Lista inicial del supermercado:", listaSupermercado);

// Pedir al usuario que ingrese un artículo para agregar a la lista
let nuevoArticulo = prompt("Ingresa un artículo para agregar a la lista del supermercado:");

// Verificar si el artículo ya está en la lista
if (listaSupermercado.includes(nuevoArticulo)) {
    alert("El artículo ya está en la lista.");
} else {
    // Agregar el nuevo artículo a la lista
    listaSupermercado.push(nuevoArticulo);
    // Mostrar la lista actualizada al usuario
    alert("La lista actualizada del supermercado es: " + listaSupermercado.join(", "));
    console.log("La lista actualizada del supermercado es:", listaSupermercado);
}*/
// Obtener el número del día actual (domingo = 0, lunes = 1, ..., sábado = 6)
let numeroDia = new Date().getDay();

// Variable para almacenar el nombre del día
let nombreDia;

// Usar un switch para asignar el nombre del día según el número
switch (numeroDia) {
    case 0:
        nombreDia = "Domingo";
        break;
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sábado";
        break;
    default:
        nombreDia = "Desconocido";
}


let idioma = "es"; // Puede ser "es" (español), "en" (inglés), "fr" (francés)
let saludo;

switch (idioma) {
    case "es":
        saludo = "Hola";
        break;
    case "en":
        saludo = "Hello";
        break;
    case "fr":
        saludo = "Bonjour";
        break;
    default:
        saludo = "Hello";
}

console.log(saludo + ", usuario!");

