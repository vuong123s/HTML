//Write a JavaScript program to capitalize the first letter of each word of a given string.
function run (x){
    var a = x.split('')
    var b = a.splice(0,1).join('').toUpperCase()
    var c = a.join('')
    var d = b + c
    console.log(d)
}

run ('dasdsa')