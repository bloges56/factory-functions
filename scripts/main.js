//Lightning Exercises

//Doctor

const createDoctor = (name, specialty, practice) => {
    return {
        name: name,
        specialty: specialty,
        practice: practice
    }
}

const doctor = createDoctor("Fauci", "Diseases", "White House");
//console.log(doctor);

//Pet

const createPet = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}


var BowWowKennels = [];
const penny = createPet("Penny", "pointer");
BowWowKennels.push(penny);

const ginger = createPet("Ginger", "spaniel");
BowWowKennels.push(ginger);

const mimosa = createPet("Mimosa", "mut");
BowWowKennels.push(mimosa);

//console.log(BowWowKennels);

