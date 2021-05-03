var word = prompt("Please type a word");

function palindrome(choosenWord) {
      for (i = 0; i < choosenWord.length /2; i++) {
            if (choosenWord[i] == choosenWord[choosenWord.length - 1 - i]) {
                  return true;
            } else {
                  return false;
            }
      }
}

if (palindrome(word) == true) {
      console.log("palindrome");
}