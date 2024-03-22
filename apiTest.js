let url = 'https://catfact.ninja/fact';

(async () => {
  let response = await fetch(url);
  let catInfo = await response.json();

  console.log(catInfo.fact);
})();