function run(a){
    var b = a .split('')
    b.splice(0, 1)
    b.splice(b.length-1, 1)
    console.log(b.join(''))
}

run('adasdasd')