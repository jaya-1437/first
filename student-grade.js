// 1. Define functions

// Function to calculate grade based on score using ternary operator
function calculateGrade(score) {
    return score >= 90 ? 'A' :
           score >= 80 ? 'B' :
           score >= 70 ? 'C' :
           score >= 60 ? 'D' : 'F';
}

// Function to attempt swapping grades between two students
function swapGrades(student1, student2) {
    // Attempting to swap grades by using pass by value (will not work as expected)
     let temp = student1.grade;
     student1.grade = student2.grade;
    student2.grade = temp;
 }

// Function to update a student's grade by passing the student object (pass by reference)
function updateGrade(student) {
    // We can modify the grade directly since it's passed by reference
    if (student.score >= 90) {
        student.grade = 'A';
    } else if (student.score >= 80) {
        student.grade = 'B';
    } else if (student.score >= 70) {
        student.grade = 'C';
    } else if (student.score >= 60) {
        student.grade = 'D';
    } else {
        student.grade = 'F';
    }
}

// 2. Create student objects
let student1 = { name: 'Jay', score: 95, grade: '' };
let student2 = { name: 'krish', score: 82, grade: '' };

// 3. Initialize two students with different scores
student1.grade = calculateGrade(student1.score);
student2.grade = calculateGrade(student2.score);

// 4. Call calculateGrade to determine each student's grade
console.log(student1.name+' has a grade of: '+student1.grade);
console.log(student2.name+' has a grade of: '+ student2.grade);

// 5. Call swapGrades to attempt swapping grades
swapGrades(student1, student2);

// 6. Call updateGrade to update a student's grade (changing Jane's score)
student2.score = 75; // Update Jane's score
updateGrade(student2);

// 7. Log the final grades for both students
console.log("\nAfter swapping and updating grades:");
console.log(student1.name+' now has a grade of: '+ student1.grade);
console.log(student2.name+' now has a grade of: '+student2.grade);
