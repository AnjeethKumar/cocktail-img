import { Router } from 'express';
import AuthController from '../controllers/authController';

const router = Router();
const authController = new AuthController();

export const setRoutes = () => {
    router.post('/register', authController.register);
    router.post('/login', authController.login);
    return router;
};