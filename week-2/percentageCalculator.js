/* 
Algorithm of the problem
Take input from user: two integers
Calculate the percentage using a function.
Output the result in the alert box.
*/

//Input section
let userInput = prompt("Input a number:");
userInput = Number(userInput);
let userInput2 = prompt("Input a second number:");
userInput2 = Number(userInput2);

//processing section
function percentage(userInput, userInput2){
  let answer;
  if (userInput < userInput2){
    answer = (userInput / userInput2) * 100;
  } else {
    answer = (userInput2 / userInput) * 100;
  }

  return answer;
}

//output section
alert(percentage(userInput, userInput2) + "%");