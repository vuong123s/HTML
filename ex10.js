function run(a){
    var b = a.split('')
    var c = []
    for(var i = b.length - 1; i >= 0; i--){
        c.push(b[i])
    }
    console.log(c.join(''))
}
run('w3resource')