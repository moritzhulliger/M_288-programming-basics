/**
 * Erstelle ein Array von Personen-Objekten. Jede Person soll einen Namen, ein Alter und einen Beruf haben.
 * Gehe dann das Array durch und gib für jede Person folgenden String aus:
 * `Hallo 'name', du bist 'alter' Jahre alt und arbeitest als 'beruf'`.
 * 
 * Tipp: https://www.w3schools.com/js/js_array_iteration.asp
 */

const heidi = {name:"Heidi", alter:"80", beruf:"Informatiker"};
const nik = {name:"nik", alter:"23", beruf:"Kaufmann"};
const Lukas = {name:"Lukas", alter:"15", beruf:"rennfahrer"}


const persons = [heidi, nik, Lukas];

persons.forEach(greetings);

function greetings(pers, index, array) {
  console.log("Hallo " + pers.name +  "du bist" + pers.alter +  "alt" + "und arbeitest als" + pers.beruf )
}