function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction(){
  return function name(){
    console.log("hi")
  }
}

function returnsAnAnonymousFunction(){
  return function(){
    console.log("hi")
  }
}
