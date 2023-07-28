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
    const marksForPairs = [];
    for (let i=0; i < 3; i++){
        const marksRandom = Math.round(4*Math.random(5)+1);
        marksForPairs.push([(themesForPairs[i]) ,marksRandom]);
    }
    return marksForPairs;
}
const marksForPairs = getMarksForPairs ();
console.log(marksForPairs)
