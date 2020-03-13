var a = document.getElementById('2')
var b = document.getElementById('3')
var c = document.getElementById('4')
var d = document.getElementById('5')
var e = document.getElementById('6')
var f 

c.addEventListener('click', function(){
    f = Number(a.value) * Number(b.value)
    document.write(f)
})
d.addEventListener('click', function(){
    f = Number(a.value) / Number(b.value)
    document.write(f)
})

