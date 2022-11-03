import React from 'react';
import type { StoreValue } from 'rc-field-form/lib/interface';
import type { ProFormColumnsType } from '@ant-design/pro-components';
import type { DocType } from '@/services/frappe/doctype';

import { KnownDocType } from '@/services/frappe/doctype';
import {
  transformDocTypesToAntdFormColumns,
  hideFormColumnsByName,
} from '@/pages/FiscalYearDetailPage/utils/antdForm';
import { getAutoNameValueFromDocType } from '@/pages/FiscalYearDetailPage/utils/docType';
import AntdSchemaForm from '@/pages/FiscalYearDetailPage/components/AntdSchemaForm';

type Props = {
  initialValues?: Record<string, StoreValue>;
  docType?: DocType; // use for render form info
  optionTypes?: DocType[]; // docType maybe need some info from optionTypes, connect with property - 'options'
  hideTitle?: boolean;
};

const DoctypeForm = <T,>(props: Props) => {
  const { initialValues, docType, optionTypes, hideTitle = false } = props;
  const [antdFormColumns, setAntdFormColumns] = React.useState<ProFormColumnsType<T>[]>([]);

  React.useEffect(() => {
    if (docType) {
      let formColumns = transformDocTypesToAntdFormColumns({
        fields: docType?.fields || [],
        optionTypes,
      });

      const autoName = docType.autoname;
      if (autoName) {
        const autoNameArr = autoName.split(':');
        if (autoNameArr.length === 2) {
          const targetField = autoNameArr[1];
          formColumns = hideFormColumnsByName(formColumns, targetField);
        }
      }

      setAntdFormColumns(formColumns);
    }
  }, [docType, optionTypes]);

  if (docType && docType?.doctype !== KnownDocType.CORE_DOCTYPE) {
    //render 'DocType' only
    return <div>Un valid doctype : {docType?.doctype}</div>;
  }

  const title = getAutoNameValueFromDocType(docType, initialValues);

  return (
    <div>
      {!hideTitle && <h2>{title}</h2>}
      <AntdSchemaForm<T> title="" columns={antdFormColumns} initialValues={initialValues} />
    </div>
  );
};

export default DoctypeForm;
