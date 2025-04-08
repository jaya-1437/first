// to add all elements in a array
function add(array){
  let sum=0;
  for(i=0;i<array.length;i++){
    sum +=array[i];
  }
  return sum;
}
console.log(add([1,2,3,4,5,10]));