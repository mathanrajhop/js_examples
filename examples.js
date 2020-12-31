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

//------------------------------------------------------------------------------------

// 2. Given a number and an array of numbers, find the index of element specified.
//  Input: 2, [1, 2, 3]
//  Output: index: 1

console.log("2. Given a number and an array of numbers, find the index of element specified.");
const array_num = [1, 2, 3];
console.log("input: 2,", array_num);
const index = array_num.findIndex((element, index) => {
  if (element === 2) {
    return true
  }
})
console.log("Output: index: ", index);

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

//------------------------------------------------------------------------------------

// 6. Given an array of numbers, multiply each number by the next number. The last number takes the first number as its next number.
// Input [1, 2, 3]
// output: [2, 6, 3]

var originalArr = [1, 2, 3];
console.log("6. Given an array of numbers, multiply each number by the next number. The last number takes the first number as its next number.");
console.log("input", originalArr);
var newArr = [];
for(var i = 0; i < originalArr.length; i++) {
    if(originalArr.length > i+1)
    {
      newArr.push(originalArr[i] * originalArr[i+1]);
    }
    else
    {
      newArr.push(originalArr[i] * originalArr[0]);
    }
}
console.log("output", newArr);

//------------------------------------------------------------------------------------

// 7. Write a function that takes in two numbers and return its sum. Modify this function to remember the input and output. So the next time, i send in the same inputs, the result should be returned from the memory instead of calculation.
//   eg: First time i call `add(1,2)` calculates `1 + 2` and returns 3.
//       On calling again with same inputs `add(1,2)`, it should return 3 from memory instead of calculation.

console.log("7. Write a function that takes in two numbers and return its sum. Modify this function to remember the input and output. So the next time, i send in the same inputs, the result should be returned from the memory instead of calculation.");
let QArray = [];
function add(a, b)
{
  return a+b;
}

let inputss = [
    {
      ins1 : 1,
      ins2 : 2,
    },
    {
      ins1 : 2,
      ins2 : 3,
    },
    {
      ins1 : 1,
      ins2 : 2,
    },
    {
      ins1 : 3,
      ins2 : 3,
    },
    {
      ins1 : 3,
      ins2 : 3,
    },
    {
      ins1 : 1,
      ins2 : 2,
    },
    {
      ins1 : 1,
      ins2 : 2,
    },
  ];

Array.prototype.getIndexOf = function(el) {
  var arr = this;
  for (var i=0; i<arr.length; i++){
     //console.log(arr[i].input);
     if(arr[i].input==el){
       return i;
     }
  }
  return -1;
}

inputss.map((vals, key) => {
  //console.log(vals.ins);
  let check = QArray.getIndexOf(vals.ins1+', '+vals.ins2);
  if(check <= -1)
  {
    let adds = add(vals.ins1, vals.ins2);
    QArray.push({
      "input": vals.ins1+', '+vals.ins2,
      "output": adds
    });
    console.log('output', adds);
  }
  else
  {
    console.log('output', QArray[check].output);
  }
});

//console.log(QArray);

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

function sayHi() {
  console.log('Hello');
}

setTimeout(sayHi, 1000);
