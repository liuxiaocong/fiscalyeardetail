import React from 'react';
import { Collapse, Spin } from 'antd';
import type { StoreValue } from 'rc-field-form/lib/interface';
import { message } from 'antd';
import { KnownDocType } from '@/services/frappe/doctype';
import { getDocType, getDoc } from '@/services/frappe/api/desk';
import { getLastUrlPath } from './utils/common';
import styles from './index.less';
import CustomTag from './components/customTag';
import { transformDocTypesToAntdFormColumns } from './utils/antdForm';
import DoctypeForm from './components/DoctypeForm';

const { Panel } = Collapse;
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
  const [loading, setLoading] = React.useState(false);
  const docName = getLastUrlPath();
  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const docTypes = await getDocType({
          doctype: KnownDocType.ACCOUNTS_FISCAL_YEAR,
          with_parent: true,
        });
        const docData = await getDoc({ doctype: KnownDocType.ACCOUNTS_FISCAL_YEAR, name: docName });
        const initInfo = docData?.docs?.[0] || {};
        setInitValues(initInfo);
      } catch (ex) {
        console.error(ex);
        message.error('Unexpect api error');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderConnectItem = (data: { title: string; tags: string[] }) => {
    const { title, tags } = data;
    return (
      <div className={styles.item}>
        <div className={styles.title}>{title}</div>
        {tags?.map((tag: string) => {
          return (
            <div className={styles.tagWrap} key={tag}>
              <span className={styles.tag}>{tag}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Spin spinning={loading}>
      <div className={styles.container}>
        <h2>2022</h2>
        <Collapse defaultActiveKey={['1']} ghost>
          <Panel header={<b>Connections</b>} key="1">
            <div className={styles.connections}>
              {renderConnectItem({ title: 'Budgets', tags: ['Budget'] })}
              {renderConnectItem({ title: 'References', tags: ['Period Closing Voucher'] })}
              {renderConnectItem({
                title: 'Target Details',
                tags: ['Sales Person', 'Sales Partner', 'Territory', 'Monthly Distribution'],
              })}
            </div>
          </Panel>
        </Collapse>
        <div>
          <DoctypeForm initialValues={initValues} />
          {/* <CustomTag /> */}
        </div>
      </div>
    </Spin>
  );
};

export default Page;
