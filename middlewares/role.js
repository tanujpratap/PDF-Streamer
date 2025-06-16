function allowRoles(roles=[]){
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({mesage:'forbidden: admin only'})
        }
        next()
    }
}
module.exports=allowRoles