let url = "https://api.coindesk.com/v1/bpi/currentprice.json";

async function bitPrice() {
  let response = await fetch(url);
  // console.log(await response.json());
  let priceDetails = await response.json();
  return priceDetails.bpi.USD.rate;
};

setInterval(bitPrice, 2000);