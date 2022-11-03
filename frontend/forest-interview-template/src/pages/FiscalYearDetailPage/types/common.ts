import type { ROW_ID } from '@/pages/FiscalYearDetailPage/constants/common';

export type TableData = Record<string, any> & { [ROW_ID]: number };
