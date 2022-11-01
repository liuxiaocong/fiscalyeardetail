import { remoteMethodCall } from '@/services/frappe/rpc';
import type {
  AccountBalance,
  GetAccountBalancesRequest,
  GetBankAccountRequest,
  GetBankReconciliationLinkedPaymentsRequest,
  BankReconciliationReconcileVouchersRequest,
  BankTransaction,
  BaseDocument,
  BankReconciliationReconcileCreatePaymentEntryRequest,
  BankReconciliationReconcileCreateJournalEntryRequest,
  BankReconciliationReconcileUpdateBankTransactionRequest,
} from '@/services/frappe';

export async function getAccountBalances(
  request: GetAccountBalancesRequest,
): Promise<AccountBalance[]> {
  return remoteMethodCall({
    method: 'erpnext.accounts.utils.get_account_balances',
    mutating: false,
    request,
  });
}

export async function getBankAccountBalance(request: GetBankAccountRequest): Promise<number> {
  return remoteMethodCall({
    method:
      'erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_account_balance',
    mutating: false,
    request,
  });
}

export async function getBankTransactions(
  request: GetBankAccountRequest,
): Promise<BankTransaction[]> {
  return remoteMethodCall({
    method:
      'erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_bank_transactions',
    mutating: false,
    request,
  });
}

export async function getBankReconciliationLinkedPayments(
  request: GetBankReconciliationLinkedPaymentsRequest,
): Promise<any[]> {
  return remoteMethodCall({
    method:
      'erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_linked_payments',
    mutating: false,
    request,
  });
}

export async function bankReconciliationReconcileVouchers(
  request: BankReconciliationReconcileVouchersRequest,
): Promise<BaseDocument> {
  return remoteMethodCall({
    method:
      'erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.reconcile_vouchers',
    mutating: true,
    request,
  });
}

export async function bankReconciliationCreatePaymentEntry(
  request: BankReconciliationReconcileCreatePaymentEntryRequest,
): Promise<BaseDocument> {
  return remoteMethodCall({
    method:
      'erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.create_payment_entry_bts',
    mutating: true,
    request,
  });
}

export async function bankReconciliationCreateJournalEntry(
  request: BankReconciliationReconcileCreateJournalEntryRequest,
): Promise<BaseDocument> {
  return remoteMethodCall({
    method:
      'erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.create_journal_entry_bts',
    mutating: true,
    request,
  });
}

export async function bankReconciliationUpdateBankTransaction(
  request: BankReconciliationReconcileUpdateBankTransactionRequest,
): Promise<BaseDocument> {
  return remoteMethodCall({
    method:
      'erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.update_bank_transaction',
    mutating: true,
    request,
  });
}
