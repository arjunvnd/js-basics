// This is used to reference the object based on the context

this.a = 5; // here we are in the global context

console.log("a is", this.a, this);

function getA() {
  console.log("a is", this.a, a); // this here should target the parent object, here parent object is window object
}

getA();

const arrowGetA = () => {
  console.log("a is", this.a, a); //
};

const user = {
  name: "John",
  age: 25,
  getUserName() {
    console.log("getUserName - Name is", this.name, this); // prints John because reference is the parent object
  },

  getUserNameArrow: () => {
    console.log("getUserNameArrow - Name is", this.name, this); // does not print John because reference is this keyword of parent function which here is window
  },

  childObj: {
    surName: "Doe",
    getChildObjName() {
      console.log("getChildObjName - Name is", this.surName, this.name); // prints only doe as this refers to childObj
    },
    getChildObjNameArrow: () => {
      console.log("getChildObjNameArrow - Name is", this.surName, this.name); // this still points to window onject
    },
  },
};

user.getUserName();
user.getUserNameArrow();

user.childObj.getChildObjName();
user.childObj.getChildObjNameArrow();

//

function makeUser() {
  return {
    name: "John",
    ref: this, // - G
  };
}

let b = makeUser();

console.log(b.ref.name); // gives undefined makeUser

const makeUserCoorect = () => {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
};

const c = makeUserCoorect();

console.log(c.ref().name);

//

const d = {
  name: "Arjun",
  logMessage() {
    console.log("d--->", this.name);
  },
};

setTimeout(d.logMessage, 1000); // will print d---> undefined. We have to execute the function to see this poting to d

setTimeout(() => {
  d.logMessage();
}, 1000);

//--------------

var length = 4;

function callBack() {
  console.log(this.length);
}

const obj = {
  length: 5,
  method(cb) {
    cb();
  },
};

console.log(obj.method(callBack));

// ----------------------------const result = calc.add(10).multiply(2).subtract(10).add(10);

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
};

const result = calc.add(10).multiply(2).subtract(10).add(10);

console.log(result.total);
