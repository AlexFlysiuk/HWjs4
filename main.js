console.log('1');
let arrayFirsLast =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
let firstOrLastNumberArray = Number(prompt('Enter 0 or 1'));
firstOrLast(firstOrLastNumberArray,arrayFirsLast); 
function firstOrLast(argument,array){
    if (argument === 0){
        return console.log(`Fist position from array [${array}] is - ${array.slice(0,1)}`);
    } else if (argument === 1){
        return console.log(`Last position from array [${array}] is - ${array.slice(-1)}`);
    } else {
        return console.log('please write 0 or 1');
    }
} 
console.log('-------------------------------------------');

console.log('2');
let smile = [':)', '=)',':)', '=)',':)', '=)'];
let newSmile = prompt('Enter new smile: ')
console.log(`Your array of smile - [${smile}]`);
smileReplaceFunction(newSmile);
function smileReplaceFunction(argument){
    for(let i = 0; i < smile.length; i++){
        if(smile[i] === ':)'){
            smile[i] = argument;
        }
    }
    return console.log(`All smiles ":)" was changed on ${argument}, now your array - [${smile}]`);
}
console.log('-------------------------------------------');

console.log('3');
let firstNumber = Number(prompt('Write first number - '));
let secondNumber = Number(prompt('Write second number - '));
let sing = prompt('Please enter action (+ , - , / , *) - ');
calculator();
function calculator(){
    switch(sing){
        case '+':
            console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
            break;
        case '-':
            console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
            break;
        case '*':
          if(secondNumber === 0){
            console.log(`wrong action! Can't divide by 0 ${secondNumber}`);
            break;
        }
            console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
            break;
        case '/':
            if(secondNumber === 0){
            console.log(`wrong action! Can't divide by 0 ${secondNumber}`);
            break;
        }
            console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
            break;
    }
}
console.log('-------------------------------------------');

console.log('4');
let arrayNotPairedNumbers = [];
arrayFillingAndSortFunction();
function arrayFillingAndSortFunction (){
    for (let i = 0; i <= 25; i++){        
        let rand = Math.floor(1 + Math.random() * (100 + 1 - 1));
        if(rand % 2 != 0){
            arrayNotPairedNumbers.push(rand);            
        }    
    }
    console.log(`arr not paired number - [${arrayNotPairedNumbers}]`);
    console.log(`arr after sort - [${arrayNotPairedNumbers.sort((a,b) => a-b)}]`);
}
console.log('-------------------------------------------');

console.log('5');
let arrayPurchase = ['water', 'beer', 'banana', 'fish', 'cheese', 'wine'];
purchaseFunction(arrayPurchase);
function purchaseFunction(array, callbackFn){
    for(let i = 0; i < array.length; i++){
        callbackPurchase(array[i]);        
    }
}
function callbackPurchase(array){
    return console.log(`Please buy ${array}`);
}
console.log('-------------------------------------------');

console.log('6');
let countMe =[true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

countMeFunction(countMe);

function countMeFunction(array){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === false){
            count++;
        }
    }
    return console.log(`In arr [${countMe}] - ${count} false`);
}