"use strict";
// let Animals=["Wolf","Tiger","Lion"]
Object.defineProperty(exports, "__esModule", { value: true });
// for(let i=0;i<Animals.length;i++){
//   console.log(`A ${Animals[i]} is very dangerous animal.`);
// }
// console.log("These animals cannot be kept as pets because they are very dangerous.!");
// Step 1: Define an array of animals with a common characteristic
let animals = ["Dog", "Cat", "Rabbit"];
// Step 2: Use a for loop to iterate through the array and print each animal's name
for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];
    // Step 3: Print a statement about each animal
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
// Step 4: Add a statement about their common characteristic
console.log(`Any of these animals would make a great pet!`);
