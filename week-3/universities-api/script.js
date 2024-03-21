(async () => {
  // Get information from universties api
  let url = "http://universities.hipolabs.com/search?country=Nigeria";
  let response = await fetch(url);
  let uniList = await response.json();
  
  // Test api json output
  // console.log(uniList[5]);
  // console.log(uniList[5].domains[0]);

  // Target corresponding HTML elements
  let cardBox = document.getElementById('card');
  let schoolName = cardBox.children[0];
  let officialSite = cardBox.children[1];
  let userInput = document.forms['school-search']['input'].value;
  console.log(userInput);
  let button = document.getElementById('button');


  //Add API information to HTML elements
  let index = 7;
  schoolName.innerHTML += " " + uniList[index].name
  let hyperLink = officialSite.children[0];
  hyperLink.setAttribute("href", `${"https://" + uniList[index].domains[0]}`)
  hyperLink.innerHTML = uniList[index].domains[0];
})();