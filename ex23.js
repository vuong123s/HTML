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
        if(a >= 2){
            c.push(x)
        } 
    })
    console.log(c)
}

run([-3,-2,-1,0,0,1,2,3])