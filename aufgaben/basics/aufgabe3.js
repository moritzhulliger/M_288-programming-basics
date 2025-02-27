/** 
 * Erstelle ein Array von Personen-Objekten. Jede Person soll einen Namen, ein Alter und einen Beruf haben.
 * Gehe dann das Array durch und gib für jede Person folgenden String aus:
 * `Hallo 'name', du bist 'alter' Jahre alt und arbeitest als 'beruf'`.
 * 
 * Tipp: https://www.w3schools.com/js/js_array_iteration.asp
 */

const person = {
    name: "Mischa",
    alter: 20,
    beruf: "Mediamatiker"
};

const greeting = `Hallo ${person.name}, du bist ${person.alter} Jahre alt und arbeitest als ${person.beruf}.`;
console.log(greeting);
