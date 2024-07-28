import express from 'express';
import { addProduct, updateProduct } from '../controllers/product.controller.js';
export const productRouter = express.Router();

productRouter.get('/create',addProduct);
productRouter.put('/update/:id',updateProduct);