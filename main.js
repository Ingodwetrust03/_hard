"use strict"

let num = 266219
let strFromNum = num.toString();
let numArray = strFromNum.split('');
console.log(numArray)

let result = numArray.reduce(function(a, b) {
    return a * b;
  });
  console.log(result)

  result **= 3
  console.log(result) 


  let strFromResult = result.toString()
  let reducedStrFromResult = strFromResult.substring(0, 2)
      console.log(reducedStrFromResult)

 


