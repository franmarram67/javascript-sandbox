import { hello, Jimmy } from "./test.js";

// Example: var-declared variables are not block-scoped
console.log(`Example: var-declared variables are not block-scoped`);
var x = 1;
{
    var x = 2;
}
console.log(x);

hello();

let jim = new Jimmy(123456789, "I'm completely retarded, thanks :)");

console.log(jim.stupidMessage());

const pepito = new Set();
pepito.add("pe pi to");
pepito.add("pe pi to");
pepito.add("pe pi to 2");

console.log(pepito);

const bigDay = new Date(2019, 6, 19);
console.log(bigDay.toLocaleDateString());
if (bigDay.getTime() < Date.now()) {
  console.log("Once upon a time...");
}