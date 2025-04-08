// finding even and odd numbers in ana array
let even=0;
let odd=0;
function find(array){
for(i=0;i<array.length;i++){
  if(array[i]%2==0){
    even++;
  }else{
    odd++;
  }
}
return{
  even,
 odd,
};
}
console.log(find([1,2,3,4,5,6,7,8,9,10,30]));
