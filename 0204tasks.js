// looping through the object
// let car = {company:"tata",model:"intra",year:2009};
// for(let key in car){
//     console.log(car[key]);
// }


// nested object
// const student = {
//     name: 'jaya',
//     age: 23,
//     address: {
//       street: '123 Main St',
//       city: 'guntur',
//       zipcode: '10001'
//     }
//   };
  
//   console.log(student.address.city);  



// object constructor function
// function Person(name, age, city) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
// }
  
//   const person1 = new Person('jay', 22, 'guntur');
//   const person2 = new Person('krish', 23, 'tenali');
  
//   console.log(person1);
//   console.log(person2);
  
  

// used Object.freeze to freez the object
// const car = {
//     make: 'Toyota',
//     model: 'Corolla',
//     year: 2021,
//     color: 'blue'
//   };
//   Object.freeze(car);
// car.color = 'yellow';  
// console.log(car.color); 

  
// assigning an object to another one
// const person = { name: 'jay', age: 23 };
// const address = { city: 'guntur', zipcode: '522309' };

// const mergedObject = Object.assign(person, address);
// console.log(mergedObject);




// adding an element to a array
// let fruits = ["Apple", "Banana"];
// fruits.push("Cherry");
// console.log(fruits); 



// removing an element from an array
// let fruits = ["Apple", "Banana", "Cherry"];
// fruits.pop();
// console.log(fruits);



// finding an index of an element in an array
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits.indexOf("Banana"));  
// console.log(fruits.indexOf("Apple"));  




// ITERATING OVER AN ARRAY
// let fruits = ["Apple", "Banana", "Cherry"];
// for(i=0;i<fruits.length;i++){
// console.log(fruits[i]);
// }




// filtering elements in an array
// let numbers = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]%2==0) {
//         console.log(numbers[i]);
//     } else {
//         console.log('not even numbers')
//     }
// }



// sorting an array
// let fruits = ["Banana", "Apple", "Cherry"];
// fruits.sort();
// console.log(fruits); 

// let numbers=[4,5,2,3,1,10];
// numbers.sort((a,b)=>a-b);
// console.log(numbers);



// check if an element exist in an array
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits.includes("Banana")); 
// console.log(fruits.includes("Mango"));   

