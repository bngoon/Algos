function gradingStudents(grades) {
    let res = [];
    for (let grade of grades) {
        if (grade >= 38) {
            let mod5 = grade % 5;

            if (mod5 >= 3 && grade % 5 !== 0) {
                grade += (5 - mod5);
            }
        }
        res.push(grade);
    }
    return res;
}




let testGrades = [73, 67, 38, 33, 91];
console.log("Original Grades:", testGrades);

let roundedGrades = gradingStudents(testGrades);
console.log("Rounded Grades:", roundedGrades);