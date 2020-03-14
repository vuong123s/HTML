function run(a){
    var b = a.split('')
    var d = 0
    for(var i = 0; i < b.length; i++){
        var c = parseInt(b[i])
        if(isNaN(c)){
        }else{
            d += c
        }
    }
    console.log(d)
}
run('dadas15da')