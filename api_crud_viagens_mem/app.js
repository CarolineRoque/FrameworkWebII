const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/viagens', (req, res) => {
    res.send('Listando Viagens!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
