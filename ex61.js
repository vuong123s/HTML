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
    var e = []
    if(d.length === 0){
        console.log(true)
    }else{
        for(var i = 0; i < d.length; i++){
            
        }
    }
    console.log(e)
}

brackets("[(3)+(-1)]*{3}")