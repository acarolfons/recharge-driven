import Joi, { ObjectSchema } from 'joi';
import { Phone } from '../protocols';

export const phoneSchema: ObjectSchema<Phone> = Joi.object({
  number: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  carrierId: Joi.number().integer().required(),
  document: Joi.string().length(11).pattern(/^[0-9]+$/).required()
});
