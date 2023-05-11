import asyncHandler from 'express-async-handler';
import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register =asyncHandler(async (req, res) => {
  const existingUser = await User.findOne({email:req.body.email}); 
   if(existingUser) {
     return res.json({msg:'User already exist, plz login'}); 
   }
   const user = new User(req.body); 
 
   await user.save();
   res.json({
     status: 'success',
     msg: 'User is registered successfully',
     result: user
   });
 })

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({email});
  if(!user) {
  return res.json({msg:'Invalid maker details'});
  }
   
  const isMatch = await bcrypt.compare(password, user.password); 

  if(!isMatch) {
    return res.json({msg:'Password is not correct'});
  } 
  
    // req.session.maker = maker;
    const accessToken = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET, {
      expiresIn:'5d'
    })
  
  res.json({
    accessToken,
    user,
    msg:'successfully logged in'
  });
}) 

const  authMaker =asyncHandler((req, res, next)=>{
  if(req.user.role==='maker'){
    next();
  } else{
     res.redirect('/auth/login')
  }
})

const  authConsumer =asyncHandler((req, res, next)=>{
  if(req.user.role==='consumer'){
    next();
  } else{
     res.redirect('/auth/login')
  }
})

const authAllUsers = asyncHandler((req, res, next)=>{
  if(req.user){
    next();
  } else{
     res.redirect('/auth/login')
  }
})

const authAdmin=asyncHandler((req, res, next)=>{
  if(req.user.role==='admin'){
    next();
  } else{
     res.json('Only admin has access to this page ')
  }
})


export  {authMaker, authConsumer, authAdmin, authAllUsers};
