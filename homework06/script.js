const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }
]
// Task 1
function getSubjects(students){
 const subjects = `${Object.keys(students.subjects)}`.replace("_"," ").split(',');
for ( let i = 0; i<subjects.length; i++){
    subjects[i] = subjects[i].charAt(0).toUpperCase() + subjects[i].slice(1);
}
return subjects
}
console.log(getSubjects(students[0]))
// Task 2
function getAverageMark(students){
    const allMark = `${Object.values(students.subjects)}`.split(',');
        const average = allMark.reduce((prevValue, item) => {
            return Number(prevValue) + Number(item) 
        })
    return(average / allMark.length).toFixed(2)
    }
    console.log(getAverageMark(students[0]))
// Task 3
function getStudentInfo (students){
        let studentInfo = {};
        studentInfo.course = students.course;
        studentInfo.name = students.name;
        studentInfo.averageMark = getAverageMark(students);
        return studentInfo   
    }
console.log(getStudentInfo(students[0]))
// Task 4
function getStudentsName (students){
    const studentsName = [];
    for(let key in students){
        studentsName.push(students[key].name)   
    }
    return studentsName.sort()
}
console.log(getStudentsName(students))

// Task 5
    function getBestStudents (students){
        let bestMark = 0;
        let bestStudent = {};
        for ( let key in students){
            let averageMark = getAverageMark(students[key]);
            if (bestMark < averageMark){
                bestMark = averageMark;
                bestStudent.name = students[key].name
            }
        }
        return bestStudent.name
}
    console.log(getBestStudents(students))

// Task 6 
function calculateWordLetters(String){
    const wordByLetters = {}
    for ( let i=0; i < String.length; i++){
        let key = `"${String.charAt(i)}"`;
        let counter = 0;
        for ( let i=0; i < String.length; i++){
        if (`"${String[i]}"` === key){
            counter++;
        }}
        wordByLetters[key] = counter
}
return wordByLetters
}
console.log(calculateWordLetters('тест'))