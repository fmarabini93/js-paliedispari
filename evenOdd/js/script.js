function rndNum (min , max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function isEven (num) {
      return (num % 2 == 0);
}

var choice;
do {
      choice = prompt ("Choose between 'even' and 'odd'");
} while (choice !== "even" && choice !== "odd")

var userNum;
do {
      userNum = parseInt(prompt("Please type a number between 1 and 5 (included)"));
} while (isNaN(userNum) == true || userNum < 1 || userNum > 5)

var pcNum = rndNum(1, 5);
var sum = userNum + pcNum;
var result;
var response;

if (isEven(sum) == true) {
      result = "even";
} else {
      result = "odd";
}
if (choice === result) {
      response = "You won!";
} else {
      response = "You lost!";
}

document.getElementById("result").innerHTML = "Your number is " + userNum + " , PC number is " + pcNum + " , so the sum is " + sum + " and the result is " + result + ". " + response;