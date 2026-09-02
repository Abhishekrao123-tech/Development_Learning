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

var website = {
  name: "w3schools",
  getName: function () {
    return this.name;
  },
};

var unBoundGetName = website.getName;
var boundGetName = unBoundGetName.bind(website);
document.writeln(boundGetName());
