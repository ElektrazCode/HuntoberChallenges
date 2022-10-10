/**
 * Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.

For example:

// For the string below and 4
"Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
// remove decoy strings
"This is Halloween! This is Halloween!"

// For the string below and 5
"The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
// remove decoy strings and preach 🙌
"The Bachelor is a terrible television show."
 */

function removeDecoy(str, place){
    const message = str.split('');
    return message.filter((letter, index)=> ((index+1) % place != 0)).join('');
}

console.log(removeDecoy("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.", 5));