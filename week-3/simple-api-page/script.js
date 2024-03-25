// Save the API url in a variable
let url = 'https://www.boredapi.com/api/activity';

// Write an asynchronous function to get a response
async function activity(){
  let response = await fetch(url);
  let activityObject = await response.json();

  // Save HTML elements into variables
  let activityElement = document.getElementById('display');

  // Extract the information from json and write it to HTML
  activityElement.innerHTML = activityObject.activity
};

activity();