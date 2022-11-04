import { CustomizeFormType } from '@/pages/FiscalYearDetailPage/types/antd';
import type { ProFieldFCRenderProps } from '@ant-design/pro-components';
import type { TableData } from '@/pages/FiscalYearDetailPage/types/common';
import FormTypeTable from '@/pages/FiscalYearDetailPage/components/FormTypeTable';
import FormTypeLink from '@/pages/FiscalYearDetailPage/components/FormTypeLink';

export const getCustomizeFormType = (
  type: CustomizeFormType,
): {
  render: (text: any, props: ProFieldFCRenderProps) => JSX.Element;
  renderFormItem: (text: any, props: ProFieldFCRenderProps) => JSX.Element;
} => {
  if (type === CustomizeFormType.TABLE) {
    return {
      render: (tableDatas: TableData[], props) => {
        return <FormTypeTable {...props.fieldProps} value={tableDatas} readonly />;
      },
      renderFormItem: (tableDatas: TableData[], props) => {
        return <FormTypeTable {...props.fieldProps} value={tableDatas} />;
      },
    };
  }

  if (type === CustomizeFormType.LINK) {
    return {
      render: (val: string) => {
        return <FormTypeLink value={val} readonly={true} />;
      },
      renderFormItem: (val: string, props) => {
        return <FormTypeLink value={val} {...props.fieldProps} readonly={false} />;
      },
    };
  }

  return {
    render: () => <span>Un support Type</span>,
    renderFormItem: () => <span>Un support Type</span>,
  };
};
