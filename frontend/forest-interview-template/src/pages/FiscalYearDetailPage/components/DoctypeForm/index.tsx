import type { StoreValue } from 'rc-field-form/lib/interface';
import AntdSchemaForm from '@/pages/FiscalYearDetailPage/components/AntdSchemaForm';

import { transformDocTypesToAntdFormColumns } from '@/pages/FiscalYearDetailPage/utils/antdForm';

type SimpleDocField = {
  year: string;
  disabled: number;
  is_short_year: number;
  year_start_date: string;
  year_end_date: string;
  auto_created: number;
};

type Props = {
  initialValues?: Record<string, StoreValue>;
};

const DoctypeForm = (props: Props) => {
  const { initialValues } = props;
  const antdFormColumns = transformDocTypesToAntdFormColumns<SimpleDocField>({} as any);
  return (
    <AntdSchemaForm<SimpleDocField>
      title=""
      columns={antdFormColumns}
      initialValues={initialValues}
    />
  );
};

export default DoctypeForm;
