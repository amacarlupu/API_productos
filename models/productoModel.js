const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Categoria = require('./categoriaModel');

const producto = sequelize.define('producto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255)
    },
    url_image: {
        type: DataTypes.STRING(255)
    },
    price: {
        type: DataTypes.FLOAT
    },
    discount: {
        type: DataTypes.INTEGER
    },
    category: {
        type: DataTypes.INTEGER,
        references: {
            model: Categoria,
            key: 'id'
        }
    }
},

    {
        timestamps: false,
        tableName: 'product'
    });


producto.belongsTo(Categoria, { foreignKey: 'category' });

module.exports = producto;