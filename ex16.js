function run(a, b){
    var x = a.split('')
    var y = b.split('')
    var z = ''
    if(x.length > y.length){
        x.splice(y.length, x.length - y.length)
        z = x.join('') + y.join('')
    }else{
        y.splice(x.length, y.length - x.length)
        z = x.join('') + y.join('')
    }
    console.log(z)
}

run('ddaddd', 'hghghghg')