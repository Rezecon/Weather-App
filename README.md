# Weather App

Aplicação web que exibe as condições climáticas atuais de qualquer cidade do mundo em tempo real, consumindo a API do OpenWeatherMap. Desenvolvida com HTML, CSS e JavaScript puro — sem frameworks ou bibliotecas externas.

---

## Funcionalidades

- Busca o clima de qualquer cidade pelo nome
- Exibe temperatura atual, sensação térmica, mínima e máxima
- Mostra umidade e velocidade do vento
- Descrição da condição (céu limpo, nublado, chuva...)
- Tratamento de erros (cidade não encontrada, falha de rede)
- Layout responsivo — funciona no celular e no desktop
- Busca por clique no botão ou pressionando Enter

---

## Preview

> Digite o nome de uma cidade e veja o clima em tempo real.

```
┌─────────────────────────────┐
│       Piracicaba            │
│           BR                │
│                             │
│          28°C               │
│     céu parcialmente nublado│
│                             │
│  Sensação  Umidade          │
│    27°C      65%            │
│                             │
│  Vento     Mín / Máx        │
│  14 km/h   24° / 31°        │
└─────────────────────────────┘
```

---

## Tecnologias

- **HTML5** — estrutura semântica da página
- **CSS3** — layout responsivo, glassmorphism, gradiente
- **JavaScript (ES6+)** — lógica, consumo de API, manipulação do DOM
- **OpenWeatherMap API** — dados climáticos em tempo real

---

## Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/Rezecon/weather-app.git
cd weather-app
```

### 2. Obtenha uma chave de API gratuita

- Crie uma conta em [openweathermap.org](https://openweathermap.org)
- Acesse **API Keys** no menu do seu perfil
- Copie a chave gerada

### 3. Configure a chave no projeto

Abra o arquivo `script.js` e substitua na linha 2:

```javascript
const API_KEY = 'SUA_CHAVE_AQUI'; // substitua aqui
```

### 4. Abra no navegador

Dê um duplo clique no arquivo `index.html` — não precisa de servidor.

---

## Estrutura do projeto

```
weather-app/
├── index.html   → estrutura da página e elementos HTML
├── style.css    → visual, cores, layout responsivo
├── script.js    → lógica, requisição à API, atualização do DOM
└── README.md    → este arquivo
```

---

## Conceitos aplicados

- **Fetch API** — requisições HTTP assíncronas para a API externa
- **async/await** — controle de fluxo assíncrono de forma legível
- **JSON** — parsing e extração de dados da resposta da API
- **DOM manipulation** — atualização dinâmica da interface sem recarregar a página
- **Tratamento de erros** — respostas HTTP de erro (404) e falhas de rede
- **Event listeners** — resposta a clique e tecla Enter

---

## Autor

**[Seu Nome]** — Estudante de Engenharia de Computação, IFSP Piracicaba  
GitHub: [@Rezecon](https://github.com/Rezecon)
