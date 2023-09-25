// DECLARER UNE VARIABLE
console.log("\n\n\nVariables");

let variable = "valeur";
console.log(variable);

let nombre = 10;
nombre = 25;
console.log(nombre);

// FAIRE DES OPERATIONS
console.log("\n\n\nOpérations mathématiques");

let somme = 4 + 5;
let difference = 7 - 3;
let produit = 5 * 11;
let quotient = 20 / 4;
console.log(somme, difference, produit, quotient);

// VARIABLES CONTANTES
console.log("\n\n\nVariable constante");

const fixe = 34;
// fixe = 49;
console.log(fixe);

// UTILISER UNE FONCTION
console.log("\n\n\nFonction");

const saluer = () => {
  console.log("Salut !");
};
saluer();

const addition = (a, b) => {
  return a + b;
};
// addition();
const resultat = addition(36, fixe);
console.log(resultat);

// LES CONDITIONS
console.log("\n\n\nCondition");

if (5 == 5) {
  console.log("5 égal 5.");
}

// const message = "POULE"; // "Message incorect."
const message = "POULET"; // "Message corect !"

if (message == "POULET") {
  console.log("Message correct !");
} else {
  console.log("Message incorect.");
}

// LES BOUCLES
console.log("\n\n\nBoucle");

// for (let i = 0; i < 10; i = i + 1) {
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// TYPES DE DONNEES
console.log("\n\n\nTypes de données");

const string1 = "Je suis codeur";
const string2 = "34";
const number1 = 24; // 24
const number2 = 133 - 33; // 100
const number3 = addition(number1, number2); // 124
const boolean1 = true; // true
const boolean2 = false; // false
const boolean3 = !false; // true

const array1 = [24, "Salut", 3 + 4, true];
console.log(array1);
// console.log(array1[1]);
// console.log(array1[0]);
// console.log(array1[4]);
console.log(array1[0], array1[1], array1[2], array1[3]);
const array2 = [
  [0, 45, 7],
  ["Hello"],
  ["35", true],
  [false, [45, 67], "Poulet"],
];
