// second largest number in an array
// function secondLargest(arr) {
//     let largest = Math.max(...arr);
//     arr = arr.filter(num => num !== largest);
//     return Math.max(...arr);
// }

// console.log(secondLargest([1, 3, 7, 2, 9])); 




// to print the range from one index to other by using slice
// let x = "welcome to javascript";
// console.log(x.slice(0,10));




// finding the number range by using switch case
// let num = 22;
// switch(true){
//     case (num>0 && num<=10):
//         console.log('this number lies between 1 and 10');
//         break;
//     case (num>10 && num<=20):
//         console.log('this number lies between 11 and 20');
//         break;
//     default:
//     console.log('this number is out of range');        
// }



// Adding a new property to object
// const person = {name:'jay',gender:'male',language:'telugu'};
// person.nation = 'indian' ;
// console.log('his nation is '+ person.nation);




// checking Palindrome
// function Palindrome(str) {

//     str = str.replace(/\s+/g, '').toLowerCase();
//     return str === str.split('').reverse().join('');
//   }
//   console.log(Palindrome("madam")); 
//   console.log(Palindrome("hello"));
//   console.log(Palindrome("wow"));




// check if a number exist in an array
// function containsNumber(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(containsNumber([1, 2, 3, 4], 1)); 
// console.log(containsNumber([1, 2, 3, 4], 7)); 