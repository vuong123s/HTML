function run(a, b){
    var c = Math.abs(100 - a)
    var d = Math.abs(100 - b)
    if(c > d){
        console.log(b)
    }else{
        console.log(a)
    }
}

run(15, 10001)