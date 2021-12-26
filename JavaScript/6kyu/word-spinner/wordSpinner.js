const spinWords = (string) => {
  let words = string.split(" ");

  let finalSentence = words.map((word) => {
    let chars = word.split("");
    if (chars.length >= 5) {
      let reversedWord = chars.reverse().join("");
      return reversedWord;
    } else {
      return word;
    }
  });
  return finalSentence.join(" ");
};

module.exports = spinWords;
