/*
For the Robots the decimal format is inconvenient. If they need to count to "1", 
their computer brains want to count it in the binary representation of that 
number. You can read more about binary here.

You are given a number (a positive integer). You should convert it to the binary 
format and count how many unities (1) are in the number spelling. For example: 
5 = 0b101 contains two unities, so the answer is 2.
*/
function binaryCount(number){
    var a = number.toString(2)
    var b = a.split('')
    var c = 0
    for(var i of b){
        c += Number(i)
    }
    console.log(c)
}
binaryCount(1022)