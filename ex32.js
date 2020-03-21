/*
You are given a positive integer. Your function should calculate the product 
of the digits excluding any zeroes.

For example: The number given is 123405. The result will be 1*2*3*4*5=120 
(don't forget to exclude zeroes).
*/
function digitsMultip(data) {
    var a = String(data)
    var patt = /[^0]/g
    var b = a.match(patt)
    var c = 1
    for(var i of b){
        c *= Number(i)
    }
    return c
}

digitsMultip(123405)