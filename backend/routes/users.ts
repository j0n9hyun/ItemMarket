import express from 'express';
const router = express.Router();

router.get('/register', (req, res, next) => {
  res.sendStatus(200);
});

export default router;
