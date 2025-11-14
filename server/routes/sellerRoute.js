import { Router } from 'express'
import { isAuth, logout, sellerLogin } from '../controllers/sellerController.js';
import authSeller from '../middlewares/authSeller.js';

const sellerRouter = Router();

sellerRouter.post('/login',sellerLogin)
sellerRouter.get('/is-auth',authSeller,isAuth)
sellerRouter.get('/logout',logout)

export default sellerRouter