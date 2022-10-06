/**Today's challenge is minor to give you all a bit of a break halfway through the challenge week, but there are a couple of side quests I'm going to throw out for those with extra time on their hands.

So far we've swapped out calculator characters, cleaned up after a cat and a preschooler, and placed some spaces. Today is simple! Given a string, reverse it. Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string. For example:


"   The white space at the beginning of this string doesn't match the whitespace at the end. "
// reverse it
" .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "
🏅 Some extra work
By now you should have written a function for each day so far. If not, go back and finish those up! Here are some things I'd suggest doing to build a deeper understanding of Strings and their manipulation:

Explain your functions. Practice talking through your code.
Check your function, parameter, and variable names. Good code should be clear to follow and should document itself.
Rewrite your functions, taking a different approach. If you used String methods, try looping, and vice versa. Solve the problem via an alternate route and look for pros and cons of each.
If you haven't yet, use the 4 functions you have so far (in order, Calculator fix -> Use the Day 2 key to add spaces -> Reverse the string), on our secret message. Compare your answer so far with others!
*/

function reverse(message)
{
    return message.split('').reverse().join('');
}

console.log(reverse("   The white space at the beginning of this string doesn't match the whitespace at the end. "));