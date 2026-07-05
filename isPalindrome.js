/**
 * Recursively checks whether a word is a palindrome.
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome(word) {
  // Base case: empty or single-character strings are always palindromes.
  if (word.length <= 1) {
    return true;
  }

  const first = word[0];
  const last = word[word.length - 1];

  if (first !== last) {
    return false;
  }

  // Recurse on the word stripped of its two outer characters.
  return isPalindrome(word.slice(1, -1));
}