/*

Reverse to old CheckiO mission Roman Numerals

Here you should convert decimal numerals into roman numerals.
*/

function reverseRoman(roman) {
    var x = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var x1 = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    var f = []
    var a = roman.split('')
    var b = 0
    for(var i = 0; i < a.length; i++){
        var v = ''
        if(x1.indexOf(a[i]) > x1.indexOf(a[i+1]) && x1.indexOf(a[i+1]) !== -1){
            v = v + a[i] + a[i+1]
            f.push(v)
            i++
        }else{
            v = v + a[i]
            f.push(v)
        }
    }
    for(var i1 of f){
        var h = x1.indexOf(i1)
        b += x[h]
    }
    console.log(b)
}

reverseRoman('MMMDCCCLXXXVIII')