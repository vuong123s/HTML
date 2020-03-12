const moment = require("moment")

function run(){
    var a = moment()
    var b = a.day()
    var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var c = a.hour()
    var d = a.minute()
    var e = a.second()
    console.log('Today is : ' + dayList[b])
    var f;
    if(c >= 12){
        f = 'PM'
    }else{
        f = 'AM'
    }
    console.log(c + f + ':' + d + ':' + e)
}

run()