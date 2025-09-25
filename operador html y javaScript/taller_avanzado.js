
let anioActual = 2024;
let anioNacimiento = 1995;
let edad = anioActual - anioNacimiento;
console.log("Tu edad es: " + edad);

// Operaciones con Dinero
let saldo = 1000;
saldo += 500;   // depósito
saldo -= 120;   // compra 1
saldo -= 75;    // compra 2
console.log("El saldo final de la cuenta es: $" + saldo);

// Elige la Mejor Oferta

let ofertaA = 250;
let descuentoA = 15; // %
let precioFinalA = ofertaA - (ofertaA * descuentoA / 100);

let ofertaB = 230;
let descuentoB = 5; // %
let precioFinalB = ofertaB - (ofertaB * descuentoB / 100);

let esMejorOfertaA = precioFinalA < precioFinalB;
console.log("¿Es mejor la oferta A?: " + esMejorOfertaA);

// Verificación de Entrada de Usuario
let numero = 20;
let esValido = (numero > 10 && numero < 50) || numero === 100;
console.log("El número es válido: " + esValido);

// El Dilema del Pastel
let rebanadas = 17;
let personas = 3;
let sobran = rebanadas % personas;
console.log("Sobran " + sobran + " rebanadas de pastel.");

// Suma de pares e impares

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumaPares = 0;
let sumaImpares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    sumaPares += numeros[i];
  } else {
    sumaImpares += numeros[i];
  }
}

console.log("La suma de los pares es: " + sumaPares);
console.log("La suma de los impares es: " + sumaImpares);

// =======================
// Invertir un array
// =======================
let frutas = ["mango", "kiwi", "fresa"];
let frutasInvertidas = [];

for (let i = frutas.length - 1; i >= 0; i--) {
  frutasInvertidas.push(frutas[i]);
}

console.log("Array invertido: " + frutasInvertidas);