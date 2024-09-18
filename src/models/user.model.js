const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/postgresql.config')

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    },
    {
        tableName: 'users',
        timestamps: false
    }
)

module.exports = User