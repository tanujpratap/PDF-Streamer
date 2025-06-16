const path=require('path')
const multer=require('multer')
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
cb(null,'uploads/')
    }

    ,
    fileName:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)
    }
}


)
const fileFilter=(req,file,cb)=>{
    if(file.mimetype==='application/pdf')cb(null,true)
        else cb(new Error('only pdfs are allowed',false))
}
module.exports=multer({storage,fileFilter})