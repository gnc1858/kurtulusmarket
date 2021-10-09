import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'


//@desc Auth User

const authUser=asyncHandler(async(req,res)=>{
 const {email,password}=req.body

 const user= await User.findOne({email})
  if(user && (await user.matchPassword(password)) ){
 
   res.json({
    name:user.name,
    isAdmin:user.isAdmin,
   })
}

else{
 res.status(401)
 throw new Error('Password or email is invalid')
}

 
})


  




export {
 authUser,
}




