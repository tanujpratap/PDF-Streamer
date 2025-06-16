const DataTypes=require('sequelize')
const sequelize=require('../config/db')
const User=require('../models/User')
const PDF=sequelize.define('PDF',{
    title:{
type:DataTypes.STRING,
allowNull:false
    },
    descryption:DataTypes.TEXT,
    file_path:{
type:DataTypes.STRING,
allowNull:false
    },
    language:{
type:DataTypes.STRING,
allowNull:false
    },
    uploaded_by:{
type:DataTypes.INTEGER,
allowNull:false
    }, file_path: { type: DataTypes.STRING, allowNull: false }

})
module.exports=PDF