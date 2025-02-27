/**
 * Erstelle ein Array von Personen-Objekten. Jede Person soll einen Namen, ein Alter und einen Beruf haben.
 * Gehe dann das Array durch und gib für jede Person folgenden String aus:
 * `Hallo 'name', du bist 'alter' Jahre alt und arbeitest als 'beruf'`.
 * 
 * Tipp: https://www.w3schools.com/js/js_array_iteration.asp
 */

const JanaMueller = {
    vorname: "Jana ",
    nachname: "Mueller",
    alter: "17",
    beruf: "Arzt"
}

const RobertSteiner = {
    vorname: "Robert ",
    nachname: "Steiner",
    alter: "32",
    beruf: "Informatiker"
}

const LeaJaengi = {
    vorname: "Lea ",
    nachname: "Jaengi",
    alter: "20",
    beruf: "Feuerwehrfrau"
}


let ListePersonen = [JanaMueller, RobertSteiner, LeaJaengi];

ListePersonen.forEach(sayHello);

function sayHello(value) {
    console.log("Hallo " + value.vorname + value.nachname + " du bist " + value.alter + " Jahre alt und arbeitest als " + value.beruf + ".")
}