// Feito apenas a parte 1 do teste, parte 2 não tive tempo/conhecimento
// o suficiente para fazer

const express = require('express');
// uso da biblioteca express
const bodyParser = require('body-parser');
// uso da biblioteca body parser
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);

const bodies = []

const INTERVAL = 6000000

app.post("/v1/users", (req, res) => {
  // se o corpo da request estiver vazio retorna status 400 = Bad Request
  if (!req.body) return res.status(400).end()
  
  // transforma o objeto da request em string para salvar e comparar
  const body = JSON.stringify(req.body)

  // pega o timestamp do momento da request
  const now = (new Date()).getTime()
  
  // busca na lista de request realizadas se o corpo da requesicao existe.
  // se existir retorna o index da posicao no array
  const index = bodies.findIndex(b => b.body == body)

  // se o index for -1 é pq não encontrou então o corpo nao existe
  if (index < 0) { // -1 < 0
    // salva o corpo da request na lista junto com o timestamp
    bodies.push({timestamp: now, body })
    return res.status(200).end()
  }
  // se encontrou

  // calcula para ver se o tempo da request é menor que o intervalo proposto
  // se for retorna status 403 Forbiden
  if ((now - bodies[index].timestamp) <= INTERVAL) {
    return res.status(403).end()
  } 
  
  // caso o corpo já foi recebido depois do tempo minimo, remove da lista
  bodies.splice(index, 1)

  // retorna status 200 
  return res.status(200).end()  
})

app.listen(3000);