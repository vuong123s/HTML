/*
Stephan works with simple forms when constructing something, and he needs some 
programming tools to calculate his expenses. Let's take a trip back to our 
school days and pull out some simple geometry for this.

You should write a function to calculate the area of simple figures: circles, 
rectangles and triangles. You are give an arbitrary number of arguments and 
depending on this, the function calculates area for the different figures.

One argument -- The diameter of a circle and you need to calculate the area of 
this circle.
Two arguments -- The side lengths of a rectangle and you need to calculate the 
area of this rectangle.
Three arguments -- The lengths of each side of a triangle and you need to 
calculate the area of this triangle.
*/

function simpleAreas(...args) {
    var s = 0
    if(args[0].length === 1){
        var a = args / 2
        s = Math.round(a * a * Math.PI * 100) / 100
    }else if (args[0].length === 2){
        var a = args[0][0]
        var b = args[0][1]
        s = Math.round(a * b * 100) / 100
    }else{
        var a = args[0]
        var b = args[1]
        var c = args[2]
        var p = (a + b + c)/ 2
        var h = 2*Math.sqrt(p*(p-a)*(p-b)*(p-c))/a
        s = Math.round((a * h) / 2 * 100) / 100
    }
    console.log(s)
}
simpleAreas([1,1,1])