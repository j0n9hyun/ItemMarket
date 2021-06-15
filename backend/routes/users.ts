import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import * as authController from '../controller/users';
import { isAuth } from '../middleware/auth';
// import * as validator from '../middleware/validator';

const router = express.Router();

const registerValidator = [
  body('password').trim().isLength({ min: 2 }).withMessage('no'),
];

const loginValidator = [...registerValidator];

router.post('/register', registerValidator, authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/me', isAuth, authController.me);

export default router;
