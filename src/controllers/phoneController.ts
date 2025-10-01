import { Request, Response } from 'express';
import * as phoneService from '../services/phoneService';

export async function createPhone(req: Request, res: Response) {
  const phoneData = req.body;
  const createdPhone = await phoneService.createPhone(phoneData);
  res.status(201).send(createdPhone); 
}

export async function getPhonesByDocument(req: Request, res: Response) {
  const { document } = req.params;
  const phones = await phoneService.getPhonesByDocument(document);
  res.send(phones);
}
