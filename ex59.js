/*
From a Array of Integers you have to create a list of closed intervals as 
Arrays, so the intervals are covering all the values found in the set.

A closed interval includes its endpoints! The interval 1..5, for example, 
includes each value x that satifies the condition 1 <= x <= 5.

Values can only be in the same interval if the difference between a value and 
the next smaller value in the set equals one, otherwise a new interval begins. 
Of course, the start value of an interval is excluded from this rule.
A single value, that does not fit into an existing interval becomes the 
start - and endpoint of a new interval.
*/

function createIntervals(data) {
    var a = data.sort(function(x,y){
        return x - y
    })
    var b = []
    if(a.length === 1){
        b.push([a[0], a[0]])
    }else if (a.length > 1){
        var c = a[0]
        var d = a[0]
        for(var i = 0; i < a.length; i++){
            if(c - a[i] === 1){
                c = a[i]
            }else if (a[i] - d === 1){
                d = a[i]
            }else if (c - a[i] > 1 || a[i] - d > 1){
                b.push([c,d])
                c = d = a[i]
            }
        }
        b.push([c,d])
    }
    console.log(b)
}

createIntervals([1,2,3,5,6,12])