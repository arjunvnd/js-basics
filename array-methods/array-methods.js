const giveArray = [1, 2, 3, 6];

Array.prototype.myMap = function (cb) {
  const newArray = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    newArray.push(cb(element, index, this));
  }
  return newArray;
};

Array.prototype.myFilter = function (cb) {
  const newArray = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (cb(element, index, this)) {
      newArray.push(element);
    }
  }
  return newArray;
};

Array.prototype.myReduce = function (cb, initialValue) {
  let accumalator = initialValue;
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    accumalator = accumalator ? cb(accumalator, element, index, this) : element;
  }
  return accumalator;
};

const mapped = giveArray.myMap((item, index, arr) => {
  return item * 2;
});

const filteredArray = giveArray.myFilter((item, index, arr) => {
  return item % 2 === 0;
});

const reducedValue = giveArray.myReduce((acc, currentValue, index, array) => {
  return acc + currentValue;
}, 0);

console.log("mapped array =", mapped);
console.log("filter array =", filteredArray);
console.log("reducedValue array =", reducedValue);
