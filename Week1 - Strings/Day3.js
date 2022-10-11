/**This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

Yesterday you should have come up with a few specific characters that we'll need today. Let's refer to those as our key characters.

We need to create a function that will replace any instances of any of the key characters in a given string with an empty space (' '). See below for an example with an example set of key characters.

Remember to keep your code somewhere safe, as you'll need it to decrypt this week's message!

example key characters -> 'A','_','K','E','Y','!'

'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
// implement key replacement function
' you could think this is hard to read before replacing the key characters' */

function giveItSpace(message){
let keys = /[A_KEY!]/g;
return message.replace(keys, ' ');
}

console.log(giveItSpace('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'));