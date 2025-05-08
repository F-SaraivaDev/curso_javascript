const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const { Model } = require('sequelize');

//rota de teste
router.get('/test', (req, res) => {
    res.send('Está funcionando 2');
});

//datalhe da vaga
router.get('/view/:id', (req, res) => {
    Job.findOne({
      where: { id: req.params.id }
    })
    .then(job => {
      res.render('view', { job });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao carregar a vaga');
    });
  });


//form da rota de envio
router.get('/add', (req, res) => {
    res.render('add');
});

//add job via post
router.post('/add', (req, res) => {

    let { title, salary, company, description, email, new_job } = req.body;

    //insert
    Job.create({
        title,
        salary,
        company,
        description,
        email,
        new_job
    }).then(() => {
        res.redirect('/');
    }).catch((err) => {
        res.send('Houve um erro: ' + err);
    });

});

module.exports = router; // Exportando o router para ser utilizado em outros arquivos