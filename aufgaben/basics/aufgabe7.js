/**
 * Erstellt einen Array aus Namen, dann gebt alle Namen in dem Array aus.
 * 
 * Füllt den Array mit Personen (die Objekte), dann gebt jeweils nur die Namen aus welche älter als
 * 20 Jahre sind.
 * 
 * Tipps: 
 * 
 * https://www.w3schools.com/js/js_loop_for.asp
 * https://www.w3schools.com/js/js_if_else.asp
 */

const people = [
    {
        name: "Frida",
        age: 23
    },
    {
        name: "Liam",
        age: 30
    },
    {
        name: "Sophia",
        age: 27
    },
    {
        name: "Noah",
        age: 35
    },
    {
        name: "Mia",
        age: 29
    }
];

for(let i = 0; i < people.length; i++) {
    if(people[i].age >= 30) {
        console.log(`${people[i].name} is older then 30 he is ${people[i].age}`)
    }
}


