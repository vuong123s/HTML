/*
You prefer a good old 12-hour time format. But the modern world we live in would 
rather use the 24-hour format and you see it everywhere. Your task is to convert 
the time from the 24-h format into 12-h format by following the next rules:
- the output format should be 'hh:mm a.m.' 
(for hours before midday) or 'hh:mm p.m.' (for hours after midday)
- if hours is less than 10 - don't write a '0' before it. 
For example: '9:05 a.m.'
*/

function timeConverter(dayTime) {
    // your code here
    var a = dayTime.split(':')
    var b = Number(a[0])
    if(dayTime === '00:00'){
        var c = b + 12
        console.log(String(c) + ':' + a[1] + ' a.m.')
    }
    if(b < 12){
        console.log(String(b) + ':' + a[1] + ' a.m.')
    }else if (b > 12){
        var c = b - 12
        console.log(String(c) + ':' + a[1] + ' p.m.')
    }else if (b = 0 && a[1] === '00'){
        
        console.log(dayTime + ' a.m.')
    }
    else{
        console.log(String(b) + ':' + a[1] + ' a.m.')
    }
}

timeConverter('12:00')