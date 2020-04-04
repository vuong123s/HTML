function letterQueue(commands){
  var a = ''
  var b = ["PUSH" , "POP"]
  for(var i of commands){
    for(var i1 of b){
      if(i.indexOf(i1) !== -1){
        if(i1 === 'PUSH'){
          var c = i.split(' ')
          a += c[1]
        }else{
          var d = a.split('')
          d.splice(0, 1)
          a = d.join('')
        }
      }
    }
  }
  console.log(a)
}

letterQueue(["POP", "POP"])