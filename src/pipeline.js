import { C } from './constants.js';
import { todayStr, makeId, sum } from './utils.js';

export const ContextInventory = { state: { barang: [], stok_log: [] } };
export const ContextSales = { state: { pelanggan: [], konsinyasi: [], pembayaran: [] } };
export const ContextFinance = { state: { kas: [], saldo_log: [] } };

function processReturns(payload) {
  const { returMap } = payload;
  const { konsinyasi, barang, stok_log } = ContextInventory.state;
  // ... (sama seperti sebelumnya, tidak saya tulis ulang agar singkat)
  return payload;
}

function createNewConsignment(payload) {
  const { pelangganId, items } = payload;
  // ... logic
  return payload;
}

function processPayment(payload) {
  const { pelangganId, bayar, gunakanSaldo, bayarSekarang, simpanSaldo, totalTagihan } = payload;
  // ... logic
  return payload;
}

export function MainPipeline(payload) {
  let result = processReturns(payload);
  result = createNewConsignment(result);
  result = processPayment(result);
  return result;
}
