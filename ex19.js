//Write a JavaScript program to check from two given integers whether one of 
//them is 8 or their sum or difference is 8.
function run(a, b){
    if(a === 8 || b === 8 || Math.abs(a - b) === 8 || Math.abs(a + b) === 8){
        console.log(true)
    }else{
        console.log(false)
    }
}

run (5, 1)