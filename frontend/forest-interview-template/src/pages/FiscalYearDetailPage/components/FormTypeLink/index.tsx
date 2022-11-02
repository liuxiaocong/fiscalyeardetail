import React from 'react';
import type { SearchLink } from '@/services/frappe/model';
import { Input, message, Spin, Button } from 'antd';
import { searchLink } from '@/services/frappe/api/desk';
import useDebounce from '@/pages/FiscalYearDetailPage/hooks/useDebounce';
import styles from './index.less';

const FormTypeLink: React.FC<{
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}> = ({ value, onChange, readonly }) => {
  const [val, setVal] = React.useState<string>(value || '');
  const debouncedVal = useDebounce<string>(val, 500);
  const [isFocus, setIsFocus] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState<SearchLink[]>([]);

  // click list and onblur is happen almost same time, default -> blur : [true], click list: [true, false]
  const checkAfterFocusRef = React.useRef({
    val: '',
    needCheck: false,
  });

  const fetchSearchList = async (searchVal: string): Promise<SearchLink[]> => {
    setLoading(true);
    try {
      const resultList = await searchLink({
        txt: searchVal,
        doctype: 'Company',
        ignore_user_permissions: true,
        reference_doctype: 'Fiscal Year Company',
      });
      return resultList?.results || [];
    } catch (ex) {
      console.error(ex);
      message.error('Unexpect api error');
      return [];
    } finally {
      setLoading(false);
    }
  };

  //use ref coz onblur will happen before click avaliable item
  const checkValIsValid = async () => {
    const latestVal = checkAfterFocusRef.current.val;
    if (!latestVal || !checkAfterFocusRef.current.needCheck) {
      return;
    }
    const isValid = searchResult.find((item) => item.value === latestVal);
    if (isValid) {
      onChange?.(latestVal);
      return;
    }
    setIsFocus(false);
    setSearchResult([]);
    const checkValid = async () => {
      const results = await fetchSearchList(latestVal);
      const find = results.find((item) => item.value === latestVal);
      if (!find) {
        //not valid
        //todo need check whether component unmount
        setVal('');
        onChange?.('');
      }
    };
    checkValid();
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const handleBlur = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //also need check val when blur
    checkAfterFocusRef.current.needCheck = true;
    checkAfterFocusRef.current.val = e.target.value;

    setTimeout(checkValIsValid, 500);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const results = await fetchSearchList(debouncedVal);
      setSearchResult(results);
    };
    fetchData();
  }, [debouncedVal]);

  if (readonly) {
    return <span className={styles.valDisplay}>{value}</span>;
  }

  return (
    <div>
      <div>
        <Input
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          value={val}
          placeholder="Company"
          className={styles.inputField}
        />
      </div>
      {isFocus && (
        <Spin spinning={loading}>
          <ul className={styles.list}>
            {searchResult.map((link: SearchLink) => {
              return (
                <li
                  onClick={() => {
                    setIsFocus(false);
                    setVal(link.value);
                    checkAfterFocusRef.current.needCheck = false;
                    checkAfterFocusRef.current.val = link.value;
                    onChange?.(link.value);
                  }}
                  className={styles.listItem}
                  key={link.value}
                >
                  {link.value}
                </li>
              );
            })}
            <li key="create" className={`${styles.listItem} ${styles.listItemLink}`}>
              <Button type="link">Create Company</Button>
            </li>
          </ul>
        </Spin>
      )}
    </div>
  );
};

export default FormTypeLink;
