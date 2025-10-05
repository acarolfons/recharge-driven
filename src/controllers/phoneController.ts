import { NextFunction, Request, Response } from 'express';
import * as phoneService from '../services/phoneService';

export async function createPhone(req: Request, res: Response, next: NextFunction) {
  try{
  const phoneData = req.body;
  const createdPhone = await phoneService.createPhone(phoneData);
  res.status(201).send(createdPhone); 
  }catch(error){
    next(error)
  }
}

export async function getPhonesByDocument(req: Request, res: Response, next: NextFunction) {
  try{
  const { document } = req.params;
  const phones = await phoneService.getPhonesByDocument(document);

  if (!phones || phones.length === 0) {
    return res.status(404).send({ message: 'Phones not found for this document' });
  }
  
  res.send(phones);
  }catch(error){
    next(error)
  }
}
