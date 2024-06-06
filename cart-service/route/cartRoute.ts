import express, { Router } from "express";
import { addToCart, createCart } from '../controller/cartController';

const router: Router = express.Router();

router.post('/', createCart); 
router.post('/add',addToCart)
export default router;
