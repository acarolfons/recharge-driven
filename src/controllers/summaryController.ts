import { Request, Response } from 'express';
import * as summaryService from '../services/summaryService';

export async function getSummary(req: Request, res: Response) {
  const { document } = req.params;
  try {
    const summary = await summaryService.getSummaryByDocument(document);
    res.status(200).send(summary);
  } catch (error) {
    if (error.type === 'not_found') return res.status(404).send(error.message);
    res.status(500).send('Internal server error');
  }
}
