/*
Nicola likes to categorize all sorts of things. He categorized a series of 
numbers and as the result of his efforts, a simple sequence of numbers became 
a deeply-nested list. Sophia and Stephan don't really understand his organization 
and need to figure out what it all means. They need your help to understand 
Nikolas crazy list.

There is a list which contains integers or other nested lists which may contain 
yet more lists and integers which then… you get the idea. You should put all of 
the integer values into one flat list. The order should be as it was in the 
original list with string representation from left to right.

We need to hide this program from Nikola by keeping it small and easy to hide. 
Because of this, your code should be shorter than 140 characters 
(with whitespaces).
*/

function flatList(array){
    var b = String(array)
    var c = b.split(',')
    var d = []
    for(var i of c){
        if(i !== ''){
            d.push(Number(i))
        }
    }
    console.log(d)
}

flatList([[[[[[[[[]]]]]]]]])