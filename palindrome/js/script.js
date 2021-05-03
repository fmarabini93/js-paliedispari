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

var result = document.getElementById("pal-word");
if (palindrome(word) == true) {
      result.innerHTML = ("You typed " + "<strong>" + word + "</strong>" + ", which is a palindrome");
} else {
      result.innerHTML = ("You typed " + "<strong>" + word + "</strong>" + ", which is not a palindrome");
}