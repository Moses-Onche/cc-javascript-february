let userInput = prompt("Type a number:")
userInput = Number(userInput)
let message;

if (userInput % 2 === 0) {
  message = "The number is even.";
} else {
  message = "The number is odd.";
}

alert(message);