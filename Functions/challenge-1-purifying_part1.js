
/**
 * PART 1
 * purify a function foo by making a wrapper `bar` around it.
 */


// Impure foo

// function IMPURE_foo(x){
//     y++;
//     z = x * y;
// }

// var y = 5, z;
// IMPURE_foo(20);
// z; //120

// IMPURE_foo(25);
// z; //175


// Solution:
// x and y are inputs and z is the output

function bar(x,y){
    var z;
    IMPURE_foo(x);
    return [y,z];


    function IMPURE_foo(x){
        y++;
        z = x * y;
    }

}


console.log(bar (20,5)) //[6, 120]
