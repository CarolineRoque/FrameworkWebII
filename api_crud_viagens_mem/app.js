const express = require('express')
const mongoose = require('mongoose')
const rotaViagem = require('./rotas/viagem_rotas')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configuração da conexão com o mongo
mongoose.connect('mongodb://127.0.0.1:27017/app_viagens')
  .then(() => {
    console.log("Conectado ao Mongo..");
  }).catch((error) => {
     console.log("Error>", error)
  });

app.use('/api/viagens', rotaViagem);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
