import express from 'express';
import { body, validationResult } from 'express-validator';
import * as authController from '../controller/users';
// import * as validator from '../middleware/validator';

const router = express.Router();

router.post(
  '/register',
  body('password').trim().isLength({ min: 2 }).withMessage('no'),
  authController.register
);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/auth', (req, res) => {});

export default router;
