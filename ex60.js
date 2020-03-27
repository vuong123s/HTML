/*
After reading this fragment Nicola wants to build his own "Humpty Dumpty". As a 
basis he chooses the spheroid (read more about it on Wikipedia). We know the 
height and width (in inches) for this spheroid. For the job at hand, Nikola 
needs to know how much material is required.

You can help him and create a function to calculate the volume (cubic inches) 
and the surface area (square inches).
*/

function spheroid(height, width) {
    // your code here
    var c = height/2 
    var a = width/2
    var s = 0
    var v = 0
    if(height === width){
        s = Math.round(4 * Math.PI * a ** 2 * 100)/100
        v = Math.round(4/3 * (Math.PI * a **3) * 100)/100
    }else if(height > width){
        var e = Math.sqrt(1 - a**2/c**2)
        s = Math.round(2 * Math.PI * a ** 2 * (1 + (c / (a * e)) * Math.asin(e))*100)/100
        v = Math.round(Math.PI/6 * width ** 2 * height*100)/100
    }else if(width > height){
        var e = Math.sqrt(1 - c**2/a**2)
        s = Math.round(2 * Math.PI * a ** 2 * (1 + ((1 - e ** 2)/e) * Math.atanh(e))*100)/100
        v = Math.round(Math.PI/6 * width ** 2 * height*100)/100
    }
    console.log(s)
    console.log(v)
}

spheroid(10, 10)