let userInput = (process.argv).slice(2)

//const timer = function(time){
  for(let element of userInput){
      if(!isNaN(element) && element > 0){
        setTimeout(()=>{
          process.stdout.write('\x07')
        } , (element*1000))
  }
}
//}

//timer(userInput)