import * as phoneRepository from '../repositories/phoneRepository';
import { Phone } from '../protocols';

export async function createPhone(data: Phone & { document: string }) {
  const phoneExists = await phoneRepository.findByNumber(data.number);
  if (phoneExists) throw { type: 'conflict', message: 'Número já cadastrado.' };

  let client = await phoneRepository.findClientByDocument(data.document);
  if (!client) {
    client = await phoneRepository.createClient(data.document);
  }

  const phones = await phoneRepository.findPhonesByClientId(client.id!);
  if (phones.length >= 3) {
    throw { type: 'conflict', message: 'Limite de 3 telefones atingido.' };
  }

  const createdPhone = await phoneRepository.createPhone({
    number: data.number,
    name: data.name,
    description: data.description,
    carrierId: data.carrierId,
    clientId: client.id!
  });

  return createdPhone;
}

export async function getPhonesByDocument(document: string) {
  const client = await phoneRepository.findClientByDocument(document);
  if (!client) throw {
    type: 'not_found',
    message: `Cliente com documento ${document} não encontrado`
  };

  const phones = await phoneRepository.findPhonesByClientId(client.id!);
  return phones;
}
