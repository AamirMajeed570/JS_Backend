import express from 'express';
import { addProduct, updateProduct,getAllProducts, getProduct, deleteproduct } from '../controllers/product.controller.js';
export const productRouter = express.Router();

productRouter.post('/create',addProduct);
productRouter.put('/update/:id',updateProduct);
productRouter.get('/allproducts',getAllProducts);
productRouter.get('/product/:id',getProduct);
productRouter.delete('/product/:id',deleteproduct);