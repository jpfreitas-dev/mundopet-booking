# Mundo Pet Booking

Aplicação web para agendamento de atendimentos em um pet shop. O projeto permite visualizar os agendamentos do dia, criar novos horários, cancelar atendimentos e controlar a disponibilidade dos períodos com base na data selecionada.

## Descrição

O sistema organiza agendamentos em uma interface simples e responsiva. O usuário pode:

- visualizar os atendimentos já cadastrados;
- criar novos agendamentos com nome do tutor, nome do pet, telefone, descrição do serviço, data e horário;
- cancelar agendamentos;
- consultar horários disponíveis de acordo com a data escolhida;
- usar uma experiência de formulário com máscara de telefone e validações básicas.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Webpack
- Babel
- Day.js
- JSON Server

## Metodologias e abordagens utilizadas

- Organização do código em módulos, separando responsabilidades por funcionalidade.
- Consumo de API local com `fetch`.
- Mock de backend com `json-server` e arquivo `server.json`.
- Componentização da interface em seções reutilizáveis.
- Validação simples de formulário no lado do cliente.
- Manipulação direta do DOM para renderização dos agendamentos e estados do formulário.
- Separação entre lógica de serviço, interface e utilitários.

## Estrutura de pastas

```text
mundopet-booking/
├── index.html
├── package.json
├── server.json
├── webpack.config.js
├── README.md
└── src/
    ├── assets/
    ├── libs/
    │   └── dayjs.js
    ├── main.js
    ├── modules/
    │   ├── page-load.js
    │   ├── form/
    │   │   ├── data-change.js
    │   │   ├── hours-load.js
    │   │   ├── modal.js
    │   │   └── submit.js
    │   └── schedules/
    │       ├── cancel.js
    │       ├── load.js
    │       └── show.js
    ├── services/
    │   ├── api-config.js
    │   ├── schedule-cancel.js
    │   ├── schedule-fetch-by-day.js
    │   └── schedule-new.js
    ├── styles/
    │   ├── global.css
    │   ├── logo.css
    │   ├── modal.css
    │   ├── new-schedule.css
    │   └── schedules.css
    └── utils/
        └── opening-hours.js
```

## Como instalar

Antes de executar, instale as dependências:

```bash
npm install
```

## Como executar

O projeto usa dois processos: o frontend com Webpack e o backend falso com JSON Server.

### 1. Subir a API local

```bash
npm run server
```

Esse comando inicia o `json-server` usando o arquivo `server.json` na porta `3333`.

### 2. Subir a aplicação web

```bash
npm run dev
```

O Webpack Dev Server inicia a aplicação na porta `3000` e abre o navegador automaticamente.

## Como gerar build

Para criar a versão de produção/compilada:

```bash
npm run build
```

## Observações

- O arquivo `server.json` guarda os agendamentos usados pelo `json-server`.
- A aplicação espera a API local rodando em `http://localhost:3333`.
- A interface foi organizada responsivamente para funcionar bem em telas menores e maiores.