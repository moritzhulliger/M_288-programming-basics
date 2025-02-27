/*** 
    Schreibe ein Programm, welches Hallo DeinName, in die console schreibt.
    Erstellt dazu einen String `helloString` und einen String `yourName` und kombiniert diese.
**/ 

const helloString = "Hallo";
const yourName = "Mischa";
const helloText = helloString + " " + yourName + " !!! ";
let age = 20;
let ageText = "Du bist " + age + " Jahre alt";
console.log(helloText + ageText);
console.log("Ein Jahr vergeht .... die Zeit läuft ...");
age = age + 1;
console.log("Du bist jetzt " + age + "Jahre alt");