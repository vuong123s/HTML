/*
In computer science, a stack is a particular kind of data type or collection in which the principal operations in the collection are the addition of an entity to the collection (also known as push) and the removal of an entity (also known as pop). The relation between the push and pop operations is such that the stack is a Last-In-First-Out (LIFO) data structure. In a LIFO data structure, the last element added to the structure must be the first one to be removed. Often a peek, or top operation is also implemented, returning the value of the top element without removing it.

We will emulate the stack process with Python. You are given a sequence of commands:
- "PUSH X" -- add X in the stack, where X is a digit.
- "POP" -- look and remove the top position. If the stack is empty, then it returns 0 (zero) and does nothing.
- "PEEK" -- look at the top position. If the stack is empty, then it returns 0 (zero).
The stack can only contain digits.

You should process all commands and sum all digits which were taken from the stack ("PEEK" or "POP"). Initial value of the sum is 0 (zero).

Let's look at an example, here’s the sequence of commands:
["PUSH 3", "POP", "POP", "PUSH 4", "PEEK", "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]

Command	    Stack	Sum
PUSH 3	    3	    0
POP		            0+3
POP		            3+0
PUSH 4	    4	    3
PEEK	    4	    3+4
PUSH 9	    4,9	    7
PUSH 0	    4,9,0	7
PEEK	    4,9,0	7+0
POP	        4,9	    7+0
PUSH 1	    4,9,1	7
PEEK	    4,9,1	7+1=8
*/

function digitStack(commands){
    let x = []
    let y = 0
    let z = ['PUSH', 'POP', 'PEEK']
    for(let i of commands){
        for(let i1 of z){
            if(i.indexOf(i1) !== -1){
                if(i1 === 'PUSH'){
                    let a = i.split(' ')
                    x.push(a[1])
                }
                if(i1 === 'POP'){
                    if(x.length > 0){
                        y += parseInt(x[x.length-1])
                    }
                    y += 0
                    x.pop()
                }
                if(i1 === 'PEEK'){
                    if(x.length > 0){
                        y += parseInt(x[x.length-1])
                    }
                    y += 0
                }
            }
        }
    }
    console.log(y)
}

digitStack(["PUSH 3", "POP", "POP", "PUSH 4", "PEEK", "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"])