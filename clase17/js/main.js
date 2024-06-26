/** Clase 16: Funciones js */

/* 
saludar("Cosme", "Fulanito", 5);


function saludar(nombre, apellido, edad){
  console.log ("Hola ", nombre, apellido,"tu edad es ", edad)
}

saludar("Harry", "Potter", 25);
saludar("Ron", "Weasley", 15);


//Declaración de la función, con parámetros
function sumar(num1, num2){
  return num1 + num2;
}

//LLamada de la función con los argumentos

sumar(5, 6);

let resultado = sumar(9, 12);

console.log(resultado);


//Funcion anonima y le asignamos una veriable
let suma = function( num1, num2){
  return num1 + num2;

}

let resultado = suma(12, 10);
console.log(resultado);

//Scope
 const num3 = 10;
function multiplicar(num1, num2){
 
  console.log(num3)
  return(num1 + num2)  * num3;
}

console.log(num3)

let resultado = multiplicar(10, 2)
console.log(resultado)*/
/* 
console.log(document.head);
console.log(document.body);
console.dir(document.head);
console.dir(document.body);

*/

//Selección de elementos del DOM querySelector
/** 
let titulo = document.querySelector('#titulo');
let parrafos = document.querySelectorAll('.parrafo');
let cambiarTextoBtn = document.querySelector('#cambiarTexto');
let cambiarColorBtn = document.querySelector('#cambiarColor');
let cambiarClaseBtn = document.querySelector('#cambiarClase');


console.log(titulo);
console.log(parrafos);
console.log(cambiarTextoBtn);


// Función para cambiar texto del título 
function cambiarTexto(){
  titulo.textContent = 'Texto nuevo';
}

//Función para cambiar el color de todos los parrafos seleccionados 

function cambiarColor() {
  parrafos.forEach(parrafo => {
      parrafo.classList.toggle('cambiarColor');
  });
}

function cambiarClase() {
  parrafos.forEach(parrafo => {
    parrafo.classList.toggle('nuevaClase');
});
}



//Asignar Evento CLICK a los botones
cambiarTextoBtn.addEventListener('click', cambiarTexto);
cambiarColorBtn.addEventListener('click', cambiarColor);
cambiarClaseBtn.addEventListener('click', cambiarClase);*/

// Clase 17: funciones y DOM"

class Mascota{
  constructor(nombre){
    this.nombre = nombre;
    this.adoptada = false;

  };
  //Metodo
  adoptar(){
    this.adoptada = true;
  }
}
/*
  const inputMascota = document.getElementById("nuevaMascota");
  const nombreMascota = inputMascota.value.trim ();
  console.log(inputMascota);
  console.log(nombreMascota);*/

//funcion agregar mascota a la lista

function agregarMascota() {
  const inputMascota = document.getElementById("nuevaMascota");
  const nombreMascota = inputMascota.value.trim();

  if (nombreMascota !== "") {
      const nuevaMascota = new Mascota(nombreMascota);

      // Crear el elemento de la lista
      const elementoLista = document.createElement("li");
      elementoLista.textContent = nuevaMascota.nombre;

      if (nuevaMascota.adoptada) {
          elementoLista.classList.add("adoptada");
      }

      // Evento
      elementoLista.addEventListener("click", function () {
          nuevaMascota.adoptar();
          elementoLista.classList.add("adoptada");
      });

       // Botón de editar
       const botonEditar = document.createElement("button");
       botonEditar.textContent = "Editar";
       botonEditar.addEventListener("click", function () {
           const nuevoNombre = prompt("Ingresa el nuevo nombre de la mascota:", nuevaMascota.nombre);
           if (nuevoNombre) {
               nuevaMascota.nombre = nuevoNombre;
               elementoLista.firstChild.textContent = nuevoNombre;
           }
       });

      // Botón de eliminar
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.addEventListener("click", function () {
          listaMascotas.removeChild(elementoLista);
      });

      elementoLista.appendChild(botonEditar);
      elementoLista.appendChild(botonEliminar);

      const listaMascotas = document.getElementById("listaMascotas");
      listaMascotas.appendChild(elementoLista);

      // Limpiar el input después de agregar la mascota
      inputMascota.value = '';
  }
}

// Evento para agregar mascota con la tecla Enter
document.getElementById("nuevaMascota").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      agregarMascota();
  }
});

const botonAgregarMascotas = document.getElementById("AgregarMascotas");
botonAgregarMascotas.addEventListener("click", agregarMascota);


function filtrarAdoptadas() {
  const listaMascotas = document.getElementById("listaMascotas");
  const mascotas = listaMascotas.getElementsByTagName("li");

  for (let i = 0; i < mascotas.length; i++) {
      if (!mascotas[i].classList.contains("adoptada")) {
          mascotas[i].style.display = "none";
      } else {
          mascotas[i].style.display = "block";
      }
  }
}

const botonFiltrarAdoptadas = document.createElement("button");
botonFiltrarAdoptadas.textContent = "Mostrar Adoptadas";
botonFiltrarAdoptadas.addEventListener("click", filtrarAdoptadas);

document.body.appendChild(botonFiltrarAdoptadas);
