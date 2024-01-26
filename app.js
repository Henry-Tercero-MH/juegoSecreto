// /**
//  * Crea una lista vacía llamada "listaGenerica".
//  */
// let listaGenerica = [];
// /**
//  * Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
//  */
// let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
// /**
//  *Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
//  */
// lenguagesDeProgramacion.push("Java");
// lenguagesDeProgramacion.push("Ruby");
// lenguagesDeProgramacion.push("GoLang");

// /**
//  * Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
//  */
// function datosLista() {
//   for (i = 0; i < lenguagesDeProgramacion.length; i++) {
//     console.log(
//       `Datos de la lista posicion ${i + 1} ${lenguagesDeProgramacion[i]}`
//     );
//   }
// }
// datosLista();
// console.log("Inverso");
// /**
//  * Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
//  */
// function datosLista() {
//   for (i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
//     console.log(
//       `Datos de la lista posicion ${i + 1} ${lenguagesDeProgramacion[i]}`
//     );
//   }
// }
// datosLista();
// /**
//  * Crea una función que calcule el promedio de los elementos en una lista de números.
//  */
// function promedio(listas) {
//   let sum = 0;
//   for (i = 0; i < listas.length; i++) {
//     sum += listas[i];
//   }
//   return sum / listas.length;
// }
// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let mostrar = promedio(list);
// console.log("Media: ", mostrar);
// /**
//  * Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
//  */
// function numMayor(listaMayor) {
//   //creamos una variable llamada mayor en lista, y le pasamos la lista como parametro
//   let mayor = listaMayor[0];
//   let menor = listaMayor[0];
//   //recorremos la lista
//   for (i = 1; i < listaMayor.length; i++) {
//     if (listaMayor[i] > mayor) {
//       //si la listaMayor es mayor que mayor
//       mayor = listaMayor[i]; //mayor sera igual al elemento que se recorre en ese momento (1)
//       //para la siguente comparacion el nuemro de mayor es 1
//     } else {
//       if (listaMayor[i] < menor) {
//         menor = listaMayor[i];
//       }
//     }
//   }
//   console.log("El mayor es ", mayor);
//   console.log("El menor es ", menor);
// }
// let numeroMayor = numMayor(list);
// /**
//  * Crea una función que devuelva la suma de todos los elementos en una lista.
//  */
// function sumaLista(lista) {
//   let suma = 0;
//   for (i = 0; i < lista.length; i++) {
//     suma += lista[i];
//   }
//   return suma;
// }
// let sumarLista = sumaLista(list);
// console.log(`La suma de la lista es: ${sumarLista}`);
// /**
//  *Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
//  */
// function encontrarIndiceElemento(lista, elemento) {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === elemento) {
//       return i; // Retorna el índice del elemento encontrado
//     }
//   }
//   return -1; // Retorna -1 si el elemento no se encuentra en la lista
// }
// let buscarEl = encontrarIndiceElemento(list, 3);
// console.log(`El elemeto es ${buscarEl}`);
// /**
//  * Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
//  * @param {number[]} a - La primera lista de números.
//  * @param {number[]} b - La segunda lista de números.
//  * @returns {number[]} Una nueva lista con la suma de los elementos uno a uno.
//  */
// function listasMismoTamaño(a, b) {
//   //validar que sean del mismo tamaño
//   if (a.length !== b.length) {
//     throw new Error("Las listas deben tener la misma longitud");
//   }

//   let listaSuma = [];
//   for (let i = 0; i < a.length; i++) {
//     listaSuma.push(a[i] + b[i]);
//   }
//   return listaSuma;
// }

// let listA = [1, 2, 3, 4, 5, 6];
// let listB = [1, 2, 3, 4, 5, 6];

// try {
//   let sumarListas = listasMismoTamaño(listA, listB);
//   console.log(sumarListas); // Output: [2, 4, 6, 8, 10, 12]
// } catch (error) {
//   console.error(error.message);
// }
// /**
//  * Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
//  */
// function listapor2(lista) {
//   let listaCuadrada = [];
//   for (i = 0; i < lista.length; i++) {
//     listaCuadrada.push(lista[i] * lista[i]);
//   }
//   return listaCuadrada;
// }
// let resultadoListas2 = listapor2(list);
// console.log(resultadoListas2);
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Si ya sorteamos todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    //Si el numero generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  let nivelDificultad = prompt(
    "Digita el numero maximo para el nivel de dificultad"
  );
  numeroMaximo = nivelDificultad;
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  console.log(numeroSecreto);
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de números
  //Generar el número aleatorio
  //Inicializar el número intentos
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
