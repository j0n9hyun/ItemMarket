import express from 'express';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import bcrypt from 'bcrypt';
import { body, validationResult } from 'express-validator';
const router = express.Router();

const saltRounds = 10;
const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

router.post(
  '/register',
  body('password').trim().isLength({ min: 2 }).withMessage('no'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const register = new User();
    const hashed = await bcrypt.hash(req.body.password, saltRounds);
    register.userId = req.body.userId;
    register.name = req.body.name;
    register.password = hashed;
    const userRepository = getRepository(User);
    await userRepository.save(register);
  }
);
router.post('/login', (req, res) => {});
router.get('/logout', (req, res) => {});
router.post('/auth', (req, res) => {});

export default router;
