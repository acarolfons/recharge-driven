import { Request, Response, NextFunction } from 'express';

export function errorHandlerMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error('🚨 Erro:', err);

  if (err.type === 'conflict') {
    return res.status(409).json({ error: err.message || 'Conflict' });
  }

  if (err.type === 'not_found') {
    return res.status(404).json({ error: err.message || 'Not found' });
  }

  if (err.type === 'unprocessable_entity') {
    return res.status(422).json({ error: err.message || 'Unprocessable entity' });
  }

  return res.status(500).json({ error: 'Internal server error' });
}
