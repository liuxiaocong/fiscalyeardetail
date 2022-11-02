import React from 'react';
import { message } from 'antd';
import { KnownDocType } from '@/services/frappe/doctype';
import { getDocType, getDoc } from '@/services/frappe/api/desk';

import styles from './index.less';
import CustomTag from './components/customTag';
import { transformDocTypesToAntdFormColumns } from './utils/antdForm';
import DoctypeForm from './components/DoctypeForm';

const Page = () => {
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const docTypes = await getDocType({
          doctype: KnownDocType.ACCOUNTS_FISCAL_YEAR,
          with_parent: true,
        });
        const docData = await getDoc({ doctype: KnownDocType.ACCOUNTS_FISCAL_YEAR, name: '2022' });
        console.log({
          docTypes,
          docData,
        });
      } catch (ex) {
        console.error(ex);
        message.error('Unexpect api error');
      }
    };
    fetchData();
  }, []);

  const antdFormFields = transformDocTypesToAntdFormColumns({} as any);
  return (
    <div className={styles.container}>
      FiscalYearDetailPage
      <div>
        <DoctypeForm />
        {/* <CustomTag /> */}
      </div>
    </div>
  );
};

export default Page;
