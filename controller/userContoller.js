import asyncHandler from 'express-async-handler';
import User from '../models/user.js';

export const listAllUsers =  asyncHandler(async(req, res)=>{
    console.log(req.user) 
     const users = await User.find();
     res.json({
         status:'success',
         result:users,
         msg:'listed all user details'
     });
 })

 export const getUserDetails = asyncHandler(async(req, res)=>{
    const user = await User.findById(req.params.id)
    res.json({user, msg:'listed all user details'})
  })

export const updateUser = asyncHandler(async(req, res)=>{
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      res.json({user:updatedUser, msg:"updated successfully"})
}) 

export const deleteUser = asyncHandler(async(req, res)=>{
    const deletedUser = await User.findByIdAndDelete(req.params.id );

      res.json({user:deletedUser, msg:"updated successfully"})
})

export const deleteAllUser = asyncHandler(async(req, res)=>{
    await User.deleteMany({});
    res.json({msg:'Delete all users'})
  })