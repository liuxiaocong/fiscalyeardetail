import type { DocType } from '@/services/frappe/doctype';
import type { StoreValue } from 'rc-field-form/lib/interface';
export const getAutoNameFromDocType = (doctype?: DocType, value?: Record<string, StoreValue>) => {
  if (!doctype) {
    return '';
  }
  const autoName = doctype.autoname;
  if (autoName) {
    const autoNameArr = autoName.split(':');
    if (autoNameArr.length === 2) {
      const targetField = autoNameArr[1];
      return value?.[targetField] || '';
    }
  }
  return '';
};
