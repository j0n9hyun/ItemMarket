import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import '../env';

const AUTH_ERROR = { message: 'Authentication Error' };

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.get('Authorization');
  const userRepository = getRepository(User);
  if (!(authHeader && authHeader.startsWith('Bearer '))) {
    return res.status(401).json(AUTH_ERROR);
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.sendStatus(401);
  }
  // let token = req.cookies.token;
  jwt.verify(
    token,
    process.env.TOKEN_SECRET as string,
    async (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json(AUTH_ERROR);
      }
      const user: any = await userRepository.find({ userId: decoded.id });
      if (!user) {
        return res.status(401).json(AUTH_ERROR);
      }
      next();
    }
  );
};
