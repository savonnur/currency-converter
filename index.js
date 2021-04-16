const url = "https://api.ratesapi.io/api/latest?base="

async function convert(){
  var base = document.getElementById('Base').value;
  var out = document.getElementById('Output').value;
  var amount = document.getElementById('Amount').value;
  var finalValue;

  let response = await fetch(`${url}${base}`,{method: 'GET'})
  let data = await response.json()

  finalValue = data.rates

  finalValue = finalValue[out]*Number(amount);
  var result = `${finalValue} ${out}`;
  document.getElementById('Converted').innerText = result;
};