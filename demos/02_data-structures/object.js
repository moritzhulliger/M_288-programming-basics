const drummer = {
    vorname: "Danny",
    nachname: "Carey",
    beruf: "drummer",
    age: 63,
    albums: ["Undertow", "Lateralus", "Aenema", "10000 Days"],
    adress: {
        street: "Somestreet 123",
        town: "Los Angeles"
    },
    getFullName: function() {
        return this.firstName + " " + this.lastname
    }
}

const singer = {
    vorname: "Danny",
    nachname: "Carey",
    beruf: "drummer",
    age: 63,
    albums: ["Undertow", "Lateralus", "Aenema", "10000 Days"],
    adress: {
        street: "Somestreet 123",
        town: "Los Angeles"
    },
    getFullName: function() {
        return this.firstName + " " + this.lastname
    }
}

//logge das ganze object
// console.log(drummer)

//logge die Adresse
console.log(drummer.adress.street)

console.log(drummer.nachname)

if(drummer.age >= 60) {
    console.log("Er ist über 60 Jahre alt")
}

if(drummer.lastname === "Dao") {
    console.log("Sein nachname ist DAo")
}

if(drummer.lastname != "Dao") {
    console.log("Sein nachname ist nicht DAo")
}