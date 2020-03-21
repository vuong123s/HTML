/*
Let's continue examining words. You are given two string with words separated 
by commas. Try to find what is common between these strings. The words are not
 repeated in the same string.

Your function should find all of the words that appear in both strings. The 
result must be represented as a string of words separated by commas in 
alphabetic order.
*/

function commonWords(first, second) {
    var a = first.split(',')
    var b = second.split(',')
    var c = []
    for(var i of b){
        for(var i1 = 0; i1 < a.length; i1++){
            if(i === a[i1]){
                c.push(i)
            }
        }
    }
    
    return c.sort().join(',')
}

commonWords("one,two,three","four,five,one,two,six,three")