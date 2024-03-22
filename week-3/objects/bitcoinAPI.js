let url = "https://api.coindesk.com/v1/bpi/currentprice.json";

async function bitPrice() {
  let response = await fetch(url);
  
  let priceDetails = await response.json();
  let actualPrice = priceDetails.bpi.USD.rate;
  let dollarSymbol = priceDetails.bpi.USD.symbol;

  document.getElementById('price').innerHTML = dollarSymbol + actualPrice;
};

setInterval(bitPrice(), 1000);