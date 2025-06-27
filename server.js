console.log('✅ Starting server.js...');

const express = require('express');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const pdfRoutes=require('./routes/pdfRoutes')
const userRoutes=require('./routes/userRoutes')
require('dotenv').config();

const app = express();
app.use(express.json());

console.log('✅ Middleware and routes being set up...');
app.use('/auth', authRoutes);
app.use('/pdf',pdfRoutes)
app.use('/users', userRoutes);
const PORT = process.env.PORT || 5432;

console.log('✅ Syncing DB...');
db.sequelize.sync({  alter: true })
  .then(() => {
    console.log('✅ DB synced, starting server...');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('❌ Error syncing DB:', err);
  });




