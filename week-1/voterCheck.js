let userInput = prompt("Type in your age:");
userInput = Number(userInput);

if (userInput < 18) {
  alert("You are not eligible to vote.")
} else {
  alert("You can go ahead and register.")
}