import './style.css';
import Swal from 'sweetalert2';

const searchBtnEL = document.getElementById('search-btn');


const applyResults = (data, moeda) => {
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
  const API_KEY = import.meta.env.VITE_API_KEY;
  const inputEL = document.getElementById('coin-input');
  const moeda = inputEL.value.trim().toUpperCase();
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${moeda}`
  
  if (moeda) {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => applyResults(data.conversion_rates, moeda))
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Moeda informada inexistente. Tente novamente!',
        });
      });
  } else {
    console.log('Moeda não informada', moeda);
    Swal.fire({
      icon: 'warning',
      title: 'Atenção',
      text: 'Por favor, insira uma moeda para realizar a busca.',
    });
  }
});