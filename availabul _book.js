// const person = {name: "Jay", age: 23, city: "guntur"};
  
//   const key = Object.keys(person);
//   console.log(key);  
  





// const library =[
//         {Title:"To Kill a Mockingbird",Author:"Harper lee",Year:1960},
//         {Title:"1984",Author:"George Orwell",Year:1949},
//         {Title:"The Great Gatsby",Author:"F.scott fitzgerald",Year:1925},
//         {Title:"Moby Dick",Author:" Herman Melville",Year:1851}
//     ];
    
//     console.log("<Book Titles>");
    
//     for(let i= 0; i<library.length;i++){
//     console.log(library[i].Title);
//     }
    
//     console.log("<below are the in details about the books:>");
    
//     for( let i = 0; i < library.length ; i++){
//         console.log(library[i]);
//     }



const library = [
    {Title:"To Kill a Mockingbird",Author:"Harper lee",Year:1960},
    {Title:"1984",Author:"George Orwell",Year:1949},
    {Title:"The Great Gatsby",Author:"F.scott fitzgerald",Year:1925},
    {Title:"Moby Dick",Author:" Herman Melville",Year:1851}
  ];
  

  function getAvailableBooks() {
    let titles = [];
    for (let i = 0; i < library.length; i++) {
      titles.push(library[i].Title);
    }
    return titles;
  }


function Findbook(Title){
  for(let i = 0; i < library.length; i++){
    if(library[i].Title == Title){
        return library[i];
    }
  }
  return "no book found"
}

console.log("Below are the Titles of the books:");
console.log(getAvailableBooks());
console.log(Findbook("Moby Dick"));
console.log(Findbook("the end"));