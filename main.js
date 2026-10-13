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

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(0).then(() => console.log(4));
// Promise.resolve()
//   .then(() => console.log(2))
//   .then(() => console.log(3));
// console.log(1); // 1, 2, 3, 4


// const promise = new Promise((resolve, reject) => {
//   console.log("Promise callback");
//   resolve();
// }).then((result) => {
//   console.log("Promise callback (.then)");
// });

// setTimeout(() => {
//   console.log("event-loop cycle: Promise (fulfilled)", promise);
// }, 0);

// console.log("Promise (pending)", promise);

const numberFormatter = new Intl.NumberFormat("ja-JP");
console.log(numberFormatter.format(1005.5));

const heightRange = {
  min: 1.63,
  max: 1.95,
};

const nf = new Intl.NumberFormat("en-US", { style: "unit", unit: "meter" });
console.log(nf.formatRange(heightRange.min, heightRange.max));
// 1.63–1.95 m

const rtf = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });
console.log(rtf.format(1, "day")); // tomorrow
console.log(rtf.format(-1, "day")); // yesterday  
console.log(rtf.format(2, "day")); // in 2 days
console.log(rtf.format(5, "minute")); // in 5 minutes
console.log(rtf.format(-1, "hour")); // 1 hour ago

let button = document.getElementById('XD');
button.addEventListener("click", function() {
  console.log("LOLAZOO");
})