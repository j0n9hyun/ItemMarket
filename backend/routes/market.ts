import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendStatus(200);
});

router.get('/:id', (req, res, next) => {
  res.status(200).send('하이');
});

export default router;
