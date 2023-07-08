const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
"Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
// TASK 1
function getPairs (){
    const studentsBoys = ["Олександр","Ігор","Олексій"];
    const studentsGirls = ["Олена", "Іра","Світлана"];
    const pairs = [];
    for (let i=0; i < 3; i++){
        pairs.push([studentsBoys[i],  studentsGirls[i]]);
    }
    return pairs
}
const pairs = getPairs ();
console.log (pairs)

// TASK 2
function getThemesForPairs (){
    const themesForPairs=[];
    for (let i=0; i < 3; i++){
        themesForPairs.push([(pairs[i]).join(' i '), themes[i]]);
    }
    return themesForPairs;
}
const themesForPairs = getThemesForPairs();
console.log(themesForPairs)

// TASK 3
function getMarksForStudents (){
    const marksForStudents = [];
    for (let i=0; i < students.length; i++){
        marksForStudents.push([students[i],marks[i]]);
}
return marksForStudents
}
const marksForStudents = getMarksForStudents();
console.log(marksForStudents);

// TASK 4
function getMarksForPairs (){
    const max_marks = 5;
    const min_marks = 1;
    const marksRandom = Math.round((max_marks-min_marks)*Math.random(max_marks)+min_marks);
    const marksRandom2 = Math.round((max_marks-min_marks)*Math.random(max_marks)+min_marks);
    const marksRandom3 = Math.round((max_marks-min_marks)*Math.random(max_marks)+min_marks);
    const marksForPairs = [];
    marksForPairs.push([themesForPairs[0], marksRandom], [themesForPairs[1], marksRandom2],[themesForPairs[2], marksRandom3] );
    return marksForPairs;
}
const marksForPairs = getMarksForPairs ();
console.log(marksForPairs)
