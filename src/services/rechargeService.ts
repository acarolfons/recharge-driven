import * as rechargeRepository from '../repositories/rechargeRepository';
import * as phoneRepository from '../repositories/phoneRepository';
import { Recharge } from '../protocols';

export async function createRecharge(data: Recharge) {
  const phone = await phoneRepository.findById(data.phoneId);
  if (!phone) throw { type: 'not_found', message: 'Telefone não encontrado.' };

  const recharge = await rechargeRepository.createRecharge(data);
  return recharge;
}

export async function getRechargesByNumber(number: string) {
  const phone = await phoneRepository.findByNumber(number);
  if (!phone) return [];

  const recharges = await rechargeRepository.findByPhoneId(phone.id!);
  return recharges;
}
