function processArray(arr, K) {
    
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        filteredArr.push(arr[i]);
      } else if (arr[i] > K) {
        filteredArr.push(arr[i]);
      }
    }

    let transformedArr = [];
    for (let i = 0; i < filteredArr.length; i++) {
      transformedArr.push(filteredArr[i] * i);
    }
  
    
    let sum = 0;
    for (let i = 0; i < transformedArr.length; i++) {
      sum += transformedArr[i];
    }
  
   
    let reversedResult = [];
    for (let i = transformedArr.length - 1; i >= 0; i--) {
      reversedResult.push(transformedArr[i]);
    }
  
    
    return {
      reversedResult,
      sum
    };
  }
  
  const arr = [1,3,5,7,9,13,17,19,21,23];
  const K = 10;
  const result = processArray(arr, K);
  
  console.log("Reversed Result: ", result.reversedResult); 
  console.log("Sum of Transformed Array: ", result.sum); 


  