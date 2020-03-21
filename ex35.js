/*
For the input of your function, you will be given one sentence. You have to 
return a corrected version, that starts with a capital letter and ends with 
a period (dot).

Pay attention to the fact that not all of the fixes are necessary. If a 
sentence already ends with a period (dot), then adding another one will 
be a mistake.
*/

function correctSentence(text) {
    var a = text.split('')
    var b = a[0].toUpperCase()
    a.splice(0, 1)
    if(a[a.length - 1] !== '.'){
        a.push('.')
    }
    console.log(b + a.join(''))
}

correctSentence("greetings, friends.")