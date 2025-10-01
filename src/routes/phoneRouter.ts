import { Router } from 'express';
import { createPhone, getPhonesByDocument } from '../controllers/phoneController';
import { validateSchema } from '../middlewares/validateSchemaMiddleware';
import { phoneSchema } from '../schemas/phoneSchema';

const phonesRouter = Router();

phonesRouter.post('/phones', validateSchema(phoneSchema), createPhone);
phonesRouter.get('/phones/:document', getPhonesByDocument);

export default phonesRouter;
