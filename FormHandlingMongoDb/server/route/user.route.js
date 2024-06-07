import express from "express";
import { registerCtrl } from "../controller/user.controller.js";
export const userRoutes = express.Router();

userRoutes.post('/register',registerCtrl)