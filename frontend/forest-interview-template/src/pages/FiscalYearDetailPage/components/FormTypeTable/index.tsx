import React from 'react';
import type { ProFormColumnsType } from '@ant-design/pro-components';
import type { ColumnsType, ColumnType } from 'antd/lib/table';

import { Row, Col, Table, Button } from 'antd';
import { SettingOutlined, EditOutlined } from '@ant-design/icons';

import { ROW_ID } from '@/pages/FiscalYearDetailPage/constants/common';
import type { TableData } from '@/pages/FiscalYearDetailPage/types/common';
import FormTypeLink from '@/pages/FiscalYearDetailPage/components/FormTypeLink';
import { CustomizeFormType } from '@/pages/FiscalYearDetailPage/types/antd';

type Props = {
  value?: TableData[];
  onChange?: (value: TableData[]) => void;
  readonly?: boolean;
  formColumns?: ProFormColumnsType[];
};

const FormTypeTable = (props: Props) => {
  const { value, onChange, readonly, formColumns } = props;
  const [tableValues, setTableValues] = React.useState<TableData[]>(value || []);
  const [currentEditIdx, setCurrentEditIdx] = React.useState<undefined | number>(undefined);
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<number[]>([]);
  const showDelete = selectedRowKeys && selectedRowKeys.length > 0;
  const rowSelection = readonly
    ? undefined
    : {
        onChange: (selectedKeys: React.Key[]) => {
          setSelectedRowKeys(selectedKeys as number[]);
        },
      };

  React.useEffect(() => {
    if (value) {
      setTableValues(value);
    }
  }, [value]);
  const updateValues = (data: TableData[]) => {
    setTableValues(data);
    onChange?.(data);
  };

  const onColumnDataChange = (key: string, val: any, record: TableData) => {
    const newData = [...tableValues];
    const target = newData.find((item) => item[ROW_ID] === record[ROW_ID]);
    if (target) {
      target[key] = val;
    }
    updateValues(newData);
  };

  const addRow = () => {
    let maxIdx = 0;
    tableValues?.forEach((tableValue: TableData) => {
      if (tableValue[ROW_ID] > maxIdx) {
        maxIdx = tableValue[ROW_ID];
      }
    });
    const newData = [
      ...tableValues,
      {
        idx: maxIdx + 1,
      },
    ];
    setCurrentEditIdx(maxIdx + 1);
    updateValues(newData);
  };

  const deleteRows = () => {
    const newData = [...tableValues].filter((item) => !selectedRowKeys.includes(item[ROW_ID]));
    setSelectedRowKeys([]);
    updateValues(newData);
  };

  const buildWithFormColumns = (): ColumnsType<TableData> => {
    const ret: ColumnsType<TableData> = [];
    formColumns?.forEach((formColumn: ProFormColumnsType) => {
      const key = formColumn.dataIndex as string;
      const add: ColumnType<TableData> = {
        title: formColumn.title as string,
        dataIndex: key,
        key: key,
        width: '200px',
      };
      if (formColumn.valueType === CustomizeFormType.LINK) {
        //only support edit with link type
        add.render = (name: string, record: TableData) => {
          return (
            <FormTypeLink
              value={name}
              onChange={(val: string) => {
                //todo
                onColumnDataChange(key, val, record);
              }}
              readonly={currentEditIdx !== record.idx || !!formColumn.readonly}
            />
          );
        };
      }
      ret.push(add);
    });
    return ret;
  };

  //take idx after fix row
  const displayColumns: ColumnsType<TableData> = formColumns
    ? buildWithFormColumns()
    : [
        {
          title: 'No.',
          dataIndex: ROW_ID,
          key: ROW_ID,
          width: '200px',
        },
        {
          title: 'Company',
          dataIndex: 'company',
          key: 'company',
          render: (name: string, record: T) => {
            return (
              <FormTypeLink
                value={name}
                onChange={(val: string) => {
                  onColumnDataChange('company', val, record);
                }}
                readonly={currentEditIdx !== record.idx}
              />
            );
          },
        },
      ];

  if (!displayColumns.find((item: ColumnType<TableData>) => item.dataIndex === ROW_ID)) {
    displayColumns.unshift({
      title: 'No.',
      dataIndex: ROW_ID,
      key: ROW_ID,
      width: '200px',
    });
  }

  if (!readonly) {
    displayColumns.push({
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
    });
  }

  return (
    <div>
      <Table<TableData>
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
        dataSource={tableValues}
        rowSelection={rowSelection}
      />
      {!readonly && (
        <div>
          <Button size="small" onClick={addRow}>
            Add row
          </Button>
          {showDelete && (
            <Button style={{ marginLeft: 12 }} size="small" danger onClick={deleteRows}>
              Delete rows
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default FormTypeTable;
