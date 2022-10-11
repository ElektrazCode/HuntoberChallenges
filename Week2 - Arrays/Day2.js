/*So it turns out that some of the information I stored ever-so-safely in arrays just isn't looking right. I'm not going to be happy until it feels right, you know what I mean? Could you help me rearrange things a bit?

I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

Some things to note:

If the given value is on the edge of the array and can't move in that direction, don't move it.
The given primitive value will only occur once in the array
The array passed in should be mutated by this function. Scandalous, I know.

Example:
myArray = ['abc', 'xyz', 1, 2, 'Hey!']

// call move left function with 'xyz' and myArray as arguments
console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// call move right function this time, with 2 and myArray as arguments
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change

* */

function moveLeft(array, element){
    let index = array.indexOf(element);
    if (index === 0)
        return array;
    array.splice(index, 1);
    array.splice(index-1, 0, element);
    return array;
}

function moveRight(array, element){
    let index = array.indexOf(element);
    if (index === array.length-1)
        return array;
    array.splice(index, 1);
    array.splice(index+1, 0, element);
    return array;
}


let myArray = ['abc', 'xyz', 1, 2, 'Hey!'];
console.log(moveLeft(myArray, 'xyz'));
console.log(moveRight(myArray, 2));
console.log(moveLeft(myArray, 'xyz'));
console.log(moveRight(myArray, 2));