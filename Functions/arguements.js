function spreadArgs(fn){
    return function spread(args){
        return fn(...args)
    }
}


function f(w,x,y,z){
    console.log(w + x + y + z);
}

var spreadedF = spreadArgs(f);

spreadedF([1,2,3,4]);


/**
 * Task: How to do reverse: convert a function that takes arr of arg and convert arguements to array for it
 */

 // Solution
 function gatherArgs(fn){
     return function gather(...args){
         return fn(args)
     }
 }

 function g(arr){
     console.log(arr);
 }

 var gatheredFunc = gatherArgs(g);
 gatheredFunc(1,2,3)
