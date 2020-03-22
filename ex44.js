/*
You are given a string where you have to find its first word.

When solving a task pay attention to the following points:

There can be dots and commas in a string.
A string can start with a letter or, for example, a dot or space.
A word can contain an apostrophe and it's a part of a word.
The whole text can be represented with one word and that's it.
*/

function firstWord(a, b) {
    var x = /\w/g
    var x1 = /\W/g
    var y = a.split(' ')
    var z = []
    for(var i of y){
        var f = i.match(x)
        var f1 = i.match(x1)
        console.log(f1)
        if(f !== null){
            if(f1 !== null){
                var v = i.split('')
                for(var i1 = 0; i1 < f1.length; i1++){
                    if(v[0] === f1[i1]){
                        v.splice(0, 1)
                        z.push(v.join(''))
                    }else if(v[i.length - 1] === f1[i1]){
                        v.splice(i.length - 1, 1)
                        z.push(v.join(''))
                    }else if (f1[i1] === "'"){
                        z.push(v.join(''))
                    }else{
                        var n = i.split(f1)
                        for(var i2 of n){
                            z.push(i2)
                        }
                    }
                }
            }else{
                z.push(f.join(''))
            }
        }
    }
    console.log(z);
}

firstWord("don't touch it")