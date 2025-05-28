const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimal(i) {
  this.print = function () {
    console.log("THis", this);
    console.log("#" + i + this.species + ": " + this.name);
  };
  this.print();
}

for (let index = 0; index < animals.length; index++) {
  const animal = animals[index];
  printAnimal.bind(animal, index)();
}
