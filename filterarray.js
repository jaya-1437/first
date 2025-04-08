function processArray(arr, K) {
    // Filter the array
    let filteredArr;
    if (arr.some(num => num % 2 === 0)) {
        filteredArr = arr.filter(num => num % 2 === 0); 
    } else {
        filteredArr = arr.filter(num => num > K); 
    }

    
    const transformedArr = filteredArr.map((num, idx) => num * idx);

    
    const totalSum = transformedArr.reduce((sum, num) => sum + num, 0);

    const reversedResult = transformedArr.reverse();

    return { reversedResult, totalSum };
}


const arr = [1, 2, 3, 4, 5, 6];
const K = 3;

const { reversedResult, totalSum } = processArray(arr, K);

console.log("Reversed transformed array:", reversedResult);
console.log("Sum of transformed array:", totalSum);
