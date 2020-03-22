/*
Let's teach the Robots to distinguish words and numbers.

You are given a string with words and numbers separated by whitespaces (one space). 
The words contains only letters. You should check if the string contains three words in succession.
For example, the string "start 5 one two three 7 end" contains three words in succession.
*/
/*
function threeWords(data) {
    var a = /[0-9]/g
    var b = data.split(a)
    for(var i of b){
        var c = i.split(' ')
        if(c.length === 4){
            return true
        }else{
            return false
        }
    }
}
*/
function threeWords(data) {
    var a = /[0-9]/g
    var a1 = /\W/g
    var b = data.split(a)
    var d = []
    for(var i of b){
        var c = i.split(a1)
        for(var i1 = 0; i1 < c.length; i1++){
            if(c[i1] === ''){
                c.splice(i1, 1)
            }
        }
        d.push(c.length)
        
    }
    var f = Math.max(...d)
    if(f >= 3){
        return true
    }else{
        return false
    }
}

threeWords("one two 3 four five six 7 eight 9 ten eleven 12")