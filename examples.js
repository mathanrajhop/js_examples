// 1. Given an array of numbers, find the sum of the array.
//  Input: [1, 2, 3]
//  Output: 6

const array = [1, 2, 3];
console.log("1. Given an array of numbers, find the sum of the array.");
console.log("input", array);
let result = 0;
for (i=0; i<array.length; i++) {
  result += array[i];
}
console.log("output", result);
//test
//test1
//test2

//------------------------------------------------------------------------------------

// 2. Given a number and an array of numbers, find the index of element specified.
//  Input: 2, [1, 2, 3]
//  Output: index: 1



// ------------------------------------------------------------------------------------

// 3. Given an array of numbers, find the elements which are even numbers.
//   Input [1, 2, 3, 4]
//   output: [2, 4]

let evenInput = [];
let evenOutput = [];
evenInput.push(1, 2, 3, 4);
console.log("3. Given an array of numbers, find the elements which are even numbers.");
console.log("input",evenInput);
for (i=0; i<evenInput.length; i++)
{
  if(evenInput[i] % 2 === 0)
  {
    evenOutput.push(evenInput[i]);
  }
}
console.log("output",evenOutput);

// ------------------------------------------------------------------------------------

// 4. Given an array of numbers, find the elements which are odd numbers.
//   Input [1, 2, 3, 4, 5]
//   output: [1 3, 5]

let oddInput = [];
let oddOutput = [];
oddInput.push(1, 2, 3, 4, 5);
console.log("4. Given an array of numbers, find the elements which are odd numbers.");
console.log("input",oddInput);
for (i=0; i<oddInput.length; i++)
{
  if(oddInput[i] % 2 === 1)
  {
    oddOutput.push(oddInput[i]);
  }
}
console.log("output",oddOutput);

// ------------------------------------------------------------------------------------

// 5. Given an array of numbers, multiply each number by itself.
//   Input [1, 2, 3]
//   output: [1, 4, 9]

const num = [1, 2, 3];
console.log("5. Given an array of numbers, multiply each number by itself.");
console.log("input", num);
let output = [];
for (i=0; i<num.length; i++) {
  output.push(num[i]*num[i]);
}
console.log("output", output);
