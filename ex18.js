 //Write a JavaScript program to create new string with first 3 characters are
 //in lower case from a given string. If the string length is less than 3 convert
 //all the characters in upper case.
function run (a){
    var x = a.split('')
    if(x.length > 3){
        var y = x.slice(0, 3)
        var z = y.join('')
        console.log(z.toLowerCase())
    }else{
        var y = x.slice(0, x.length)
        var z = y.join('')
        console.log(z.toUpperCase())
    }
}

run('jHPaga')