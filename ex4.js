function run(a, b){
    var c = a.split('')
    c.splice(b,1)
    console.log(c.join(''))
}
run('dasdsa', 4)