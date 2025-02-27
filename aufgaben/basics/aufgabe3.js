/**
 * Erstelle ein Array von Personen-Objekten. Jede Person soll einen Namen, ein Alter und einen Beruf haben.
 * Gehe dann das Array durch und gib für jede Person folgenden String aus:
 * `Hallo 'name', du bist 'alter' Jahre alt und arbeitest als 'beruf'`.
 * 
 * Tipp: https://www.w3schools.com/js/js_array_iteration.asp
 */
const JoergBrunner = {
    vorname: "Joerg ",
    nachname: "Brunner",
    alter: "45 ",
    beruf: " Polizist"
}

const LukasWaelti = {
    vorname: "Lukas ",
    nachname: "Waelti",
    alter: "25 ",
    beruf: " Strassenbauer"
}

const LeaHochstrasser = {
    vorname: "Lea ",
    nachname: "Hochstrasser",
    alter: "23 ",
    beruf: " Malerin"
}

const KarinMeier = {
    vorname: "Karin ",
    nachname: "Meier",
    alter: "34 ",
    beruf: " Koechin"
}

let listePersonen = [JoergBrunner, LukasWaelti, LeaHochstrasser, KarinMeier];

listePersonen.forEach(greetPerson);

function greetPerson(value) {
    console.log("Hallo " + value.vorname + value.nachname + " du bist " + value.alter + "Jahre alt und arbeitest als" + value.beruf + ".")
}
