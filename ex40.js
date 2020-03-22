/*
You have a sequence of strings, and you’d like to determine the most 
frequently occurring string in the sequence. It can be only one
*/

function mostFrequent(data) {  
    var y = []
    for (var i of data){
        var x = 0
        for (var i1 = 0; i1 < data.length; i1++){
            if(i === data[i1]){
                x++
            }
        }
        y.push(x)
    }
    var a = Math.max(...y)
    var b = y.indexOf(a)
    console.log(data[b])
}

mostFrequent([
    'a', 'b', 'c', 
    'a', 'b',
    'a'
])