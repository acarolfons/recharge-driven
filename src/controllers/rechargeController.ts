import { Request, Response, NextFunction } from 'express';
import * as rechargeService from '../services/rechargeService';

export async function createRecharge(req: Request, res: Response, next: NextFunction) {
  try{
  const rechargeData = req.body;
  const createdRecharge = await rechargeService.createRecharge(rechargeData);
  res.status(201).send(createdRecharge);
  }catch(error){
    next(error);
  }
}

export async function getRechargesByNumber(req: Request, res: Response, next: NextFunction) {
  try{
  const { number } = req.params;
  const recharges = await rechargeService.getRechargesByNumber(number);

  if (!recharges || recharges.length === 0) {
    return res.status(404).send({ message: 'Recharges not found for this number' });
  }
  
  res.send(recharges);
  }catch(error){
    next(error)
  }
}
