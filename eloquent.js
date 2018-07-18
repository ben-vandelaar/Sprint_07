/*Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.*/

// Your code here.
let min = function (num1,num2){
	return Math.min(num1,num2);
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/*Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.*/

// Your code here.
function isEven(num) {
    if (num == 0) {
      return true;
    } else if (num == 1) {
      return false;
    } else {
      return isEven(Math.abs(num-2));
  }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//Counting Beans

function countChar(str, char) {
	var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char){
    count ++
    }
  }
return (count);	
 }
