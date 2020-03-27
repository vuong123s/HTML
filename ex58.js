/*
Determine whether the sequence of elements items is ascending so that its each 
element is strictly larger than (and not merely equal to) the element that 
precedes it.
*/

function isAscending(items) {
    var a = items[0]
    var b = 0
    for(var i = 1; i < items.length; i++){
        if(a < items[i]){
            a = items[i]
            b++
        }
    }
    if(b === items.length - 1){
        console.log(true)
    }else if(items.length === 0){
        console.log(true)
    }else if(items.length === 1){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

isAscending([-5, 10, 99, 123456])