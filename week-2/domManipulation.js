document.write("<p>Hello, this is created from Javascript</p>");
document.write("<a href='https://www.google.com'>Go to Google Homepage</a>");
document.write("<img src='fb-logo.png' alt='facebook logo' />");

let sampleElement = document.getElementById('sample');
sampleElement.innerText = "Now we have changed it.";
sampleElement.style.color = 'blue';
sampleElement.style.fontSize = '50px';