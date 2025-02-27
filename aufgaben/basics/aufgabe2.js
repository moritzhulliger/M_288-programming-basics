/*** 
    Schreibe ein Programm, welches Hallo DeinName, in die console schreibt.
    Erstellt dazu einen Variable `helloString` und einen String `yourName` und kombiniert diese.

    https://www.w3schools.com/js/js_strings.asp
    https://www.w3schools.com/js/js_numbers.asp
**/
"use strict";

const helloString = "Hallo";

const yourName = "Moritz Dao";

const helloText = helloString + " " + yourName + "!!!! ";

let age = 37;

let ageText = "Du bist " + age +  " Jahre alt"

console.log(helloText + ageText);

console.log("Ein Jahr vergeht .... die Zeit läuft ...")

age = age + 1;

console.log("Du bist jetzt " + age + " Jahre alt")




