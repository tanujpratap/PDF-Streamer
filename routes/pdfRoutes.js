const express=require('express')
const router=express.Router()
const pdfController=require('../controllers/pdfController')
const streamPDF=require('../controllers/pdfController')
const listPDF=require('../controllers/pdfController')
const auth=require('../middlewares/auth')
const allowRoles=require('../middlewares/role')
const upload=require('../middlewares/multer')
router.post('/upload',auth,allowRoles(['admin']),upload.single('pdf'),pdfController.uploadPDF)
router.get('/stream/:id',auth,allowRoles(['admin','approved']),pdfController.streamPDF)
router.get('/list',pdfController.listPDF)
router.get('/download/:id',auth,pdfController.downloadPDF)
router.get('/stats/:id',auth,pdfController.getPDFStats)
router.get('/translated/:id',pdfController.getPDFtranslated)
module.exports=router