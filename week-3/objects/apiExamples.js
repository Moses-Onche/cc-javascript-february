(async () => {
  let url = 'https://bible-api.com/john 3:16';
  let response = await fetch(url);
  console.log(response);
  console.log(response.status);
  console.log(await response.json());
})();