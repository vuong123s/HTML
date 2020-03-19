/*
You are given a text, which contains different english letters and punctuation symbols. You should find the most frequent letter in the text. The letter returned must be in lower case.
While checking for the most wanted letter, casing does not matter, so for the purpose of your search, "A" == "a". Make sure you do not count punctuation symbols, digits and whitespaces, only letters.

If you have two or more letters with the same frequency, then return the letter which comes first in the latin alphabet. For example -- "one" contains "o", "n", "e" only once for each, thus we choose "e".

Input: A text for analysis as a string.

Output: The most frequent letter in lower case as a string.
*/
function mostWanted(data) {
    var x = data.toLowerCase()
    var xx = 0 
    var zz = x.split('')
    var y0 = zz.filter(function(s){
        return s !== '!'
    })

    var y1 = y0.filter(function(s){
        return s !== '.'
    })
    var y2 = y1.filter(function(s){
        return s !== '?'
    })
    var y3 = y2.filter(function(s){
        return isNaN(s) === true
    }) 
    var y = y3.filter(function(s){
        return s !== ' '
    })

    var z = []
    var z1 = []
    for(var i = 0; i < y.length; i++){
        var v = 0
        for(var n = 0; n < y.length; n++){
            if(y[i] === y[n]){
                v++
            }
        }
        z.push(v)
    }

    var a = Math.max(...z)
    for(var o = 0; o < z.length; o++){
        if(a === z[o]){
            xx++
        }
    }
    

    if(a < xx || a === 1){
        for(var t = 97; t <= 122; t++){
            var v1 = 0
            for(var k = 0; k < y.length; k++){
                if(String.fromCharCode(t) === y[k]){
                    v1 = t 
                }
            }if(v1 !== 0){
                z1.push(v1)
            }
        }
        return String.fromCharCode(z1[0])
    }else{
        var b = z.indexOf(a)
        return x[b]
    }
}

mostWanted("Lorem ipsum dolor sit amet")