console.log("Good morning")

/* Exercise #1:
      Fix the formatText function below such that it fits the given specification:
       * returns given parameter (str) with leading and trailing spaces removed, and all letters converted to lowercase.
*/

console.log(formatText("      Lorem IPSUM.    ")); // expected output (without quotes): "lorem ipsum."

//Answer
function formatText(str) {
 return str.trim().toLowerCase();
}

//Notes: remember empty ()!

/* Exercise #2:
      Change the function in exercise #1 to be an arrow function.
      If you're getting errors: google javascript hoisting. You may need to move the console.log(formatText("      Lorem IPSUM.    ")) from line 7.
*/

//Answer
const formatTextArrow =(str) => str.trim().toLowerCase();
console.log(formatTextArrow("      Lorem IPSUM.    "));

//notes: originally I didn't think about making a new function with the name formatTextArrow, so that's why I kept getting undefined and redefined errors I guess.


/* Exercise #3: Create a function that takes the following parameters:
                 1. An array
                 2. A callback function

                 In your function write code that will loop through a given array,
                 and with each iteration, it will call your provided callback function.

                 Example behavior, lets say you named your function forEach, if we call it with:
                 for-loop(threeFruits, console.log) // would display:
                  apple
                  banana
                  mango
                 or if we call it with:
                 for-loop(fiveWords, console.log) // would display:
                  one
                  two
                  three
                  four
                  five

                (For this exercise please use traditional loops (not array methods), for-loop, while loop, or for-of loop)
*/


//Answer
function checkArray(callback, arr) {
  for (let i = 0; i < arr.length; i++){
  callback(arr[i])
  }
}

const fiveWords = ["one", "two", "three", "four", "five"];
const threeFruits = ["apple", "banana", "mango"];

checkArray(console.log, fiveWords);
checkArray(console.log, threeFruits);

//Notes: Remember pink text = parameters. If no parameters then (). Callback is both a parameter and a command? in this case. i = iterator object that loops through stuff (think Rainworld Iterators and their Cycles/Loops!) (NEVER i > arr.length unless i--! 


/* Exercise #4: Similar to task 3, but instead of first declaring a function and then writing a loop by hand:
                 Use an array method that loops through an array and provides a callback function that will either console log or display each array element
                 Resources: https://javascript.info/array-methods
                            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

                 Bonus task: see if you can get the array-method to also display the index of each element in addition to just the element, for example:
                             apple at index 0
                             banana at index 1
                             and so on...
*/

//Answer
function loopThrough(arr) {
  for (let i = 0; i < arr.length; i++){
    console.log(`${arr[i]} at index ${i}`);
  }
}

loopThrough(fiveWords);
loopThrough(threeFruits);

//Notes: `` backticks for strings, else ${} won't work. 
//Question: why [i] for the first part but only {i} for the second? Aren't all indexes in []?


/* Exercise #5: In Exercise #4 your task was to iterate through an array and just display the results, in this task try to use an array method that will
                 Both iterate through an array and also return a new array with each number changed in value, for example:
                 the following (replace someArrayMethod with an actual array method, and yourCallBackFunctionLogic with some code)
                 here it should multiply each element by 3 and then tripleNums should contain all the numbers multiplied by 3:

                 let tripleNums = nums.someArrayMethod(...yourCallBackFunctionLogic...)
                 console.log(tripleNums) // [3,6,9,12,15]
*/

const nums = [1, 2, 3, 4, 5];
const nums2 = [4321, 43, 2, 897698, 321, 87];

//Answer
function tripleArrayValues(arr) {
 let triple = []
 for(let i = 0; i < arr.length; i++){
  triple.push(arr[i]*3);
 };
 console.log(triple)
}

tripleArrayValues(nums2);

//Notes: .push because you are pushing the value in an additional two times in order to multiply by 3.

/* Excercise #6: Use a different array method that will return a new array based on some filter,
                 For example lets say we just want odd numbers from the nums array:
                              let oddNumbers = nums.someArrayMethod(...yourCallBackFunctionLogic...)
                              console.log(oddNumbers) // should display: [1,3,5]


                  Resources: https://javascript.info/array-methods
                             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

//Answer
function logEvenOfArray(arr) {
  const odds = arr.filter((num) => num % 2 === 1);
  console.log(odds);
}

//Notes: filters OUT the Even numbers and leaves the Odd. % = the remainder of a division that can't be divided by two. Odd number is: Dividend/divisior = quotient + remainder.

logEvenOfArray(nums);
logEvenOfArray(nums2);