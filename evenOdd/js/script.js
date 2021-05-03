function rndNum (min , max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function isEven (num) {
      return (num % 2 == 0);
}

var userNum;
do {
      userNum = parseInt(prompt("Please type a number between 1 and 5 (included)"));
} while (userNum < 1 || userNum > 5)

var pcNum = rndNum(1, 5);
var sum = userNum + pcNum;

if (isEven(sum) == true) {
      console.log("Even!");
} else {
      console.log("Odd!");
}