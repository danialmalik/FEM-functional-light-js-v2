/**
 * PART 2
 * purify a function `foo` by adapting it to `foo`
 */

// Impure foo

// Impure foo

function IMPURE_foo(x){
    y++;
    z = x * y;
}

// var y = 5, z;
// IMPURE_foo(20);
// z; //120

// IMPURE_foo(25);
// z; //175






function INTERFACE_bar(curX, curY){
    var [origY, origZ] = [y, z];
    y = curY;
    IMPURE_foo(curX);
    var [newY, newZ] = [y, z];
    [y, z] = [origY, origZ];
    return [newY, newZ]
}
var y, z;
console.log(INTERFACE_bar(20,5)) //[6,120]
