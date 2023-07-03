function getMaxDigit (number) {

    const elemens = String(number).split('');
    let val ;
    for ( let i = 0; i< elemens.length; i++){
        if (val === undefined){
            val = elemens[i];
            continue;
        }
        if( elemens[i] > val ){
            val = elemens[i];
        }
    }
    return val; 
}
function pow (number, step){
    let result = 1; 
    for ( let i = 0; i < step; i++) {
        result *= number;
    }
    return result;
}
function bigletter (name){
    letter = name.charAt(0).toUpperCase();
    name = letter + name.slice(1);
    return name;
}
function salary (number){
    tax = number * 0.195;
    number = number - tax;
    return number;
}
function getRandomNumber (N,M) {
    if ( M>N && M!==N ){
        randomNumber = Math.round((M-N) * Math.random(M)+N);
    }
    else if (M<N && M!==N){
        randomNumber = Math.round((N-M) * Math.random(N)+M);
    }
    return randomNumber;
}
function countLetter (name,letter){
    let counter = 0;
    name = name.toLowerCase();
    for( let i=0; i<name.length; i++){
        if (name[i] === letter){
            counter++;
        }
    }
    return counter;
}
function convertCurrency (value) {
    if (value[value.length-1] === '$'){
        number = value.slice(0,value.length-1);
        value = (number * 37) + 'UAH';
    }
    else if(value.includes('UAH')){
        number = value.slice(0,value.length-3);
        value = (number / 37) + '$' ;
    }
    else{
        value = 'Error.Uncorrect currency';
    }
    return value
}
console.log(`
Функція №1(найбільша цифра в цьому числі): ${getMaxDigit('1236')}

Функція №2(визначає ступінь числа): ${pow ('2','3')}

Функція №3(форматує ім'я, роблячи першу букву великою): ${bigletter ('влад')}

Функція №4(вираховує суму, що залишається після оплати податку від зарабітньої плати): ${salary ('1000')}

Функція №5(повертає випадкове ціле число в діапазоні від N до M): ${getRandomNumber ('1','10')}

Функція №6(рахує скільки разів певна буква повторюється в слові): ${countLetter('Асталавіста', 'а')}

Функція №7(конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.): ${convertCurrency ('100$')}
`
)