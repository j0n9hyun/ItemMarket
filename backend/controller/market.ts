import { Response, Request } from 'express';
import { validationResult } from 'express-validator';
import { getRepository } from 'typeorm';
import { Market } from '../entity/Market';

export async function getMarket(req: Request, res: Response) {
  const marketRepository = getRepository(Market);
  const user = await marketRepository.find();
  res.status(200).json(user);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
}
export async function createMarket(req: Request, res: Response) {
  const marketRepository = getRepository(Market);
  const { userId, title, content, price, url } = req.body;
  const user = marketRepository.create({
    userId: userId,
    title: title,
    content: content,
    price: price,
    url: url,
  });

  await marketRepository.save(user);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.sendStatus(201);
}
