/*
You are given an array of integers. You should find the sum of the integers 
with even indexes (0th, 2nd, 4th...). Then multiply this summed number and 
the final element of the array together. Don't forget that the first element 
has an index of 0.

For an empty array, the result will always be 0 (zero).
*/

function evenLast(data) {
    var a = 0
    if(data.length === 0){
        return 0
    }else{
        for(var i = 0; i < data.length; i++){
            a = a + data[i]
            i++
        }
        return a * data[data.length-1]
    }
    
}

evenLast([0, 1, 2, 3, 4, 5])