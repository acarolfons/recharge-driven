import db from '../database';
import { Phone, Client } from '../protocols';

export async function findByNumber(number: string) {
    const result = await db.query('SELECT * FROM phones WHERE number = $1', [number]);
    return result.rows[0];
}

export async function findClientByDocument(document: string) {
    const result = await db.query('SELECT * FROM clients WHERE document = $1', [document]);
    return result.rows[0];
}

export async function createClient(document: string): Promise<Client> {
    const result = await db.query(
        'INSERT INTO clients (document) VALUES ($1) RETURNING *',
        [document]
    );
    return result.rows[0];
}

export async function findPhonesByClientId(clientId: number): Promise<Phone[]> {
    const result = await db.query('SELECT * FROM phones WHERE client_id = $1', [clientId]);
    return result.rows;
}

export async function createPhone(phone: Phone): Promise<Phone> {
    const result = await db.query(
        `
    INSERT INTO phones (number, name, description, carrier_id, client_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `,
        [phone.number, phone.name, phone.description, phone.carrierId, phone.clientId]
    );
    return result.rows[0];
}

export async function findById(id: number) {
    const result = await db.query('SELECT * FROM phones WHERE id = $1', [id]);
    return result.rows[0];
}

