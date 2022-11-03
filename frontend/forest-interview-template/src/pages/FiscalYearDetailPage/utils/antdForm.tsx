import type { ProFormColumnsType, ProFieldValueType } from '@ant-design/pro-components';
import type { DocType, DocField, DocFieldType } from '@/services/frappe/doctype';
import { CustomizeFormType } from '@/pages/FiscalYearDetailPage/types/antd';

declare module '@ant-design/pro-utils' {
  interface ProFieldValueTypeWithFieldProps {
    Table: Record<string, any>;
    Link: {
      customField: string;
    };
  }
}

enum AntdFormType {
  SWITCH = 'switch',
  DATE = 'date',
  TEXT = 'text',
}

type decorateFun = (params: { docfield: DocField; optionTypes?: DocType[] }) => ProFormColumnsType;

const allSupportField: string[] = [
  AntdFormType.SWITCH,
  AntdFormType.DATE,
  AntdFormType.TEXT,
  CustomizeFormType.TABLE,
  CustomizeFormType.LINK,
];

const map: Partial<Record<DocFieldType, ProFieldValueType>> = {
  Check: AntdFormType.SWITCH,
  Date: AntdFormType.DATE,
  Data: AntdFormType.TEXT,
};

const decorate: Record<string, decorateFun> = {
  // not sure whether need this decorate or using switch
  // [AntdFormType.SWITCH]: (data: ProFormColumnsType) => {
  //   return {
  //     ...data,
  //     readonly: true, //use filed props to control
  //     fieldProps: {
  //       checkedChildren: <Checkbox checked disabled={!!data.readonly} />,
  //       unCheckedChildren: <Checkbox disabled={!!data.readonly} />,
  //     },
  //   };
  // },
  [CustomizeFormType.TABLE]: (params) => {
    const { docfield, optionTypes } = params;
    const ret: ProFormColumnsType = {
      title: docfield.label,
      readonly: !!docfield.set_only_once,
      dataIndex: docfield.fieldname,
      valueType: CustomizeFormType.TABLE,
      hideInForm: !!docfield.hidden,
    };
    const extraKey = docfield.options;
    if (extraKey) {
      const targetDocTypes = optionTypes?.find((doctype: DocType) => doctype.name === extraKey);
      console.log({ targetDocTypes });
      if (targetDocTypes && targetDocTypes.fields) {
        const formColumns = targetDocTypes.fields
          .map((fieldType: DocField) => {
            const valueType = map[fieldType.fieldtype] || fieldType.fieldtype;
            if (!allSupportField.includes(valueType)) {
              console.error(`${valueType} is not support`);
              return false;
            }
            return {
              title: fieldType.label,
              readonly: !!fieldType.set_only_once,
              dataIndex: fieldType.fieldname,
              valueType: valueType as any,
              hideInForm: !!fieldType.hidden,
            };
          })
          .filter(Boolean);

        ret.fieldProps = {
          formColumns,
        };
      }
    }
    return {
      ...ret,
    };
  },
};

export const transformDocTypesToAntdFormColumns = (params: {
  fields?: DocField[];
  optionTypes?: DocType[];
}): ProFormColumnsType[] => {
  const { fields, optionTypes } = params;
  const ret: ProFormColumnsType[] = [];

  const traceFields = (fieldItems: DocField[], parent?: DocField): void => {
    // current not need using parent for recursion
    if (!fieldItems || fieldItems.length === 0) {
      return;
    }
    if (!parent) {
      //first level, just add to ret;
      for (let i = 0; i < fieldItems.length; i++) {
        const currentField = fieldItems[i];
        const valueType = map[currentField.fieldtype] || currentField.fieldtype;
        if (!allSupportField.includes(valueType)) {
          console.error(`${valueType} is not support`);
          break;
        }

        if (decorate[valueType]) {
          ret.push(decorate[valueType]({ docfield: currentField, optionTypes: optionTypes }));
          return;
        }

        // default transform
        const add: ProFormColumnsType = {
          title: currentField.label,
          readonly: !!currentField.set_only_once,
          dataIndex: currentField.fieldname,
          valueType: valueType as any,
          hideInForm: !!currentField.hidden,
        };

        ret.push(add);
      }
    }
  };

  traceFields(fields || []);
  return ret;
};

export const hideFormColumnsByName = (
  formColumns: ProFormColumnsType[],
  name: string,
): ProFormColumnsType[] => {
  return formColumns.map((formColumn: ProFormColumnsType) => {
    if (formColumn.dataIndex === name) {
      return {
        ...formColumn,
        hideInForm: true,
      };
    }
    return formColumn;
  });
};
