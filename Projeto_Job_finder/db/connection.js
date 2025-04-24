const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
})

module.exports = sequelize; // Exportando a conexão para ser utilizada em outros arquivos
