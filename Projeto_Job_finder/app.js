const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function () {
    console.log(`O Express está rodando na porta ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

// db connection
db.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados realizada com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco de dados:', error);
    });

// routes
app.get('/', (req, res) => {
    res.send('Está funcionando 3');
});

//jobs routes
app.use('/jobs', require('./routes/jobs'));

