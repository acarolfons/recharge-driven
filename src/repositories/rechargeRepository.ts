import db from '../database';
import { Recharge } from '../protocols';

export async function createRecharge(data: Recharge): Promise<Recharge> {
  const result = await db.query(
    `
    INSERT INTO recharges (phone_id, amount)
    VALUES ($1, $2)
    RETURNING *
    `,
    [data.phoneId, data.amount]
  );
  return result.rows[0];
}

export async function findByPhoneId(phoneId: number): Promise<Recharge[]> {
  const result = await db.query(
    `SELECT * FROM recharges WHERE phone_id = $1 ORDER BY created_at DESC`,
    [phoneId]
  );
  return result.rows;
}
