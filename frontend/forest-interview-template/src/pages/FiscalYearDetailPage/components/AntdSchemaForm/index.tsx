import React from 'react';
import { Modal } from 'antd';
import type { ProFormColumnsType, FormInstance } from '@ant-design/pro-components';
import type { StoreValue } from 'rc-field-form/lib/interface';

import { CustomizeFormType } from '@/pages/FiscalYearDetailPage/types/antd';
import { getCustomizeFormType } from '@/pages/FiscalYearDetailPage/utils/formType';
import { BetaSchemaForm, ProProvider } from '@ant-design/pro-components';

type Props<T> = {
  title?: string;
  initialValues?: Record<string, StoreValue>;
  columns: ProFormColumnsType<T>[];
};

const AntdSchemaForm = <T,>(props: Props<T>) => {
  const { title, columns, initialValues = {} } = props;
  const values = React.useContext(ProProvider);
  const formRef = React.useRef<FormInstance>();

  React.useEffect(() => {
    if (Object.keys(initialValues).length >= 0) {
      formRef.current?.setFieldsValue(initialValues);
    }
  }, [initialValues]);

  return (
    <ProProvider.Provider
      value={{
        ...values,
        valueTypeMap: {
          [CustomizeFormType.TABLE]: getCustomizeFormType(CustomizeFormType.TABLE),
          [CustomizeFormType.LINK]: getCustomizeFormType(CustomizeFormType.LINK),
        },
      }}
    >
      <BetaSchemaForm<T>
        initialValues={initialValues}
        formRef={formRef}
        columns={columns}
        title={title || 'Form'}
        onFinish={async (result) => {
          Modal.confirm({
            content: JSON.stringify(result),
          });
        }}
      />
    </ProProvider.Provider>
  );
};

export default AntdSchemaForm;
