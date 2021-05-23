const url = "https://api.exchangerate.host/latest?base=" //usage link to get latest foreign exchange rates with base.

async function convert(){ //async function to convert currency from base currency to target currency.
  var base = document.getElementById('Base').value; //sets the value of the base currency selected.
  var out = document.getElementById('Output').value; //sets the value of the target currency selected.
  var amount = document.getElementById('Amount').value; //sets the numerical amount from user input
  var finalValue;

  let response = await fetch(`${url}${base}`) //request for latest foreign exchange rates data on the base currency
  let data = await response.json() //data = json of base currency
  finalValue = data.rates //sets finalValue to equal the rates object in the base object

  finalValue = finalValue[out]*(amount); //finalValue = rates value of target currency multiplied by the amount the user input
  var result = `${finalValue} ${out}`; //variable to hold conversion value
  document.getElementById('Converted').innerText = result; //display conversion
};