/*
Do you remember the radix and Numeral systems from math class? 
Let's practice with it.

You are given a positive number as a string along with the radix for it.
 Your function should convert it into decimal form. The radix is less 
 than 37 and greater than 1. The task uses digits and the letters A-Z for the strings.

Watch out for cases when the number cannot be converted. For example: "1A"
cannot be converted with radix 9. For these cases your function should 
return -1.
*/

function numberRadix(str_number, radix){
    var a = parseInt(str_number, radix)
    var a1 = parseInt(str_number, radix + 1)
    var a2 = parseInt(str_number, radix - 1)
    if(isNaN(a) === true){
        console.log(-1)
    }else if(a1 === a || a2 === a){
        console.log(-1)
    }else{
        console.log(a)
    }
}

numberRadix("5A6E",9)