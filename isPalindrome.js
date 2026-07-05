function isPalindrome(word) {
  if (word.length <= 1) {
    return true;
  }

  const first = word[0];
  const last = word[word.length - 1];

  if (first !== last) {
    return false;
  }

  return isPalindrome(word.slice(1, -1));
}