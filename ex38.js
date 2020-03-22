/*
Let's work with numbers.

You are given an array of numbers (floats). You should find the difference 
between the maximum and minimum element. Your function should be able to 
handle an undefined amount of arguments. For an empty argument list, the 
function should return 0.

Floating-point numbers are represented in computer hardware as base 2 (binary) 
fractions. So we should check the result with ±0.001 precision.
Think about how to work with an arbitrary number of arguments.
*/

function mostNumbers(numbers){
    if(arguments.length === 0){
        return 0
    }else{
        var a = Math.max(...arguments)
        var b = Math.min(...arguments)
        return a - b
    }
}

mostNumbers(1, 2, 3)