
// const arr = [4, 9, 12, 3, 8, 15, 7];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 8) {
//     console.log(arr[i]);
//   }
// }

// 
// function sumarray(array){
//     let Sum = 0;
//     for(i=0;i<array.length;i++){
//      Sum += array[i];

//     }
//     return Sum;
// }
// console.log(sumarray(array));


//  a simple calculator that perform arithmetic operations like addition, subtraction, multiplication, and division.
// function add(x,y){
//   return x+y;
// }
// function sub(x,y){
//   return x-y;
// }
// function mul(x,y){
//   return x*y;
// }
// console.log(add(2,3));
// console.log(sub(6,2));
// console.log(mul(3,2));


// checking Palindrome
function Palindrome(str) {
  // Remove spaces and convert to lowercase
  str = str.replace(/\s+/g, '').toLowerCase();

  // Check if the string is equal to its reverse
  return str === str.split('').reverse().join('');
}

console.log(Palindrome("madam")); 
console.log(Palindrome("hello"));
console.log(Palindrome("wow"));

