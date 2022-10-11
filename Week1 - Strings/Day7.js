/**Today you'll need to create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.

Examples:

'A'  // first letter of the alphabet, uppercase
'z'  // last letter of the alphabet, lowercase

'p'  // 16th letter of the alphabet, lowercase
'K'  // 16th letter from *end* of alphabet, uppercase

'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
// function replaces letters with opposites
'Example: 0 number or punctuation changes' 

*/

function swap(str){
    // const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    // const hpla = alph.reverse();
    // const message = str.split('');
    // return message.map((letter)=> (/[a-z]/.test(letter)) ? hpla[alph.indexOf(letter.toUpperCase())] : hpla[alph.indexOf(letter.toUpperCase())].toLowerCase()).join('');
    let reduce;
    let add;
    let message = str.split('');
    return message.map( letter => {
                if (!/[a-z]/.test(letter.toLowerCase())) return letter;
                (/[A-Z]/.test(letter)) ? (reduce = 65, add = 97) : (reduce = 97, add = 65);
                let charCode = (25 - (letter.charCodeAt(0) - reduce)) + add ;
                console.log(String.fromCharCode(charCode));
                return String.fromCharCode(charCode);
    }).join('');
}

console.log(swap('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'));