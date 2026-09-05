"use strict";
let a = 10;
let b = 20;

// console.log(a + b);

// window.alert(10 + 66);
// document.write("HII...");

// for(initailze;condition;update){
//     for loop body
// }

for (let i = 0; i < 5; i++) {
  if (i % 2 == 0) {
    // console.log(i);
  }
}

// let i = 0;
// do {
// i++;
//   console.log(i);
// } while (i < 5);
// let n = 0;
// let x = 1;
// while (n < 10) {
// x += n;
// console.log(x);
// console.log(n);
// n++;
// }

// let x = 0;
// let z = 0;

// labelCancelledLoops: while (true) {
//   console.log("Outer loop", x);
//   x++;
//   z = 1;
//   while (true) {
//     console.log("Inner loop", z);
//     z++;
//     if (z === 10 && x === 10) {
//       break labelCancelledLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }

// break: exit loop
// continue: skip the current iteration of the loop and continue with the next iteration

// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   n += i;
//   console.log(n);
// }

// FUNCTIONS
// function greet() {
//   console.log("hello World!!!!!!");
// }

// let disPi = function () {
//   console.log("Pi is approximately 3.14159");
// };

// greet();
// disPi();

// let x = myFunction(4, 2);
// document.getElementById("demo").innerHTML = x;
// function myFunction(a, b) {
//   return a * b;
// }

// myFunction();

// const smart = () => {
//   console.log("I'm Smart");
// };

// smart();

// const square = (x) => x * x;

// console.log(square(5));

// const sum = (a, b) => {
//   console.log(a + b);
// };

// sum(100, 3);

// const name = (Firstname, lastName) => ({ first: Firstname, last: lastName });

// console.log(name("John", "Doe"));

// APPLY()

// var arr = [1, 2, 3, 4, 5];
// let sum = Math.min.apply(null, arr);
// document.write(sum);

// var arr = [1, 2, 3, 4, 5];
// var newarr = ["a", "b", "c"];
// arr.push.apply(arr,newarr);
// document.writeln(arr);

// var website = {
//   name: "w3schools",
//   getName: function () {
//     return this.name;
//   },
// };

// var unBoundGetName = website.getName;
// var boundGetName = unBoundGetName.bind(website);
// document.writeln(boundGetName());

// function emp(id, name) {
//   this.id = id;
//   this.name = name;
// }
// function PermanentEmp(id, name) {
//   emp.call(this, id, name);
// }
// document.writeln(new PermanentEmp(010, "Abhi-Abhi").name);

// function add(x, y) {
//   return x + y;
// }
// let res = add(10, 20).toString();
// // console.log(add(10, 20).toString());
// console.log(typeof res);
// console.log(typeof add.toString());

// Global Variables
// let globalVar = "I am good to go for Global Variables";
// function myFunction() {
//   console.log(globalVar);
// }

// myFunction();

// Local Variables
// function myFunction() {
//   let LocalVar = "I am good to go for Local Variables";

//   console.log(LocalVar);
// }

// myFunction();
//   console.log(LocalVar);

// function myFunc() {
//   if (true) {
//     let blockVar = "Block Variable";
//     console.log(blockVar);
//   }
// }

// myFunc();

// Accessing HTML Elements
// const headerElement = document.getElementById("header");
// const paragraphs = document.getElementsByClassName("paragraph");
// const images = document.getElementsByTagName("img");

// .innerHTML and .outerHTML are two properties in JavaScript
// that allow you to access and manipulate the HTML content of an element in different ways.
// let demo1 = document.getElementById("box").innerHTML;
// let demo2 = document.getElementById("box").outerHTML;

// console.log(demo1);
// console.log(demo2);

// this Keyword in JavaScript refers to the current object that the code is being written inside.
// It can refer to different objects depending on the context in which it is used.
// In a global context, this refers to the window object, while in a function context,
//  it refers to the object that called the function. In an object method, this refers to the object itself.

// var address = {
//   company: "Google",
//   city: "Gurmitkal",
//   state: "Karnataka",
//   fullAddress: function () {
//     return this.company + " " + this.city + " " + this.state;
//   },
// };

// var fetch = address.fullAddress();
// console.log(fetch);

// const x = 10;
// const y = 5;
// const z = x + y;

// console.log(x, y, z);
// console.log(z);
// debugger;

// x = 55;
// document.writeln(x);
// var x;

// document.writeln(sum(5, 10));
// function sum(a,b){
//   return a + b;
// }

// console.log(sum(10, 20));
// function sum(a, a) {
//   "use strict";
//   return a + a;
// }

// x = 10;
// console.log(x);
// var x;
// with Strict mode you can't use undeclared variables.
//  In the above code, we are trying to assign a value to a variable x without declaring it first.
//  This will throw an error in strict mode.

// function clickEvent() {
//   prompt("this is a Prompt Box", "You can write something here");
// }

// function clickEvent() {
//   document.getElementById("01").removeAttribute("ftl");
// }

// document.write(document.getElementsByClassName("ftl")[0].innerHTML);
console.log(typeof []);
