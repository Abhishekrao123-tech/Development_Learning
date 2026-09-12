let a, b, rest;
// [a,b] = [10,20];
// console.log(a,b);
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a, b, rest);
// console.log(rest);

// const obj = { a: 1, b: { c: 2, d: 3 } };
// let {
//   b: { c, d },
// } = obj;
// console.log(a, c, d);
// console.log(obj);

// let promise = new Promise(function (resolve, reject) {
//   // setTimeout(() => resolve("done"), 100);
//   setTimeout(() => reject("oops"), 100);
// });

// function myFunction(name) {
//   document.getElementById("first").innerHTML = name
// }

// let mypromise = new Promise(function (resolve, reject) {
//   x = 1;
//   if (x == 0) {
//     resolve("zero Bruh!");
//   } else {
//     reject("one Bruh!");
//   }
// });

// mypromise.then(
//   function (value) {
//     myFunction(value);
//   },
//   function (error) {
//     myFunction(error);
//   },
// );

// mypromise.catch(
//   function (value) {
//     myFunction(value);
//   },
//   function (error) {
//     myFunction(error);
//   },
// );

// Async Functions return a Promise. So you can use them with .then() and .catch() methods.
// The async function will always return a promise, and if the function returns a value,
// the promise will be resolved with that value. If the async function throws an error, the promise will be rejected with that error.
// await it is important to note that the await keyword can only be used inside an async function.and it waits for the Promise to/ resolve or reject before moving on to the next line of code

// function resolveAfter2sec(){
//   return new Promise((resolve) =>{
//     setTimeout(() =>{
//       resolve('resolved');
//     }, 2000);
//   });
// };

// async function asyncCall(){
//   console.log('I am CAlling');
//   const result = await resolveAfter2sec();
//   console.log(result);
// };
// asyncCall();

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function mainFunction(callback) {
//   console.log("I am performing");
//   number.forEach(callback);
// }
// function callbackFunction(number) {
//   console.log("result" + number);
// }
// mainFunction(callbackFunction)

// setTimeout(myFunction, 3000);
// function myFunction() {
//   document.write("Hello India");
// }

// myFunction();

//object
var john = {
  first_name: "john",
  last_name: "Michelle",
  online: true,
};

// let timerid = setTimeout(func|CommandEvent,[delay] , [arg1],[arg2],
//   ...
// )

// function sayhi(phrase, who) { // whatever
//   alert(phrase + " " + who);
// }
// setTimeout(sayhi, 2000, "hello", "welcome");

// let timerid = setInterval(() =>
// alert('hello'),2000);

// setTimeout(() => {
//   clearInterval(timerid); alert('stop');
// }, 5000);

function startCountdown(seconds) {
  let counter = seconds;

  let timerId = setInterval(() => {
    console.log(`Time left: ${counter}`);
    counter--;

    // Stop condition
    if (counter < 0) {
      clearInterval(timerId); // Stops the interval
      console.log("Countdown finished!");
    }
  }, 1000);
}

// Start a 5-second countdown
startCountdown(5);
