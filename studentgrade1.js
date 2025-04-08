function calculateGrade(score){
    return score>=90 ? 'A':
           score>=80 ? 'B':
           score>=70 ? 'c':
           score>=60 ? 'D':'F';    
}

function swapGrades(student1,student2){  //pass by value
    let tem = student1.grade;
    student1.grade = student2.grade;
    student2.grade = tem;
}

function updateGrade(student){
    if(student.score>=90){
        student.grade = 'A';
    }else if (student.score>=80){
        student.grade = 'B';
    }else if(student.score>=70){
        student.grade = 'c';
    }else if(student.score>=60){
        student.grade = 'd';
    }else{
        student.grade = 'F'
    }
}

const student1 = {name:"jay",score:90,grade:""};
const student2 = {name:"krish",score:80,grade:""};

student1.grade = calculateGrade(student1.score);
student2.grade = calculateGrade(student2.score);

console.log(student1.name+' has a grade of: '+student1.grade);
console.log(student2.name+' has a grade of: '+ student2.grade);

swapGrades(student1,student2);

student2.score=55;
updateGrade(student2);

console.log("After swapping and updating grades:");
console.log(student1.name+' now has a grade of: '+ student1.grade);
console.log(student2.name+' now has a grade of: '+student2.grade);
