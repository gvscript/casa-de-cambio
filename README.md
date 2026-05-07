# 💱 Casa de Câmbio

Aplicação web desenvolvida para realizar conversão de moedas em tempo real utilizando a API da ExchangeRate API.  
O projeto permite pesquisar uma moeda base e visualizar a cotação dela em relação às demais moedas disponíveis.

---

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ESModules)
- Vite
- NPM
- SweetAlert2
- ExchangeRate API

---

## 📋 Funcionalidades

- Buscar cotações de moedas em tempo real
- Listar todas as moedas retornadas pela API
- Estrutura HTML semântica
- Tratamento de erros com SweetAlert2
- Uso de variáveis de ambiente com `.env`
- Ambiente moderno utilizando Vite

---

## 📦 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone git@github.com:gvscript/casa-de-cambio.git
```

---

### 2. Acesse a pasta do projeto

```bash
cd casa-de-cambio
```

---

### 3. Instale as dependências

```bash
npm install
```

---

### 4. Configure a variável de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_KEY=sua_api_key
```

Você pode obter gratuitamente sua chave em:

```txt
https://www.exchangerate-api.com/
```

---

### 5. Execute o projeto

```bash
npm run dev
```

O Vite irá disponibilizar a aplicação localmente no navegador.

---

## 🔗 Endpoint Utilizado

```txt
https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${moeda}
```

Exemplo:

```txt
https://v6.exchangerate-api.com/v6/SUA_API_KEY/latest/USD
```

---

## ⚠️ Tratamento de Erros

A aplicação utiliza o SweetAlert2 para exibir mensagens amigáveis ao usuário nos seguintes cenários:

- Nenhuma moeda informada
- Moeda inexistente ou inválida
- Falha na requisição da API

---

## 🧱 Estrutura do Projeto

```bash
📦 casa-de-cambio
 ┣ 📂 src
 ┃ ┣ 📂 assets
 ┃ ┣ 📂 styles
 ┃ ┣ 📜 main.js
 ┃ ┗ 📜 api.js
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┣ 📜 vite.config.js
 ┣ 📜 .env
 ┗ 📜 README.md
```

---

## 📚 Conceitos Aplicados

- Manipulação de DOM
- Consumo de API REST
- Programação assíncrona com `then/catch`
- Modularização com ESModules
- Variáveis de ambiente
- Boas práticas de estruturação de projeto

---

## ✅ Requisitos Atendidos

- [x] Projeto iniciado com NPM
- [x] Configuração ESModules
- [x] Utilização do Vite
- [x] HTML semântico
- [x] Integração com API de câmbio
- [x] Listagem das moedas
- [x] Tratamento de erros com SweetAlert2
- [x] Uso de `.env` para API Key

---

## 👨‍💻 Autor

Desenvolvido por Gabriel Viana 🚀
