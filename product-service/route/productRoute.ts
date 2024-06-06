import express, { Router } from "express";
import { createProduct, getProducts } from '../controller/productcontroller';

const router: Router = express.Router();

router.post('/', createProduct); 
router.get('/details',getProducts)

export default router;
