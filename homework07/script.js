const ukraine = { 
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476 };
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 };
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 };
// Task 1
function getMyTaxes(salary){
    return this.tax * salary
}
console.log(getMyTaxes.call(ukraine, 2000))
// Task 2
function getMiddleTaxes (country){
    return this.tax * this.middleSalary
}
console.log(getMiddleTaxes.call(ukraine))
// Task 3
function getTotalTaxes(country){
    return this.tax * this.middleSalary * this.vacancies
}
console.log(getTotalTaxes.call(ukraine))
// Task 4
function getMySalary(country){
    const mySalary = {
        salary : Math.round(500 * Math.random(2000)+1500),
    }
    mySalary.taxes = this.tax * mySalary.salary 
    mySalary.profit = mySalary.salary - mySalary.taxes
    return mySalary
}
let timerId = setInterval(() => console.log (getMySalary.call(ukraine)), 10000);