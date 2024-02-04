console.log("Integrated the Practice JS Files");

// Array

// Array of Strings ( array of names )
const arr = ["Sanjay", "Vinoth", "Ajith", "Sowmiya", "Sangeetha"];

// Array of different types
const types = [24, "Male", false, "Developer"];

/* 

Sanjay
Vinoth
Ajith
Sowmiya
Sangeetha

*/

// Normal Array Iteration
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("================= Iteration Using For Of  ===============");
for (let name of arr) {
  console.log(name);
}

/* 

24
Male
true
Developer

*/

for (let val of types) {
  console.log(val);
}

// Iteration using For In

console.log("================= Iteration Using For In  ===============");
for (let i in arr) {
  console.log(arr[i], i);
}

const obj = {
  name: "Sanjay Saravanan",
  age: 30,
  dob: "YYYY-MM-DD",
  role: "Mentor",
  hobbies: ["singing", "dancing"],
};

/* 

name
age
dob
role

*/

// use Object.keys() along with for of
console.log(
  "====================== Object Iteration =========================="
);
const keys = Object.keys(obj);

for (let name of keys) {
  console.log(name);
}

/* 

name: Sanjay
age: 30
dob: YYYY-MM-DD
role: Mentor

*/

for (let name of keys) {
  console.log(name + ": " + obj[name]);
}

// Using For In in Object
//  we can use for in for keys iteration
console.log(
  "====================== Object Iteration For In =========================="
);
for (let key in obj) {
  console.log(key);
}

/* 

name: Sanjay
age: 30
dob: YYYY-MM-DD
role: Mentor

*/

for (let x in obj) {
  console.log(x + ": " + obj[x]);
}
