function run(a){
    var b = a.split('')
    var c = b.slice(b.length - 3, b.length + 1)
    var d = ''
    for(var i = 0; i <= 3; i++){
        d += c.join('')
    }
    console.log(d)
}

run('javascript')