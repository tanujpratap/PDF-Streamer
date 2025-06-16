const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const allowRoles = require('../middlewares/role');
const userController=require('../controllers/userController')
router.put('/approve/:id', auth, allowRoles(['admin']),userController.approveUser);

module.exports = router;
