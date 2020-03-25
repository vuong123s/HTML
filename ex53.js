/*
The Hamming distance between two binary integers is the number of bit positions 
that differs (read more about the Hamming distance on Wikipedia). For example:

    117 = 0 1 1 1 0 1 0 1
     17 = 0 0 0 1 0 0 0 1
      H = 0+1+1+0+0+1+0+0 = 3

You are given two positive numbers (N, M) in decimal form. You should calculate 
the Hamming distance between these two numbers in binary form.
*/

function hammingDistance(n, m){
    var x = 0
    var v = 0
    var a = n.toString(2)
    var a1 = m.toString(2)
    var b = a.split('')
    var b1 = a1.split('') 
    if(b.length > b1.length){
        v = b.length
    }else{
        v = b1.length
    }
    for(var i1 = 0; i1 < v; i1++){
        if(b[i1] === undefined){
            b.splice(0,0,'0')
        }
        if(b1[i1] === undefined){
            b1.splice(0,0,'0')
        }
    }
    for(var i = 0; i < v; i++){
        if(b[i] !== b1[i]){
            x++
        }
    }
    console.log(x)
}

hammingDistance(17, 117)