class Student {

    constructor (university, course, fullName, marks){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.restored = marks;
    }
    getInfo(){
        console.log(`Студент ${this.course}-го курсу ${this.university}, ${this.fullName} `)
    }
    get allMarks(){
        return(this.marks)
    }
    set added_Marks(val){
        this.allMarks.push(val)
        console.log (this.allMarks)
    }
    getAverageMark(){
        const average = this.allMarks.reduce((prevValue, item) => {
            return prevValue + item 
        })
        console.log(average / this.allMarks.length)
    }
    dismiss(){
        this.marks = null;
        console.log(this.marks)
        }
    recover(){
        this.marks = this.restored;
        console.log(this.marks)
        }
    }
let Ostap = new Student('Вищої Школи Психотерапії, м.Одеса','4','Остап Родоманський Бендер',[5,4,4,5]);
Ostap.getInfo()
console.log(Ostap.allMarks)
Ostap.added_Marks = 5;
Ostap.getAverageMark()
Ostap.dismiss()
Ostap.recover()
// Advanced
class BudgetStudent extends Student{
    constructor(university, course, fullName, marks){
        super(university, course, fullName, marks);
        this.scholarShip = setInterval(() => this.getScholarship(), 30000);
    }
    getScholarship(){
        if(this.getAverageMark() >= 4) {
            console.log("Ви отримали 1400 грн. стипендії")
        }
        else{
            console.log("Ви не отримаєте стипендії")
        }
    }
}
let Natalia = new BudgetStudent('Національного університету "Львівської політехніки"','2','Івашків Наталія Степанівна',[5,5,4,5]);
console.log(Natalia.scholarShip)