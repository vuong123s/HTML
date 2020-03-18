//You are given a non-empty list of integers (X). For this task, you should return a list consisting of only the non-unique elements in this list. To do so you will need to remove all unique elements (elements which are contained in a given list only once). When solving this task, do not change the order of the list. Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].
function run (arr){
    var c = []
    var b = arr.filter(function(x){
        var a = 0
        for(var i of arr){     
            if(x === i){
                a += 1
            }
        }
        return c.push(a)
    })
    for(var m = 0; m < c.length; m++){
        if(c[m] <= 1){
            arr.splice(c.indexOf(c[m]), 1)
        }
    }
    console.log(arr)
}

run([1, 2, 3, 1, 3])
run([1, 2, 3, 4, 5])
run([5, 5, 5, 5, 5])
run([10, 9, 10, 10, 9, 8])