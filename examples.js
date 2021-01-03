// 1. Given an array of numbers, find the sum of the array.
//  Input: [1, 2, 3]
//  Output: 6

console.log("1. Given an array of numbers, find the sum of the array.");
console.log("input", [1, 2, 3]);

Array.prototype.sum = function() {
  return this.reduce((acc, curVal) => {
    return acc + curVal;
  }, 0);
}

console.log("output", [1, 2, 3].sum());

//------------------------------------------------------------------------------------

// 2. Given a number and an array of numbers, find the index of element specified.
//  Input: 2, [1, 2, 3]
//  Output: index: 1

console.log("2. Given a number and an array of numbers, find the index of element specified.");
console.log("input: 2,", [1, 2, 3]);

Array.prototype.getIndexOf = function(el) {
  for (var i = 0; i < this.length; i ++){
    if(this[i]==el){
      return i;
    }
  }
  return -1;
}

console.log("Output: index:", [1, 2, 3].getIndexOf(2));

// ------------------------------------------------------------------------------------

// 3. Given an array of numbers, find the elements which are even numbers.
//   Input [1, 2, 3, 4]
//   output: [2, 4]
console.log("3. Given an array of numbers, find the elements which are even numbers.");
console.log("input",[1, 2, 3, 4]);

Array.prototype.getOddEven = function(even) {
  let arrnum = [];
  this.filter(function(el) {
    if(el % 2 === even)
    {
      arrnum.push(el);
    }
  });
  return arrnum;
}
console.log("Output : ", [1, 2, 3, 4].getOddEven(0));
console.log("Output : ", [1, 2, 3, 4].getOddEven(1));

// ------------------------------------------------------------------------------------

// 4. Given an array of numbers, find the elements which are odd numbers.
//   Input [1, 2, 3, 4, 5]
//   output: [1 3, 5]

// console.log("4. Given an array of numbers, find the elements which are odd numbers.");
// console.log("input",[1, 2, 3, 4]);
// let oddOutput = [];
//
// Array.prototype.getOdd = function(odd) {
//   this.filter(function(el) {
//     if(el % 2 === odd)
//     {
//       oddOutput.push(el);
//     }
//   });
//   return oddOutput;
// }
//
// console.log("Output : ", [1, 2, 3, 4].getOdd(1));

// ------------------------------------------------------------------------------------

// 5. Given an array of numbers, multiply each number by itself.
//   Input [1, 2, 3]
//   output: [1, 4, 9]

console.log("5. Given an array of numbers, multiply each number by itself.");
Array.prototype.multiply = function() {
  let multiply = [];
   this.reduce((acc, curVal) => {
    multiply.push(curVal * curVal);
  }, 1);
   return multiply;
}

console.log("output", [1, 2, 3, 4].multiply());

//------------------------------------------------------------------------------------

// 6. Given an array of numbers, multiply each number by the next number. The last number takes the first number as its next number.
// Input [1, 2, 3]
// output: [2, 6, 3]

console.log("6. Given an array of numbers, multiply each number by the next number. The last number takes the first number as its next number.");
console.log("input",[1, 2, 3, 4, 5]);

Array.prototype.nextMultiply = function() {
  let multiply = [];
  this.map((values, keys) => {
    if(this[keys+1] === undefined)
      {
        multiply.push(values * this[0]);
      }
      else
      {
        multiply.push(values * this[keys+1]);
      }
  });
  return multiply;
}

console.log("output", [1, 2, 3, 4, 5].nextMultiply());

//------------------------------------------------------------------------------------

// 7. Write a function that takes in two numbers and return its sum. Modify this function to remember the input and output. So the next time, i send in the same inputs, the result should be returned from the memory instead of calculation.
//   eg: First time i call `add(1,2)` calculates `1 + 2` and returns 3.
//       On calling again with same inputs `add(1,2)`, it should return 3 from memory instead of calculation.

console.log("7. Write a function that takes in two numbers and return its sum. Modify this function to remember the input and output. So the next time, i send in the same inputs, the result should be returned from the memory instead of calculation.");
let QArray = {};
function add(a, b)
{
  return a+b;
}

let inputs = [
    { ins1 : 1, ins2 : 2, },
    { ins1 : 2, ins2 : 3, },
    { ins1 : 1, ins2 : 2, },
    { ins1 : 3, ins2 : 3, },
    { ins1 : 3, ins2 : 3, },
    { ins1 : 1, ins2 : 2, },
    { ins1 : 1, ins2 : 2, },
  ];

inputs.map((vals, key) => {
  //console.log(vals.ins);

  if(QArray[vals.ins1+''+vals.ins2] !== undefined)
  {
     console.log('output', QArray[vals.ins1+''+vals.ins2]);
  }
  else
  {
    let adds = add(vals.ins1, vals.ins2);
    QArray[vals.ins1+''+vals.ins2] = adds;
    console.log('output', QArray[vals.ins1+''+vals.ins2]);
  }
});


//--------------------------------------------------------------------------------

// 7. Write a function that takes in two numbers and return its sum. Now call this `add` function many times. But the function should only execute once every 1 minute. The rest of the calls should be ignored.


// var idVar = setInterval(() => {
//   timer()
// }, 20000);
//
// function timer() {
//   var dateVar = new Date();
//   var time = dateVar.toLocaleTimeString();
//   console.log(time);
// };

// function sayHi() {
//   console.log('Hello');
// }
//
// setTimeout(sayHi, 1000);
