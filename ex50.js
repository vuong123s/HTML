function fastTrain(numbers) {
    var y = []
    var n = 0
    for(var i of numbers){
        var x = 0
        var z = 0
        n = n + i[0]
        while(x < n){
            x = x + z
            if(z < i[1]){
                z++
            }
            console.log(z)
        }
    }
    
}

fastTrain([[5, 5], [4, 2]]) 