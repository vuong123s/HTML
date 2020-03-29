/*
You are given an expression with numbers, brackets and operators. For this task 
only the brackets matter. Brackets come in three flavors: "{}" "()" or "[]". 
Brackets are used to determine scope or to restrict some expression. If a 
bracket is open, then it must be closed with a closing bracket of the same 
type. The scope of a bracket must not intersected by another bracket. In this 
task you should make a decision, whether to correct an expression or not based 
on the brackets. Do not worry about operators and operands.
*/

function brackets(expression){
    var a = /\w/g
    var b = expression.split(a).join('')
    var c = b.split('')
    var d = c.filter(function(x){
        return x === '(' || x === ')' || 
               x === '[' || x === ']' || 
               x === '{' ||x === '}'
    })
    var e = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    var g = []
    var f = 0
    if(d.length === 0){
        console.log(true)
    }else if(d.length % 2 === 1){
        console.log(false)
    }else{
        for(var i = 0; i < d.length; i++){
            if(d[i] === '(' || d[i] === '[' ||d[i] === '{'){
                g.push(d[i])
            }else{
                var t = g.pop()
                if(d[i] !== e[t]){
                    console.log(false)
                }
            }
        }
        console.log(true)
    }
}

brackets("((5+3)*2+1)")