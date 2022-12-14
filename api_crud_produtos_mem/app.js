const express = require('express')
const app = express()
const port = 3000



app.get('/produtos', (req, res) => {
    res.send('Listando Produtos!')
  })

app.post('/produtos', (req, res) =>{
    res.send('Cadastrando Produtos!')
})

app.get('/produtos/:id', (req, res) => {
    res.send('Buscando Produto! '+req.params.id)
  })

app.put('/produtos/:id',(req, res) =>{
    res.send('Atualizando Produto! '+req.params.id)
})  

app.delete('/produtos/:id',(req, res) =>{
    res.send('Removendo o Produto! '+req.params.id)
}) 



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
