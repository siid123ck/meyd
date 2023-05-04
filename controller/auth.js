import asyncHandler from 'express-async-handler';



const  authMaker =asyncHandler((req, res, next)=>{
  if(req.session.maker){
    next();
  } else{
     res.redirect('/auth/login')
  }
})

const  authConsumer =asyncHandler((req, res, next)=>{
  if(req.session.maker){
    next();
  } else{
     res.redirect('/auth/login')
  }
})

const authAllUsers = asyncHandler((req, res, next)=>{
  if(req.session.maker || req.session.consumer || req.session.admin){
    next();
  } else{
     res.redirect('/auth/login')
  }
})

const authAdmin=asyncHandler((req, res, next)=>{
  if(req.session.admin){
    next();
  } else{
     res.json('Only admin has access to this page ')
  }
})


export  {authMaker, authConsumer, authAdmin, authAllUsers};
