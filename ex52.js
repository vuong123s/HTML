/*
In mathematics, particularly in linear algebra, a skew-symmetric matrix 
(also known as an antisymmetric or antimetric) is a square matrix A which 
is transposed and negative. This means that it satisfies the equation
A = −AT. If the entry in the i-th row and j-th column is aij, i.e. A = (aij) 
then the symmetric condition becomes aij = −aji.

You should determine whether the specified square matrix is skew-symmetric 
or not.

You can find more details on Skew-symmetric matrices on its
*/

function symmetric(matrix) {
    var x = []
    var x2 = []
    var x3 = []

    for(var a of matrix){
        var y = a.map(function(i){
            return i * (-1)
        })
        x.push(y)
    }

    for(var m = 0; m < matrix.length; m++){
        var z = 0
        var x1 = []
        for(var n of matrix){
            var z = n[m]   
            x1.push(z)
        }
        x2.push(x1)
    }

    for(var v = 0; v < matrix.length; v++){
        for(var v1 = 0; v1 < matrix[v].length; v1++){
            if(x[v][v1] !== x2[v][v1]){
                x3.push(false)
            }else{
                x3.push(true)
            }
        }
    }
    
    var h = x3.filter(function(i){
        return i === false
    })
    
    if(h.length > 0){
        console.log(false)
    }else{
        console.log(true)
    } 
}

symmetric([[0,1,2],[-1,1,1],[-2,-1,0]])