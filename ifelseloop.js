let age = 17;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}


// if else if else chain
let temperature = 25;

if (temperature > 30) {
  console.log("It's really hot outside!");
} else if (temperature > 20) {
  console.log("The weather is warm.");
} else {
  console.log("It's quite cold outside.");
}

// nested if else
let score = 95;

if (score >= 50) {
  if (score >= 90) {
    console.log("Excellent!");
  } else {
    console.log("Good job!");
  }
} else {
  console.log("You need to improve.");
}


// logical operators in if else
let x = -50;
let y = 10;

if (x > 0 && y > 0) {
  console.log("Both x and y are positive.");
} else {
  console.log("At least one of them is not positive.");
}

