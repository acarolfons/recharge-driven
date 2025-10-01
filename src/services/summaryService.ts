import * as summaryRepository from '../repositories/summaryRepository';

export async function getSummaryByDocument(document: string) {
  const client = await summaryRepository.findClientByDocument(document);
  if (!client) throw { type: 'not_found', message: 'Cliente não encontrado.' };

  const phonesRaw = await summaryRepository.findPhonesWithCarrierByClientId(client.id);

  const phones = await Promise.all(
    phonesRaw.map(async (phone) => {
      const recharges = await summaryRepository.findRechargesByPhoneId(phone.id);
      
      const carrier = {
        id: phone.carrier_id,
        name: phone.carrier_name,
        code: phone.carrier_code,
      };

      const { carrier_id, carrier_name, carrier_code, ...phoneData } = phone;

      return {
        ...phoneData,
        carrier,
        recharges,
      };
    })
  );

  return {
    document: client.document,
    phones,
  };
}
