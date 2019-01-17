const dogs = [];
const cats = [];
const goats = [];
const rats = [];


for (let i = 0; i < myPets.length; i++) {
    const currentPet = myPets[i];
    if (currentPet.species === "dog") {
        dogs.push(currentPet);
    } else if (currentPet.species === "cat") {
        cats.push(currentPet);
    } else if (currentPet.species === "goat") {
        goats.push(currentPet);
    } else if (currentPet.species === "rat") {
        rats.push(currentPet);
    }
}

console.log(dogs);
console.log(cats);
console.log(goats);
console.log(rats);