//Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
function run (a){
    var x = a.split('a')
    var y = x.slice(0,4)
    var z = y.join('')
    if(z === 'java' || z === 'Java'){
        console.log(true)
    }else{
        console.log(false)
    }
}

run('Javascript')