/*
Roman numerals come from the ancient Roman numbering system. They are based on specific letters of the alphabet which are combined to signify the sum (or, in some cases, the difference) of their values. The first ten Roman numerals are:
I, II, III, IV, V, VI, VII, VIII, IX, and X.
The Roman numeral system is decimal based but not directly positional and does not include a zero. Roman numerals are based on combinations of these seven symbols:

Numeral	Value
I	1 (unus)
V	5 (quinque)
X	10 (decem)
L	50 (quinquaginta)
C	100 (centum)
D	500 (quingenti)
M	1,000 (mille)
More additional information about roman numerals can be found on the Wikipedia article.
For this task, you should return a roman numeral using the specified integer value ranging from 1 to 3999.
*/

function romanNumerals(number) {
    var x = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var x1 = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    var y = number
    var z = ''
    function run(){
        for(var i = 0; i < x.length; i++){
            if(y >= x[i]){
                y = y - x[i]
                z += x1[i]
                if(y === 0){
                    return z
                }if(y >= x[i]){
                    run()
                }
            }
        }
    }
    run()
    return z
}
console.log(romanNumerals(3999));
