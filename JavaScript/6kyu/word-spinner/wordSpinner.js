const spinWords = (string) => {
  let singleWordChars = string.split("");

  if (singleWordChars.length >= 5) {
    let reversedWord = singleWordChars.reverse().join("");
    return reversedWord;
  } else {
    return string;
  }
};

module.exports = spinWords;
