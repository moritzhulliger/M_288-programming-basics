/*** 
    Schreibe ein Programm, welches Hallo DeinName, in die console schreibt.
    Erstellt dazu einen Variabel `helloString` und einen String `yourName` und kombiniert diese.
**/ 

const helloString = "Hallo";

const yourName = "Jasmin";

let age = 16;

let ageText = "Du bist " + age + " Jahre alt."

let helloText = helloString + " " + yourName;

console.log(helloText + ", " + ageText);

console.log("Ein Jahr vergeht ... die Zeit läuft ...");

age = age + 1;

console.log("Du bist jetzt " + age + " Jahre alt.");