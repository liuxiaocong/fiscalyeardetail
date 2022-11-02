import type { ProFormColumnsType, ProFieldValueType } from '@ant-design/pro-components';
import type { DocType, DocFieldType } from '@/services/frappe/doctype';
import { Checkbox } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const map: Partial<Record<DocFieldType, ProFieldValueType>> = {
  Check: 'switch',
  Date: 'date',
  Data: 'text',
};

declare module '@ant-design/pro-utils' {
  interface ProFieldValueTypeWithFieldProps {
    Table: Record<string, any>;
    Link: {
      customField: string;
    };
  }
}

export const transformDocTypesToAntdFormColumns = <T,>(
  docTypes: DocType[],
): ProFormColumnsType<T>[] => {
  return [
    {
      title: 'Year',
      readonly: false,
      dataIndex: 'year',
      valueType: 'text',
    },
    {
      title: 'Disabled',
      readonly: false,
      dataIndex: 'disabled',
      valueType: 'switch',
    },
    {
      title: 'Is short year',
      readonly: true,
      dataIndex: 'is_short_year',
      valueType: 'switch',
      fieldProps: {
        checkedChildren: <Checkbox checked />,
        unCheckedChildren: <Checkbox />,
      },
    },
    {
      title: 'Year Start Date',
      readonly: true,
      dataIndex: 'year_start_date',
      valueType: 'date',
    },
    {
      title: 'Year End Date',
      readonly: true,
      dataIndex: 'year_end_date',
      valueType: 'date',
    },
    {
      title: 'Companies',
      readonly: false,
      dataIndex: 'companies',
      valueType: 'Table',
    },
  ];
};
