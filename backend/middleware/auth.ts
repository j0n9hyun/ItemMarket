import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { config } from '../config';
import { User } from '../entity/User';

const AUTH_ERROR = { message: 'Authentication Error' };

export const isAuth = async (req: any, res: Response, next: NextFunction) => {
  let token;
  const authHeader = req.get('Authorization');
  const userRepository = getRepository(User);
  if (!(authHeader && authHeader.startsWith('Bearer '))) {
    token = authHeader.split(' ')[1];
  }
  if (!token) {
    token = req.cookies['token'];
  }

  if (!token) return res.status(401).json(AUTH_ERROR);

  jwt.verify(
    token,
    config.TOKEN_SECRET as string,
    async (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json(AUTH_ERROR);
      }
      const user: any = await userRepository.findOne({ userId: decoded.id });
      if (!user) {
        return res.status(401).json(AUTH_ERROR);
      }
      req.userId = user.userId; // req.customData
      req.name = user.name;
      next();
    }
  );
};
