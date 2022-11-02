import { CustomizeFormType } from '@/pages/FiscalYearDetailPage/types/doc';
import type { ProFieldFCRenderProps } from '@ant-design/pro-components';
import type { Company } from '@/services/frappe/doctype';
import FormTypeTable from '@/pages/FiscalYearDetailPage/components/FormTypeTable';

export const getCustomizeFormType = (
  type: CustomizeFormType,
): {
  render: (text: any) => JSX.Element;
  renderFormItem: (text: any, props: ProFieldFCRenderProps) => JSX.Element;
} => {
  if (type === CustomizeFormType.TABLE) {
    return {
      render: (companys: Company[]) => {
        return <FormTypeTable value={companys} />;
      },
      renderFormItem: (companys: Company[], props) => {
        console.log({ props });
        return <FormTypeTable {...props.fieldProps} />;
      },
    };
  }

  return {
    render: () => <span>Un support Type</span>,
    renderFormItem: () => <span>Un support Type</span>,
  };
};
