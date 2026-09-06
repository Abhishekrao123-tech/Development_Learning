let a, b, rest;
// [a,b] = [10,20];
// console.log(a,b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a, b, rest);
console.log(rest);

const obj = { a: 1, b: { c: 2, d: 3 } };
let {
  b: { c, d },
} = obj;
console.log(a, c, d);
console.log(obj);

let promise = new Promise(function(resolve, reject){
    
}); 