const express = require('express');
const app = express()
const axios = require('axios')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());


app.get("/", async (req, res) => {
  var dolar = await axios.get('https://api.cotacoes.uol.com/currency/summary?currency=1&fields=id,name,askvalue')
  dolar = dolar['data']['docs'][0]['askvalue']
  res.render("index", {
    value: dolar
  })
})


app.listen(8080,() => {console.log('SERVIDOR NO AR')})
