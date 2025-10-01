import Joi from 'joi';

export const rechargeSchema = Joi.object({
    phoneId: Joi.number().required().strict(),
    amount: Joi.number().min(10).max(1000).required()
});
