import express from 'express';
import * as marketController from '../controller/market';
import { isAuth } from '../middleware/auth';
const router = express.Router();

router.get('/', marketController.getMarket);
router.post('/', isAuth, marketController.createMarket);
router.get('/:id', (req, res, next) => {
  res.status(200).send('하이');
});

router.post('/:id', (req, res, next) => {});

router.put('/:id', (req, res, next) => {});

router.delete('/:id', (req, res, next) => {});

export default router;
