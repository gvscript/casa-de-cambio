import './style.css';

const searchBtnEL = document.getElementById('search-btn');
const inputEL = document.getElementById('coin-input');
const API_KEY = import.meta.env.VITE_API_KEY;
const moeda = 'USD';
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${moeda}`

const applyResults = (data) => {
  console.log('Dados recebidos da API:', data);
  const resultsEl = Object.entries(data).map(([key, value]) => {
    return(`<div class="result-item">
      <div class="result-icon">
        <span class="icon-symbol">$</span>
      </div>
      <div class="result-details">
        <span class="result-code">${key}</span>
        <span class="result-value">${value.toFixed(2)}</span>
      </div>
    </div>`)
  }).join('');
  const resultPlaceholderEL = document.getElementById('result-placeholder');
  resultPlaceholderEL.innerText = `Valores referente a 1 ${moeda}`;
  resultPlaceholderEL.classList.remove('result-placeholder');
  resultPlaceholderEL.classList.add('result-placeholder--actived');
  
  const resultsContainerEL = document.getElementById('result-content');
  resultsContainerEL.innerHTML = resultsEl;
};

searchBtnEL.addEventListener('click', () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => applyResults(data.conversion_rates))
    .catch((error) => console.error(error));


  // console.log('Olá, mundo!');
  // console.log(searchBtnEL)
  // console.log(inputEL)
  // console.log(API_KEY);
  // console.log(API_URL);

});