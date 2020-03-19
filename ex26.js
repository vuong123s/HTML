function weakPoint(matrix){
    var x = []
    var x1 = []

    for(var a of matrix){
        var y = 0
        for(var i = 0; i < a.length; i++){
            y += a[i]
        }
        x.push(y)
    }

    for(var m = 0; m < matrix.length; m++){
        var z = 0
        for(var n of matrix){
            z += n[m]    
        }
        x1.push(z)
    }

    var e = Math.min(...x)
    var e1 = Math.min(...x1)

    var f = x.indexOf(e)
    var f1 = x1.indexOf(e1)

    var q = [f, f1]

    return q
}

weakPoint([[7, 2, 7, 2, 8],
           [2, 9, 4, 1, 7],
           [3, 8, 6, 2, 4],
           [2, 5, 2, 9, 1],
           [6, 6, 5, 4, 5]])

/**
 * While traveling, the spaceship endures quite a lot of stress. As a result, an important part of the maintenance is to check the outer hull. Stephan uses a digital durabilitimeter for this task. The device scans a portion of the spaceships hull and gives a durability map that is divided by small square fragments with measurements. Sometimes Stephan does not have much time and he can patch only couple points, so we need an algorithm to find the weak points.

 * The durability map is represented as a matrix with digits. Each number is the durability measurement for the cell. To find the weakest point we should find the weakest row and column. The weakest point is placed in the intersection of these rows and columns. Row (column) durability is a sum of cell durability in that row (column). You should find coordinates of the weakest point (row and column). The first row (column) is 0th row (column). If a section has several equal weak points, then choose the top left point.
 */