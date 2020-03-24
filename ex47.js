/*
Your mission here is to create a function that gets an array and returns 
a tuple with 3 elements - the first, third and second to the last for 
the given array.
*/

function easyUnpack(elements) {
    var a = [elements[0], elements[2],elements[elements.length - 2]]
    console.log(a)
}

easyUnpack([1, 2, 3, 4, 5, 6, 7, 9])