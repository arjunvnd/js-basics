let a = { greeting: "Hey!" };
let b;

b = a;

b.greeting = "Hello";
console.log("b->", a, b);

let person = { name: "Sam" };

const members = [person];
person.name = null;

console.log("members", members);
console.log("person", person);

const d = 10;
const add = (c = 20) => {
  console.log((c += 2));
};

add();
add();

add(d);
add(d);

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

// 20
multiply(value);
// 40
multiply(value);
//20
multiply();
//20
multiply();

const changeAgeAndReference = (person) => {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };
  return person;
};

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log("personObj1", personObj1); //{name: 'Alex', age: 25} - person is reassigned so new reference is created so personObj1 is still having old reference. On reassign new reference is made for the new objec
console.log("personObj2", personObj2); //{name: 'John', age: 50}
