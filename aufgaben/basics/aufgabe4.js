/**
 * Erstellt ein Object für eine Person, diese Person soll einen Namen, ein Alter und ein Beruf haben.
 * Dann gebt folgenden String aus: `Hallo 'name', du bist 'alter' Jahre alt und arbeitest als 'beruf'`.
 */


const person = {
    name: "Mischa",
    alter: 20,
    beruf: "Mediamatiker"
};

const greeting = `Hallo ${person.name}, du bist ${person.alter} Jahre alt und arbeitest als ${person.beruf}.`;
console.log(greeting);
