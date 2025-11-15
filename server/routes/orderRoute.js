import { Router } from 'express'
import authUser from '../middlewares/authUser.js';
import { getAllOrders, getUserOrders, placeOrderCOD, placeOrderStrip } from '../controllers/orderController.js';
import authSeller from '../middlewares/authSeller.js';
const orderRouter = Router();

orderRouter.post('/cod',authUser,placeOrderCOD)
orderRouter.get('/user',authUser,getUserOrders)
orderRouter.get('/seller',authSeller,getAllOrders)
orderRouter.post('/stripe',authUser,placeOrderStrip)

export default orderRouter;