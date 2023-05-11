import express from 'express';
import verifyToken from '../controller/verifyToken.js';
import { authAdmin, authAllUsers } from '../controller/authController.js';
import { deleteAllUser, deleteUser, getUserDetails, listAllUsers, updateUser } from '../controller/userContoller.js';
const userRouter = express.Router();

// Get: list all users
userRouter.route('/').get(verifyToken, authAdmin, listAllUsers)

userRouter.route('/:id').get(verifyToken, authAllUsers, getUserDetails)
.put( verifyToken, authAdmin, updateUser)
.delete(deleteUser) 

userRouter.put('/delete', verifyToken, authAdmin, deleteAllUser)




export default  userRouter;