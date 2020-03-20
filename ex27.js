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
    var y4 = y3.filter(function(s){
        return s !== '-'
    }) 
    var y5 = y4.filter(function(s){
        return s !== ','
    }) 
    var y = y5.filter(function(s){
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
        var p = y
        for(var o1 = 0; o1 < z.length; o1++){
            if(a > z[o1]){
                p = p.filter(function(mm){
                    return mm !== y[o1]
                })
            }
        }
        for(var t = 97; t <= 122; t++){
            var v1 = 0
            for(var k = 0; k < p.length; k++){
                if(String.fromCharCode(t) === p[k]){
                    v1 = t 
                }
            }if(v1 !== 0){
                z1.push(v1)
            }
        }
        return String.fromCharCode(z1[0])
    }else{
        var b = z.indexOf(a)
        return y[b]
    }
}

mostWanted("But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.")