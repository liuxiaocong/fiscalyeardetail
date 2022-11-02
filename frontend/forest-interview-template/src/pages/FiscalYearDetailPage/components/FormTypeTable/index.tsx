import React from 'react';
import { Row, Col, Table, Button } from 'antd';
import type { ProFormColumnsType } from '@ant-design/pro-components';
import type { ColumnsType, ColumnType } from 'antd/lib/table';
import { SettingOutlined, EditOutlined } from '@ant-design/icons';
import type { Company } from '@/services/frappe/doctype';
import FormTypeLink from '@/pages/FiscalYearDetailPage/components/FormTypeLink';

const ROW_ID = 'idx';

const FormTypeTable: React.FC<{
  value?: Company[];
  onChange?: (value: Company[]) => void;
  columns?: ColumnsType<Company>;
  readonly?: boolean;
  formColumnsTypes?: ProFormColumnsType<T>[];
}> = ({ value, onChange, columns, readonly }) => {
  const [val, setVal] = React.useState<Company[]>(value || []);
  const [currentEditIdx, setCurrentEditIdx] = React.useState<undefined | number>(undefined);
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(val);
  };

  //take idx after fix row
  const displayColumns: ColumnsType<Company> = columns || [
    {
      title: 'No.',
      dataIndex: ROW_ID,
      key: ROW_ID,
      width: '200px',
    },
    {
      title: 'Company',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, record: Company) => {
        return (
          <FormTypeLink
            value={name}
            onChange={(value: string) => {
              //todo
              console.log({
                value,
              });
            }}
            readonly={currentEditIdx !== record.idx}
          />
        );
      },
    },
    {
      title: <SettingOutlined />,
      key: 'action',
      width: '250px',
      render: () => (
        <Row>
          <Col style={{ marginRight: 20 }}>
            <EditOutlined />
          </Col>
          <Col>Edit</Col>
        </Row>
      ),
    },
  ];

  if (!displayColumns.find((item: ColumnType<Company>) => item.dataIndex === ROW_ID)) {
    displayColumns.unshift({
      title: 'No.',
      dataIndex: ROW_ID,
      key: ROW_ID,
      width: '200px',
    });
  }
  return (
    <div>
      <Table
        onRow={
          readonly
            ? undefined
            : (record) => {
                return {
                  onClick: () => {
                    setCurrentEditIdx(record.idx);
                  },
                };
              }
        }
        rowKey={ROW_ID}
        columns={displayColumns}
        dataSource={value}
        rowSelection={rowSelection}
      />
      {!readonly && <Button size="small">Add row</Button>}
    </div>
  );
};

export default FormTypeTable;
