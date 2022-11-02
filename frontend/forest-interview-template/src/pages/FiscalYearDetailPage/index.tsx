import React from 'react';
import type { StoreValue } from 'rc-field-form/lib/interface';
import { message } from 'antd';
import { KnownDocType } from '@/services/frappe/doctype';
import { getDocType, getDoc } from '@/services/frappe/api/desk';

import styles from './index.less';
import CustomTag from './components/customTag';
import { transformDocTypesToAntdFormColumns } from './utils/antdForm';
import DoctypeForm from './components/DoctypeForm';

// {
//   year: '2022',
//   disabled: 0,
//   is_short_year: 0,
//   year_start_date: '2022-11-02',
//   year_end_date: '2023-11-01',
//   auto_created: 0,
//   companies: [
//     {
//       name: 'dd6c40d826',
//       owner: 'Administrator',
//       creation: '2022-11-01 14:22:48.502532',
//       modified: '2022-11-01 17:13:40.009750',
//       modified_by: 'Administrator',
//       docstatus: 0,
//       idx: 1,
//       company: 'Administrator',
//       parent: '2022',
//       parentfield: 'companies',
//       parenttype: 'Fiscal Year',
//       doctype: 'Fiscal Year Company',
//     },
//     {
//       name: '6fe74e3e4c',
//       owner: 'Administrator',
//       creation: '2022-11-01 14:22:48.502532',
//       modified: '2022-11-01 17:13:40.009750',
//       modified_by: 'Administrator',
//       docstatus: 0,
//       idx: 2,
//       company: 'abc test2',
//       parent: '2022',
//       parentfield: 'companies',
//       parenttype: 'Fiscal Year',
//       doctype: 'Fiscal Year Company',
//     },
//   ],
// }
const Page = () => {
  const [initValues, setInitValues] = React.useState<Record<string, StoreValue> | undefined>(
    undefined,
  );
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const docTypes = await getDocType({
          doctype: KnownDocType.ACCOUNTS_FISCAL_YEAR,
          with_parent: true,
        });
        const docData = await getDoc({ doctype: KnownDocType.ACCOUNTS_FISCAL_YEAR, name: '2022' });
        const initInfo = docData?.docs?.[0] || {};
        setInitValues(initInfo);
      } catch (ex) {
        console.error(ex);
        message.error('Unexpect api error');
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      FiscalYearDetailPage
      <div>
        <DoctypeForm initialValues={initValues} />
        {/* <CustomTag /> */}
      </div>
    </div>
  );
};

export default Page;
