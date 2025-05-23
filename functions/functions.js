var a = 12;
// I can
someFun(); // can call it before funciton definition
function someFun() {
  // Will return undefined because the var a is also hoiseted locally
  console.log("a=", a);
  var a = 14;
}

function someOtherFun() {
  // Will return 12
  console.log("a=", a);
}
someOtherFun();

function someOtherFunWithLet() {
  // Will return 12 ReferenceError: Cannot access 'a' before initialization
  // console.log("a=", a);
  let a = 14;
}
someOtherFunWithLet();

/* Rest operator - the rest oprator give the argumenet as an array
  - It should be the last param of the array
*/

function restOperator(...numbers) {
  console.log("These are the number", numbers);
}

restOperator(1, 2, 3, 4); // [1, 2, 3, 4]

//

function anotherRest(x, y, ...numbers) {
  console.log(x, y, numbers);
}

anotherRest(1, 2, 3, 4, 5, 6, 7); // 1,2, [3, 4, 5, 6, 7]

/* Arrow function */

// 1. Syntax
// 2. Implicit return

// 3. Arguments Keyword

function normalFunction() {
  console.log("arguments", arguments);
}

normalFunction(1, 2, 3);

const arrowFunction = () => {
  // console.log("arrow arguments", arguments);  ReferenceError: arguments is not defined
};

arrowFunction();

// 4. this keywork

const user = {
  userName: "Arjun",
  rc: () => {
    console.log("My name is", this.userName); // My name is undefined
  },
  rc2() {
    console.log("My name is", this.userName); // My name is Arjun
  },
};

user.rc();
user.rc2();
