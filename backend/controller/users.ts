import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import { validationResult } from 'express-validator';
import { User } from '../entity/User';
import jwt from 'jsonwebtoken';
import '../env';

const saltRounds = 10;

export async function register(req: Request, res: Response) {
  const userRepository = getRepository(User);
  const { userId, password, name } = req.body;
  const found = await userRepository.findOne({ userId }); // 아이디 중복 체크
  if (found) {
    return res.sendStatus(409);
  }
  const hashed = await bcrypt.hash(password, saltRounds);
  const user = userRepository.create({
    userId: userId,
    password: hashed,
    name: name,
  });

  await userRepository.save(user);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
}

export async function login(req: Request, res: Response) {
  console.log(req.cookies);
  const userRepository = getRepository(User);
  const { userId, password } = req.body;
  const userInfo: any = await userRepository.findOne({
    userId: userId,
  });
  if (!userInfo) {
    return res.sendStatus(401);
  }

  const match = await bcrypt.compare(password, userInfo.password);

  if (match) {
    const token = jwt.sign(userId, process.env.TOKEN_SECRET as string);
    await userRepository.update({ userId }, { token: token });
    // res.sendStatus(200);
    res
      .cookie('x_auth', token, {
        httpOnly: true,
      })
      .status(200)
      .json({ auth: true });
  } else {
    res.sendStatus(401);
  }

  console.log(req.headers.cookie);

  // jwt.verify(
  //   token,
  //   process.env.TOKEN_SECRET as string,
  //   async function (err: any, decoded: any) {
  //     const findToken = await userRepository.findOne({
  //       userId: decoded,
  //       token: token,
  //     });
  //     if (!findToken || err) console.log('invaild token');
  //   }
  // );
}

export async function logout(req: Request, res: Response) {
  const { userId } = req.body;
  await getRepository(User).update({ userId }, { token: '' });
  res.sendStatus(200);
}
