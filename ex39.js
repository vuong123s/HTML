/*
In computer science and discrete mathematics, an inversion is a pair of places 
in a sequence where the elements in these places are out of their natural order
. So, if we use ascending order for a group of numbers, then an inversion is 
when larger numbers appear before lower number in a sequence.

Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) and we can see here 
three inversions
- 5 and 3; - 5 and 4; - 7 and 6.

You are given a sequence of unique numbers and you should count the number 
of inversions in this sequence.
*/

function countInversion(sequence){
    var x = 0
    for(var i = 0; i < sequence.length; i++){
        for(var i1 = i+1; i1 < sequence.length; i1++){
            if(sequence[i] > sequence[i1]){
                x++
            }
        }
    }
    console.log(x)
}

countInversion([5, 3, 2, 1, 0])