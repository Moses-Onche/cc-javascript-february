let person = document.getElementById('person');
async function profile(){
  let url = 'https://randomuser.me/api/';
  let response = await fetch(url);
  let persona = await response.json();

  console.log(persona.results)

  // console.log(persona.results[0].picture.large)
  person.setAttribute('src', persona.results[0].picture.large)
}

profile()