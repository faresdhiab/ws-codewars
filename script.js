// Question 1:Write a JavaScript program to check whether the given argument is a string.
const isString = (arg) => typeof arg === 'string';

//Question 2:Write a JavaScript program to reverse the order of the characters in the string.
const reverseString = (str) => str.split('').reverse().join('');

//Question 3:Write a JavaScript program to get the last element from a given array.
const getLastElement = (arr) => arr[arr.length - 1]

//Question 4:Write a JavaScript program to check if a given string is upper case or not.
const isUpperCase = (str) => str === str.toUppercase();

//Question 5: Write a JavaScript program that will return true if the specified value is undefined, false otherwise.
const isUndefined = (value) => value === undefined;
    //Question 6:Write a JavaScript program that will return true if the given number is even, false otherwise.
const isEven = (number) => number % 2 === 0;