//Input section
let numbers = []; // Empty array to store numbers.
let userInput; //Collect user input.

while (true){
  userInput = prompt("This program collects numbers and returns the first number.\nType in a number:\nType 'stop' to exit.");
  
  //Exit condition from the infinite loop
  if (userInput == "stop") {
    break;
  }

  //Populate the array
  userInput = Number(userInput);
  numbers.push(userInput);
}

//Function to get the first element of the array.
function firstElementArray(array) {
  return array[0];
}

//Output: Display the first element of the array using the function.
alert(firstElementArray(numbers))