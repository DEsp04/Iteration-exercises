//Exercise #1
//Using map, write a function that takes an array of numbers
//and makes them strings
function numToString(num) {
  let numString = num.map((element) => element.toString());
  return numString;
}

//Exercise #2
//You must use forEach for this exercise
//Write a function that accepts an array and returns a new array
//with all the values in the array passed to the function doubled
function doubled(arr) {
  let newArray = [];

  arr.forEach((element) => newArray.push(element * 2));

  return newArray;
}

//Exercise #3
//Write a function called firstAndLast which accepts
//an array of strings and returns a new array with
//only the first and last character of each string
//Example: ['winning', 'tomato'] => ['wg', 'to']
//hint: forEach show be used here

function firstAndLast(arr) {
  let newArray = [];
  arr.forEach((element) => {
    newArray.push(element.charAt(0) + element.charAt(element.length - 1));
  });
  return newArray;
}
//Bonus:
//Write a for loop that outputs this:
// 1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i <= 4; i++) {
  for (let g = 0; g < 3; g++) {
    console.log(i);
  }
}
