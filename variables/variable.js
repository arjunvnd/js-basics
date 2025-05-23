/* 
 var, let, const
*/

// var
/*
 * var is function scoped
 */

var a = 5;

{
  var b = 10;
}
// it prints the variable 5 because its function scoped
console.log(a);
// it prints b since its function scoped and we have declared b inside a block
console.log(b);

function x() {
  const c = 15;
}
// This will give an error since c is declared inside function x and var c only has scope inside the funciton x
// console.log(c);

/*
 * Let and const are block scoped
 */
let d = 5;

{
  let f = 10;
}

console.log(d);
// here this will give an error since f is declared inside the block
// console.log(f);

// -------------------------------------

// Shadowing
// We can redeclare variable with same name under different scopes
// note we cannot redeclare a let as a var in a block scope

let g = 20;
// 20
console.log("g--->", g);

{
  let g = 25;
  // 25
  console.log("g--->", g);
}

// 20

console.log("g--->", g);

/* 
 Declartion 
 we cannot redeclare var in same scope but let cannot be redeclared in same scope
 const has to be intialise with some value
*/

// This is allowed
var h = 10;
var h = 20;

console.log("h--->", h);

// This will throw an error - Cannot redeclare block-scoped variable 'i' - This goes for const and let

let i = 22;

// let i = 23;

/* Hosinting  */
// This will be printed because var will be hoisted and intialised with the value j = undefined
console.log(j);
var j = 10;

// This will give an error unlike var const and let is hoised but is hoiseted on the temperal dead zone so the
//  it will throw an error - ReferenceError: Cannot access 'k' before initialization
console.log("k--->", k);

const k = 11;
