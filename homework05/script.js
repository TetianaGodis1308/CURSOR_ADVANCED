// Task 1
function getRandom(length, min,max){
    const result = [];
    for( let i = 0; i<length; i++){
        result.push(Math.round((max-min)*Math.random(max)+min));
        }
        return result;
    }
console.log (getRandom(5,5,10));

// Task 2
function filterEvenNumbers (...numbers){
    let withoutEvenNumbers = numbers.filter(function(item,index,array){
        return item % 2
    }
    )
    return withoutEvenNumbers
}
console.log(filterEvenNumbers(1,2,3,4,5,6))


// Task 3
function getAverage (...numbers){
    const integersForAverage  = numbers.filter(function(item,index,array){
    return Number.isInteger(item)
})
    let sum = 0;
    for (let i = 0; i < integersForAverage.length; i++){
            sum = sum + integersForAverage[i]
        }
        const average = sum / integersForAverage.length;
        return average;
    }
console.log (getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

// Task 4
function countPositiveNumbers(...numbers){
    let positiveNumbers = numbers.filter(function(item,index,array){
        return item > 0
    })
    return positiveNumbers.length;
}
console.log (countPositiveNumbers(1, -2, 3, -4, -5, 6 ) )

// Task 5
function getDividedByFive(...numbers){
    const dividedByFive = numbers.filter(function(item,index,array){
        return Number.isInteger( item / 5 );
    })
    return dividedByFive;
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

// Task 6
function replaceBadWords(string) {
    let splitPhrase = string.split(' ');
    let badWord = ['fuck', 'shit','other bad words'];
    for (let i = 0; i<splitPhrase.length; i++){
        if(splitPhrase[i].includes(badWord.forEach(function(item){
        return splitPhrase[i] = splitPhrase[i].replace((item),'****');
        })));
    }
return splitPhrase.join(' ')
}
console.log (replaceBadWords("Holy shit!"))
