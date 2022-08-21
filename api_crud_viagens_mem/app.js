const express = require('express')
const app = express()
const port = 3000

app.get('/viagens', (req, res) => {
    res.send('Listando Viagens!')
  })

app.post('/viagens', (req, res) =>{
    res.send('Cadastrando Viagem!')
})

app.get('/viagens/:id', (req, res) => {
    res.send('Buscando Viagem! '+req.params.id)
  })

app.put('/viagens/:id',(req, res) =>{
    res.send('Atualizando Viagem! '+req.params.id)
})  

app.delete('/viagens/:id',(req, res) =>{
    res.send('Removendo a Viagem! '+req.params.id)
}) 



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})