import express from 'express';
import * as marketController from '../controller/market';
const router = express.Router();

router.get('/', marketController.getMarket);
router.post('/', marketController.createMarket);

// router.get('/test', (req, res, next) => {
//   res
//   .cookie('x_auth', '123', {
//     httpOnly: true,
//   })
//   .status(200)
//   .json({ auth: true });
// })

router.get('/:id', (req, res, next) => {
  res.status(200).send('하이');
});

router.post('/:id', (req, res, next) => {});

router.put('/:id', (req, res, next) => {});

router.delete('/:id', (req, res, next) => {});

export default router;
