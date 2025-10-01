import { Request, Response } from 'express';
import * as rechargeService from '../services/rechargeService';

export async function createRecharge(req: Request, res: Response) {
  const rechargeData = req.body;
  const createdRecharge = await rechargeService.createRecharge(rechargeData);
  res.status(201).send(createdRecharge);
}

export async function getRechargesByNumber(req: Request, res: Response) {
  const { number } = req.params;
  const recharges = await rechargeService.getRechargesByNumber(number);
  res.send(recharges);
}
