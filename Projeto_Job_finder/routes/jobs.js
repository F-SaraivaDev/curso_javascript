const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const { Model } = require('sequelize');

router.get('/test', (req, res) => {
    res.send('Está funcionando 2');
});

//add job via post
router.post('/add', (req, res) => {
    
    let {title, salary, company, description, email, new_job} = req.body;

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