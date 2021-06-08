import { body, validationResult } from 'express-validator';

export function registerValidator(req: any, res: any) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return { ...body('password').trim().isLength({ min: 2 }).withMessage('no') };
}
