# Is Palindrome

## Description

Test if a word is a palindrome. A word is a palindrome if and only if it reads
the same from left to right and from right to left (e.g. `gag`, `kayak`,
`php`, `radar`).

## Approach

This is solved recursively rather than with loops/counters:

1. **Base case**: an empty word or a word containing a single character is a
   palindrome by definition.
2. **Recursive step**: compare the first and last characters of the word.
   - If they differ, the word is not a palindrome — stop.
   - If they match, recurse on the substring with both ends removed.

## Usage

```js
const isPalindrome = require('./isPalindrome');

console.log(isPalindrome('gag'));   // true
console.log(isPalindrome('kayak')); // true
console.log(isPalindrome('php'));   // true
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello')); // false
```

## Files

- [isPalindrome.js](isPalindrome.js) — recursive implementation.
