const spinWords = (string) => {
  let words = string.split(" ");
  let finalSentence = words.map((word) => {
    let singleWordChars = word.split("");
    if (singleWordChars.length >= 5) {
      let reversedWord = singleWordChars.reverse().join("");
      return reversedWord;
    } else {
      return word;
    }
  });
  return finalSentence.join(" ");
};

module.exports = spinWords;
