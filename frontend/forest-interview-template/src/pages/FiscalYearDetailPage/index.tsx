import React from 'react';
import type { DocType, Company } from '@/services/frappe/doctype';
import type { StoreValue } from 'rc-field-form/lib/interface';

import { KnownDocType } from '@/services/frappe/doctype';
import { Collapse, Spin } from 'antd';
import { message } from 'antd';
import { getDocType, getDoc } from '@/services/frappe/api/desk';
import { getLastUrlPath } from './utils/common';
import { getAutoNameFromDocType } from './utils/doctype';
import styles from './index.less';
import DoctypeForm from './components/DoctypeForm';
import { typesResult, docData } from './testdata';

type SimpleDocField = {
  year: string;
  disabled: number;
  is_short_year: number;
  year_start_date: string;
  year_end_date: string;
  auto_created: number;
  companies: Company[];
};

const { Panel } = Collapse;
const Page = () => {
  const [initValues, setInitValues] = React.useState<Record<string, StoreValue> | undefined>(
    undefined,
  );
  const [loading, setLoading] = React.useState(false);
  const [fiscalYearDocType, setFiscalYearDocType] = React.useState<DocType | undefined>(undefined);
  const [docTypes, setDocTypes] = React.useState<DocType[]>([]);
  const [showNotExist, setShowNotExist] = React.useState(false);

  const docName = getLastUrlPath(window.location.pathname);
  React.useEffect(() => {
    if (!docName) {
      message.error(`${docName} is not valid year`);
      return;
    }
    setLoading(true);
    const fetchData = async () => {
      try {
        // const typesResult = await getDocType({
        //   doctype: KnownDocType.ACCOUNTS_FISCAL_YEAR,
        //   with_parent: true,
        // });
        const types = typesResult?.docs || [];
        const fiscalYearType = types?.find(
          (docType: DocType) => docType.name === KnownDocType.ACCOUNTS_FISCAL_YEAR,
        );

        setFiscalYearDocType(fiscalYearType);
        setDocTypes(types);

        //const docData = await getDoc({ doctype: KnownDocType.ACCOUNTS_FISCAL_YEAR, name: docName });
        const initInfo = docData?.docs?.[0];
        if (!initInfo) {
          setShowNotExist(true);
          return;
        }
        setInitValues(initInfo || {});
      } catch (ex) {
        console.error(ex);
        message.error('Unexpect api error');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [docName]);

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

  const pageTitle = getAutoNameFromDocType(fiscalYearDocType, initValues);

  if (showNotExist) {
    return <div className={styles.empty}>{`fiscal year ${docName} not created`}</div>;
  }

  return (
    <Spin spinning={loading}>
      <div className={styles.container}>
        <h2>{pageTitle}</h2>
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
          <DoctypeForm<SimpleDocField>
            hideTitle
            initialValues={initValues}
            docType={fiscalYearDocType}
            optionTypes={docTypes}
          />
        </div>
      </div>
    </Spin>
  );
};

export default Page;
