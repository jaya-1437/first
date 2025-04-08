// reversing a string by using a function
function reverseStr(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseStr("welcome to javascript")); 



//   without using function
//   let str = "Hello, World!";
//   let reversedStr = str.split('').reverse().join('');
  
//   console.log(reversedStr); 
  

// reversing a string by using built in function

  function reverse(str) {
    return str.split('').reverse().join('');
  }
  
 
  const inputString = "how are you?";
  const reversedString = reverse(inputString);
  
  console.log(reversedString);



  // Without using built-in functions

// function reverseStringWithoutBuiltIn(str) {
//     let reversedStr = '';
    
    
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversedStr += str[i];
//     }
  
//     return reversedStr;
//   }
  
//   const inputStr = "welcome to javascript";
//   const reversedStr = reverseStringWithoutBuiltIn(inputStr);
//   console.log(reversedStr);
  