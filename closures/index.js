/* Question 1 */

const createBase = (base) => {
  return function (increment) {
    console.log(base + increment);
  };
};

const addSix = createBase(6);
addSix(10);
addSix(21);

/* Question 2 */

// Optimisation the below

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   console.log(a[index]);
// }

const findInitilise = () => {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function find(index) {
    console.log(a[index]);
  };
};

const find = findInitilise();

console.time("6");
find(6);
console.timeEnd("6");

console.time("50");
find(500);
console.timeEnd("50");

/* Question 3 Whats the out put */

// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// function a() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// function a() {
//   for (var i = 0; i < 3; i++) {
//     function inner(index) {
//       setTimeout(() => {
//         console.log(index);
//       }, index * 1000);
//     }
//     inner(i);
//   }
// }

// a();

// Question 4 Create a private counter

function counterFactory() {
  let _counter = 0;
  function add(increment) {
    _counter = _counter + increment;
  }

  function logValue() {
    console.log(_counter);
  }

  return {
    logValue,
    add,
  };
}

const counter = counterFactory();

counter.add(10);
counter.add(11);

counter.logValue();

// Create a function that only runs once

const runOnceClosure = () => {
  let hasRun = false;
  return function () {
    if (!hasRun) {
      console.log("I ran ");
      hasRun = true;
    }
  };
};

const runOnce = runOnceClosure();

runOnce();
runOnce();
runOnce();
runOnce();
