function getDaysUntilXmas() {
    var oneMinute = 60 * 1000
    var oneHour = oneMinute * 60
    var oneDay = oneHour * 24
    var today = new Date()
    var nextXmas = new Date()
    nextXmas.setMonth(11)
    nextXmas.setDate(25)
    if (today.getMonth() == 11 && today.getDate() > 25) {
        nextXmas.setFullYear(nextXmas.getFullYear() + 1)
    }
    var diff = nextXmas.getTime() - today.getTime()
    diff = Math.floor(diff/oneDay)
    console.log(diff)
}

getDaysUntilXmas()