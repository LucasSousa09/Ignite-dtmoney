import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from "miragejs"

import { App } from './App';

createServer({
  //0.1 Definindo o Banco de Dados
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de Website",
          type: "deposit",
          category: "Dev",
          amount: 2000,
          createdAt: new Date('2021-02-21 09:00:00')
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 600,
          createdAt: new Date('2021-01-17 13:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      //0.3 Retornando as informações do Banco de Dados
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      //0.2 Salvando no Banco de Dados
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
