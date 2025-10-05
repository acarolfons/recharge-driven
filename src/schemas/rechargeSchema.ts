import Joi, { ObjectSchema } from 'joi';
import { Recharge } from 'protocols';

export const rechargeSchema: ObjectSchema<Recharge> = Joi.object({
    phoneId: Joi.number().required().strict(),
    amount: Joi.number().min(10).max(1000).required()
});
