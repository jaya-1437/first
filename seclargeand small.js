const arr = [10, 20, 4, 45, 99, 20, 2,1];

function find(arr) {
    if (arr.length < 2) {
      return "Array should have at least two elements.";
    }
  
    //in ascending order
    let sortedArr = arr.sort((a, b) => a - b);
    
   
    let secondSmallest = sortedArr[1];
    
    
    let secondLargest = sortedArr[sortedArr.length - 2];
  
    return {
      secondSmallest: secondSmallest,
      secondLargest: secondLargest
    };
  }
  

  const result = find(arr);
  console.log(result); 

  
// without sort
//   function findSecondLargestAndSmallest(arr) {
//     if (arr.length < 2) {
//         return [null, null]; // Not enough elements to find second smallest/largest
//     }
    
//     let smallest = Infinity;
//     let largest = -Infinity;

//     // First pass: Find smallest and largest
//     for (let num of arr) {
//         if (num < smallest) {
//             smallest = num;
//         }
//         if (num > largest) {
//             largest = num;
//         }
//     }

//     let secondSmallest = Infinity;
//     let secondLargest = -Infinity;

    
//     for (let num of arr) {
//         if (num !== smallest && num < secondSmallest) {
//             secondSmallest = num;
//         }
//         if (num !== largest && num > secondLargest) {
//             secondLargest = num;
//         }
//     }

//     return [secondSmallest, secondLargest];
// }


// const arr = [12, 35, 1, 10, 34, 1];
// const [secondSmallest, secondLargest] = findSecondLargestAndSmallest(arr);

// console.log("Second smallest:", secondSmallest);
// console.log("Second largest:", secondLargest);
