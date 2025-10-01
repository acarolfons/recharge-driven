import db from '../database';
import { Phone, Recharge } from '../protocols';

export async function findClientByDocument(document: string) {
  const result = await db.query('SELECT * FROM clients WHERE document = $1', [document]);
  return result.rows[0];
}

export async function findPhonesWithCarrierByClientId(clientId: number) {
  const result = await db.query(
    `
    SELECT p.*, c.id as carrier_id, c.name as carrier_name, c.code as carrier_code
    FROM phones p
    JOIN carriers c ON p.carrier_id = c.id
    WHERE p.client_id = $1
    `,
    [clientId]
  );
  return result.rows;
}

export async function findRechargesByPhoneId(phoneId: number) {
  const result = await db.query(
    `SELECT * FROM recharges WHERE phone_id = $1 ORDER BY created_at DESC`,
    [phoneId]
  );
  return result.rows;
}
