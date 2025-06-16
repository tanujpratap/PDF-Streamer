const sequelize = require('../config/db');
const User = require('./User');
const PDF=require('../models/PDF')

const db = {
  sequelize,
  User
};
db.PDF=PDF
module.exports = db;
