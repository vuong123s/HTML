/*
You are given a string and two markers (the initial and final). You have to
find a substring enclosed between these two markers. But there are a few 
important conditions:

The initial and final markers are always different.
If there is no initial marker, then the first character should be considered 
the beginning of a string.
If there is no final marker, then the last character should be considered the
ending of a string.
If the initial and final markers are missing then simply return the whole 
string.
If the final marker comes before the initial marker, then return an empty 
string.
*/

function betweenMarkers(text, begin, end) {
    var a = text.indexOf(begin)
    var b = text.indexOf(end)
    
    if(a === -1 && b !== -1){
        var c = text.substring(0, b)
    }else if(a !== -1 && b === -1){
        var c = text.substring(a + begin.length, text.length + 1)
    }else if (a === -1 && b === -1){
        var c = text
    }else if (a > b){
        var c = ''
    }else{
        var c = text.substring(a + begin.length, b)
    }
    console.log(c)
}

betweenMarkers('No <hi>', '>', '<')