import React from 'react';
import { message } from 'antd';
import styles from './index.less';
import CustomTag from './components/customTag';
import { KnownDocType } from '@/services/frappe/doctype';
import type { ProFormColumnsType } from '@ant-design/pro-components';
import { CustomizeFormType } from '@/pages/FiscalYearDetailPage/types/doc';
import { getCustomizeFormType } from '@/pages/FiscalYearDetailPage/utils/formType';
import { BetaSchemaForm, ProProvider } from '@ant-design/pro-components';
import { getDocType, getDoc, Company } from '@/services/frappe/api/desk';

import { transformDocTypesToAntdFormColumns } from '@/pages/FiscalYearDetailPage/utils/antdForm';

type SimpleDocField = {
  year: string;
  disabled: number;
  is_short_year: number;
  year_start_date: string;
  year_end_date: string;
  auto_created: number;
};

const DoctypeForm = () => {
  const antdFormColumns = transformDocTypesToAntdFormColumns<SimpleDocField>({} as any);
  const values = React.useContext(ProProvider);
  return (
    <ProProvider.Provider
      value={{
        ...values,
        valueTypeMap: {
          [CustomizeFormType.TABLE]: getCustomizeFormType(CustomizeFormType.TABLE),
        },
      }}
    >
      <BetaSchemaForm<SimpleDocField>
        initialValues={{
          year: '2022',
          disabled: 0,
          is_short_year: 0,
          year_start_date: '2022-11-02',
          year_end_date: '2023-11-01',
          auto_created: 0,
          companies: [
            {
              name: 'dd6c40d826',
              owner: 'Administrator',
              creation: '2022-11-01 14:22:48.502532',
              modified: '2022-11-01 17:13:40.009750',
              modified_by: 'Administrator',
              docstatus: 0,
              idx: 1,
              company: 'Administrator',
              parent: '2022',
              parentfield: 'companies',
              parenttype: 'Fiscal Year',
              doctype: 'Fiscal Year Company',
            },
            {
              name: '6fe74e3e4c',
              owner: 'Administrator',
              creation: '2022-11-01 14:22:48.502532',
              modified: '2022-11-01 17:13:40.009750',
              modified_by: 'Administrator',
              docstatus: 0,
              idx: 2,
              company: 'abc test2',
              parent: '2022',
              parentfield: 'companies',
              parenttype: 'Fiscal Year',
              doctype: 'Fiscal Year Company',
            },
          ],
        }}
        columns={antdFormColumns}
        title="自定义 valueType"
      />
    </ProProvider.Provider>
  );
};

export default DoctypeForm;
