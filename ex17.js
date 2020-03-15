function run (a, b, c){
    var x = a % 10
    var y = b % 10
    var z = c % 10
    if(x === y && x === z || y === x && y === z || z === x && z === y){
        console.log(true)
    }else{
        console.log(false)
    }
}

run(22, 22, 25)