const PDF=require('../models/PDF')
const fs=require('fs')
const path=require('path')
module.exports.uploadPDF=async(req,res)=>{

try{
const{title ,descryption,language}=req.body;
const file_path=req.file.path;
const pdf=await PDF.create({
    title,
    descryption,
    language,
    file_path,
    uploaded_by:req.user.id

})
res.status(201).json({message:'pdf uploaded successfully',pdf})
}
catch(err){
res.status(500).json({message:err.message})
}

}
module.exports.streamPDF=async(req,res)=>{
    const pdfId=req.params.id;
    userRole=req.user.role;
    if(!['admin','approved'].includes(userRole)){
        return res.status(403).json({message:"Access denied, not approved"})
    }
    const pdf=await PDF.findByPk(pdfId)
if(!pdf) return res.status(404).json({message:'pdf not found'})
    const filePath=path.join('__dirname','..',pdf.file_path)
const stat=fs.statSync(filePath)
const fileSize=stat.size
const range=req.headers.range
if(range){
   const parts= range.replace(/bytes=/,"").split("-")
   const start=parseInt(parts[0],10)
const end=parts[1]?parseInt(parts[1],10):fileSize-1
const chunkSize=end-start+1
const file=fs.createReadStream(filePath,{start,end})
const headers={
    'Content-Range':`bytes${start}-${end}/${fileSize}`,
    'Accept-Ranges':'bytes',
    'Content-Length':chunkSize,
    'Content-Type':'aplication/pdf'
}
res.writeHead(206,headers)
file.pipe(res)
}
else{
    const headers={
        'Content-Length':fileSize,
         'Content-Type':'aplication/pdf'
    }
    res.writeHead(200,headers)
    fs.createReadStream(filePath).pipe(res)
}
}