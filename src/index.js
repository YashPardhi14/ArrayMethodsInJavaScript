import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//forEach

// var newNumber = [];

// numbers.forEach(function (x) {
//   newNumber.push(2 * x);
// });
// console.log(newNumber);

//Map function

// const newNumber = numbers.map((x)=>{
//   return x*2;
// })

// console.log(newNumber)

// console.log(numbers.map((x)=>{
//   return x*2;
// }))

//Filter - Create a new array by keeping the items that return true.

//forEach

// var newNumber= [];

// numbers.forEach(function (num){
// if(num<10) newNumber.push(num);
// })

// console.log(newNumber);

//Filter function

// const newNumber=numbers.filter((num)=>{
//   return num<10;
// })

// console.log(newNumber);

//Reduce - Accumulate a value by doing something to each item in an array.

//forEach

// var totalSum=0;

// numbers.forEach((currentNumber)=>{
// totalSum+=currentNumber;
// })

// console.log(totalSum);

//reduce function

// const totalSum=numbers.reduce((Accumulator,currentNumber)=>{
//   console.log("Accumulator--->",Accumulator);
//   console.log("currentNumber--->",currentNumber);
//   return Accumulator +currentNumber;
// })

// console.log(totalSum);

//Find - find the first item that matches from an array.

// const num=numbers.find((x)=>{
//   return x>10;
// })
// console.log(num);

//FindIndex - find the index of the first item that matches.
// const num=numbers.findIndex((x)=>{
//   return x>10;
// })
// console.log(num);

const meaning = emojipedia.map((str) => {
  return str.meaning.substring(0, 100);
});

console.log(meaning);
