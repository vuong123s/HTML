function run(a, b){
    var c = a.split('')
    var d = c.slice(2,5)
    var f = d.filter(function(x){
        return x === b
    })

    if(f.length >= 1){
        console.log(true)
    }else{
        console.log(false)
    }
}

run('dadsa', 'n')