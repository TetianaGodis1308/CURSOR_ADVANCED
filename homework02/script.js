let N = Number (prompt('What is your first number?'));
while (!Number.isInteger(N)){
    console.log('Not correct number');
    console.log(N);
    N = Number (prompt('Try again'));
}
console.log('Correct');
console.log(N);

let M = Number (prompt('What is your last number?') ) ;
while (!Number.isInteger(M)){
    console.log('Not correct number');
    console.log(M);
    M = Number (prompt('Try again'));
}
console.log('Correct');
console.log(M);

let answer = confirm('Skip even numbers?')

let sumNumbersfull = 0;
for (sumNumbers = N; sumNumbers<=M; sumNumbers++ ){
    if (answer && sumNumbers % 2 === 0) {
        continue
    }
    sumNumbersfull += sumNumbers;
}
alert ('Your result: ' + sumNumbersfull);
console.log ('Your result: ' + sumNumbersfull);