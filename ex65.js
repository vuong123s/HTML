/*
Your mission is to convert the name of a function (a string) from the Python 
format (for example "my_function_name") into CamelCase ("MyFunctionName"), 
where the first char of every word is in uppercase and all words are concatenated 
without any intervening characters.
*/

function toCamelCase(name) {
    // your code here
    var a = name.split('_')
    var x = []
    for(var i of a){
        var b = i.charAt(0).toUpperCase()
        var c = i.substr(1)
        var d = b + c
        x.push(d)
    }
    console.log(x.join(''))
}
toCamelCase("my_function_name")