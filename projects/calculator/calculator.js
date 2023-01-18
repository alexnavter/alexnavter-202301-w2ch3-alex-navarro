
let num1 = prompt('Introduce el primer valor');
let num2 = prompt('Introduce el segundo valor');

function calculator (num1, num2){
   
if (Number.isNaN(num1) || Number.isNaN(num2) || num1 === '' || num2 === ''){

    alert('Please, introduce 2 numbers');

    } else if (!Number.isNaN(num1) && num2 === null) {
    
    let resultSquare = Math.sqrt(num1)
    resultSquare = parseFloat(resultSquare.toFixed(3))

    console.log(num1 + ' squared, is equal to ' + resultSquare)

    } else if (!Number.isNaN(num1) && !Number.isNaN(num2)){ 

    let resultSum = +num1 + +num2                       // + before variables to convert to number
        resultSum = Number.parseFloat(resultSum).toFixed(3)

    let resultRest = num1 - num2
     resultRest = Number.parseFloat(resultRest).toFixed(3)

    let resultMult = num1 * num2
     resultMult= Number.parseFloat(resultMult).toFixed(3)
    
    let resultDiv = num1 / num2
    resultDiv = Number.parseFloat(resultDiv).toFixed(3)
 
    console.log(num1 + ' + ' + num2 + ' is equal to ' + resultSum);
    console.log(num1 + ' - ' + num2 + ' is equal to ' + resultRest);
    console.log(num1 + ' * ' + num2 + ' is equal to ' + resultMult);
    console.log(num1 + ' / ' + num2 + ' is equal to ' + resultDiv);

    } else {

    alert ('There is an error');

    }
}

calculator(num1, num2);
