const express=require('express')
const router=express.Router()
const pdfController=require('../controllers/pdfController')
const streamPDF=require('../controllers/pdfController')
const auth=require('../middlewares/auth')
const allowRoles=require('../middlewares/role')
const upload=require('../middlewares/multer')
router.post('/upload',auth,allowRoles(['admin']),upload.single('pdf'),pdfController.uploadPDF)
router.get('/stream/:id',auth,allowRoles(['admin']),pdfController.streamPDF)

module.exports=router