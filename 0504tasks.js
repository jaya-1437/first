// largest number in an array
// function findLargestNumber(arr) {
//     return Math.max(...arr);
//   }
  
//   console.log(findLargestNumber([1, 2, 3, 4, 5])); 



// to check a number is prime or not
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
  
//   console.log(isPrime(7)); 
//   console.log(isPrime(11)); 




// fibanico sequence
// function fibonacci(n) {
//     let a = 0, b = 1;
//     for (let i = 0; i < n; i++) {
//       let temp = a;
//       a = b;
//       b = temp + b;
//     }
//     return a;
//   }
  
//   console.log(fibonacci(6));  




// Sort an Array of Strings by Length
// function sortByLength(arr) {
//     return arr.sort((a, b) => a.length - b.length);
//   }
  
//   console.log(sortByLength(["apple", "pie", "banana", "kiwi"])); 
  



// Finding the Common Elements Between Two Arrays 
// function findCommonElements(arr1, arr2) {
//     return arr1.filter(item => arr2.includes(item));
//   }
  
//   console.log(findCommonElements([1, 2, 3], [2, 3, 4])); 
  


  
// Sum of All Even Numbers in an Array 
// function sumEvenNumbers(arr) {
//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {  
//         sum += arr[i]; 
//       }
//     }
  
//     return sum;
//   }
  
//   console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
  