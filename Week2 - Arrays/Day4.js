/**Imagine, if you will, an array with length X, with each of its entries having X number of primitives as their entries. Now imagine it arranged as a grid.

// for the less imaginative among us :) 
[[0,1,2],[3,4,5],[6,7,8]]

// as a grid
[
[0,1,2],
[3,4,5],
[6,7,8]
]
Still with me? I hope so! Today I need your help moving some things around again. I'm always rearranging.

Please write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be. Just like in Day 2, don't do anything if the given value is already as high or low as it can get.

Oh, and go ahead and mutate the given array. We're livin' on the wild side!

Examples:

myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

// call move up function with 'h' and myGrid
console.log(myGrid) = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
// Note that 'h' is already as far up as it can go
console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move down function this time, with 'f' and myGrid as arguments
console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// call move down function again, same arguments
// Note that 'f' is already as far down as it can go
console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']] */



/**input: array or arrays of letters
 * output: mutated array
 * goal: twin functions to move elements up and down 1 row by swapping elements
 * constraints: if row 0 or length - 1 nothing to be done
 * examples: myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
 *           console.log(moveUp(myGrid, h)) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]
 * code: find the letter double for loop to search, 
 *       once found check if at row 0 or length-1 (return array)
 *       else swap element with element at arr[i-1][j];
 */ 

function print(arr){
    arr.forEach((subArr) => console.log(subArr));
}

function search(arr, letter){
    let index = [];
    arr.forEach((subArr, row) => subArr.forEach((element, col)=> (element === letter) ? index = [row,col] : [-1,-1]));
    return index;
}

function moveUp(arr, letter){
    let [row, col] = search(arr, letter);
    if (row >0){
        arr[row][col] = arr[row-1][col];
        arr[row-1][col] = letter;
    }
    return arr;
}

function moveDown(arr, letter){
    let [row, col] = search(arr, letter);
    if (row !== -1 && row !== arr.length -1){
        arr[row][col] = arr[row+1][col];
        arr[row+1][col] = letter;
    }
    return arr;
 }

const myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
print(moveUp(myGrid, 'h'));
print(moveDown(myGrid, 'f'));
print(moveUp(myGrid, 'h'));
print(moveDown(myGrid, 'f'));