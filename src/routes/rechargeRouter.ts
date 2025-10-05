import { Router } from 'express';
import { createRecharge, getRechargesByNumber } from '../controllers/rechargeController';
import { rechargeSchema } from '../schemas/rechargeSchema';
import { validateSchema } from '../middlewares/validateSchemaMiddleware';

const rechargesRouter = Router();

rechargesRouter.post('/recharges', validateSchema(rechargeSchema), createRecharge);
rechargesRouter.get('/recharges/:number', getRechargesByNumber);

export default rechargesRouter;
