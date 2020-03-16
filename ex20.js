function run (a, b){
    if(a % 7 === 0 || b % 7 === 0 || a % 11 === 0 || b % 11 === 0){
        console.log(true)
    }else{
        console.log(false)
    }
}

run (8, 1)