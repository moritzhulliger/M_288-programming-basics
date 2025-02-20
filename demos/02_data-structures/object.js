const person = {
    firstName: "Danny",
    lastname: "Carey",
    job: "drummer",
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