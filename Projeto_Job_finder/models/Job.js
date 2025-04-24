const Sequelize = require('sequelize');
const db = require('../db/connection');

const Job = db.define('Job', {
    title: {
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTEGER,
    }
});

module.exports = Job; // Exportando o modelo Job para ser utilizado em outros arquivos
