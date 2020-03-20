/* 
There are four substring missions that were born all in one day and you shouldn’t be needed more than one day to solve them. All of those mission can be 
simply solved by brute force, but is it always the best way to go? (you might not have access to all of those missions yet, but they are going to be ava
ilable with more opened islands on the map).

This mission is the first one of the series. Here you should find the length of the longest substring that consists of the same letter. For example, line 
"aaabbcaaaa" contains four substrings with the same letters "aaa", "bb","c" and "aaaa". The last substring is the longest one which makes it an answer.
*/

function longRepeat(line) {
    var x = line.split('')
    var y = []
    if(line.length === 0){
        return 0
    }else{
        for(var i = 0; i < x.length; i++){
            var z
            var w
            if(z !== x[i]){
                z = x[i]
                w = z
                y.push(w)
            }else{
                w = w + x[i]
                y.push(w)
            }
        }
    
        var a = []
        for(var i1 of y){
            a.push(i1.length)
        }
        return Math.max(...a)
    }
}

console.log(longRepeat('abaababa'))