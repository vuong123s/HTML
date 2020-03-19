/**
* In cellular automata, the Moore neighborhood comprises the eight cells surrounding a central cell on a two-dimensional square lattice. The neighborhood is named after Edward F. Moore, a pioneer of cellular automata theory. Many board games are played with a rectangular grid with squares as cells. For some games, it is important to know about the conditions of neighbouring cells for chip (figure, draught etc) placement and strategy.
* You are given a state for a rectangular board game grid with chips in a binary matrix, where 1 is a cell with a chip and 0 is an empty cell. You are also given the coordinates for a cell in the form of row and column numbers (starting from 0). You should determine how many chips are close to this cell. Every cell interacts with its eight neighbours; those cells that are horizontally, vertically, or diagonally adjacent.
**/
function countNeighbours(data, row, col) {
    var x = data[row]
    var y = x[col]
    var z = 0
    
    if(col === 0 || col === row.length - 1){
        var w = x.slice(col, col + 2)
    }else{
        var w = x.slice(col - 1, col + 2)
    }
    

    if(row === 0){
        var x2 = data[row + 1]
        if(col === 0 || col === row.length - 1){
            var w2 = x2.slice(col, col + 2)
        }else{
            var w2 = x2.slice(col - 1, col + 2)
        }
    }else if(row === data.length - 1){
        var x1 = data[row - 1]
        if(col === 0 || col === row.length - 1){
            var w1 = x1.slice(col, col + 2)
        }else{
            var w1 = x1.slice(col - 1, col + 2)
        }
    }else{
        var x2 = data[row + 1]
        if(col === 0 || col === row.length - 1){
            var w2 = x2.slice(col, col + 2)
        }else{
            var w2 = x2.slice(col - 1, col + 2)
        }

        var x1 = data[row - 1]
        if(col === 0 || col === row.length - 1){
            var w1 = x1.slice(col, col + 2)
        }else{
            var w1 = x1.slice(col - 1, col + 2)
        }
    }

    var q = [w1,w,w2]
    
    q.filter(function(a){
        if (a !== undefined){
            for(var g = 0; g < a.length; g++){
                if(a[g] === 1){
                    z++
                } 
            }
        }
    })

    if(y === 1){
        return z - 1
    }else{
        return z
    }
}
countNeighbours([[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],5,4)
