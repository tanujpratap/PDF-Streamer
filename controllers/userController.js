const User=require('../models/User')
module.exports.approveUser=async(req,res)=>{
    try{
        const{id}=req.params;
        const user=await User.findByPk(id)
        if(!user)return res.status(404).json({message:'user not found'})
            user.role='approved'
        await user.save()
        res.json({message:'user approved', user:{id:user.id,email:user.email,role:user.role}})
    }
    catch(err){
        res.json({message:err.message})
    }
}