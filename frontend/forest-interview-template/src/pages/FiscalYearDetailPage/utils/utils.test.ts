import { DocType } from '@/services/frappe';
import { getAutoNameValueFromDocType } from './docType';
import { getLastUrlPath } from './common';

describe(`Get auto name \`${getAutoNameValueFromDocType.name}\``, () => {
  it('without autoname property:', () => {
    const data = {};
    const res = getAutoNameValueFromDocType(data as DocType, { name: 'Fiscal year' });
    expect(res).toStrictEqual('');
  });

  it('have autoname but not match value:', () => {
    const data = {
      autoname: 'fields:year',
    };
    const res = getAutoNameValueFromDocType(data as DocType, { name: 'Fiscal year' });
    expect(res).toStrictEqual('');
  });

  it('autoname but match value:', () => {
    const data = {
      autoname: 'fields:name',
    };
    const res = getAutoNameValueFromDocType(data as DocType, { name: 'Fiscal year' });
    expect(res).toStrictEqual('Fiscal year');
  });
});

describe(`Get last path url \`${getLastUrlPath.name}\``, () => {
  it('null path:', () => {
    const res = getLastUrlPath('');
    expect(res).toStrictEqual('');
  });

  it('un valid path:', () => {
    const res = getLastUrlPath('abc');
    expect(res).toStrictEqual('abc');
  });

  it('with query:', () => {
    const res = getLastUrlPath('/app/2000?user=even');
    expect(res).toStrictEqual('2000');
  });

  it('without query:', () => {
    const res = getLastUrlPath('/app/2000');
    expect(res).toStrictEqual('2000');
  });
});
