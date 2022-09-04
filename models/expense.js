//sequelize for datatypes
const Sequelize=require('sequelize');
//db
const sequelize=require('../utils/database');

const expense=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        allowedNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    amount:Sequelize.INTEGER,
    description:Sequelize.STRING,
    category:Sequelize.STRING
});

module.exports=expense;