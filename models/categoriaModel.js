const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const categoria = sequelize.define('categoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false 
    },
    name: {
        type: DataTypes.STRING(255)
    }
},

    {
        timestamps: false,
        tableName: 'category'
    });

module.exports = categoria;