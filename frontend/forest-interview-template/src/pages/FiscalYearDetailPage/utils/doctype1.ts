import type { DocType } from '@/services/frappe/doctype';
import type { StoreValue } from 'rc-field-form/lib/interface';
export const getAutoNameValueFromDocType = (
  docType?: DocType,
  value?: Record<string, StoreValue>,
) => {
  if (!docType) {
    return '';
  }
  const autoName = docType.autoname;
  if (autoName) {
    const autoNameArr = autoName.split(':');
    if (autoNameArr.length === 2) {
      const targetField = autoNameArr[1];
      return value?.[targetField] || '';
    }
  }
  return '';
};
