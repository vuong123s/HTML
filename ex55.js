/*
Friday is an awesome day. It's the end of the week after which you can just relax 
and attend to all of the things you've been pushing away. It's really good to 
know how many days you still have to wait, isn't it?

Your task is to write a function that will count how many days are left from a 
certain date to Friday. The argument will be a particular date in a string format 
looking like this:
 'dd.mm.yyyy', where 'dd' - day, 'mm' - month, and 'yyyy' - year.
For example, if that given day is Thursday, then the answer will be 1. 
If that day is Monday, the result is 4. And if that day is Friday, the 
function should return 0.
*/

function friday(day) {
    var x = 6
    var y = 0
    var v = new Date();
    var a = day.split('.')
    
    var b = v.setFullYear(Number(a[2]))
    var b1 = v.setMonth(Number(a[1]) - 1)
    var b2 = v.setDate(Number(a[0]) + 1)
    var c = v.getDay()
    if(c > x){
        y = x + 1
    }else{
        y = x - c
    }
    return y
}

friday( '08.04.2018 ' )
