import { NextFunction, Request, response, Response } from 'express';
import bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import { validationResult } from 'express-validator';
import { User } from '../entity/User';
import jwt from 'jsonwebtoken';
import { config } from '../config';

const saltRounds = 10;
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

export async function register(req: Request, res: Response) {
  const userRepository = getRepository(User);
  const { userId, password, name } = req.body;
  const found = await userRepository.findOne({ userId }); // 아이디 중복 체크
  if (found) {
    return res.sendStatus(409);
  }
  const hashed = await bcrypt.hash(password, saltRounds);
  const user: any = userRepository.create({
    userId: userId,
    password: hashed,
    name: name,
  });

  await userRepository.save(user);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const token = createJwtToken(user);
  res.status(200).json({ userId, token });
}

export async function login(req: Request, res: Response) {
  const userRepository = getRepository(User);
  const { userId, password } = req.body;
  const user: any = await userRepository.findOne({
    userId,
  });

  if (!user) {
    return res.sendStatus(401);
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(401).json({ message: 'Invalid Id or pw' });
  }

  const token = createJwtToken(user.userId);

  if (token) {
    await userRepository.update({ userId }, { token: token });
    setToken(token, res);
    return res.status(200).json({ isAuth: true, userId, token });
  }
}

async function setToken(token: any, res: any) {
  res.cookie('authToken', token, {
    expires: new Date(Date.now() + KR_TIME_DIFF + 150000),
    httpOnly: true,
    secure: true,
  });
}

export async function logout(req: Request, res: Response) {
  const { userId } = req.body;
  await getRepository(User).update({ userId: userId }, { token: '' });
  return res.sendStatus(200);
}

function createJwtToken(id: string) {
  return jwt.sign({ id }, config.TOKEN_SECRET as string, {
    expiresIn: '3d',
  });
}

export async function me(req: any, res: any) {
  const user = await getRepository(User).findOne({ userId: req.userId });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json({ isAuth: true, userId: req.userId, name: req.name });
}
