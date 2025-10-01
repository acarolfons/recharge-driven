import { Router } from 'express';
import phonesRouter from '../routes/phoneRouter';
import rechargesRouter from '../routes/rechargeRouter';
import summaryRouter from './summaryRouter';

const router = Router();
router.use(phonesRouter);
router.use(rechargesRouter);
router.use(summaryRouter);

export default router;
