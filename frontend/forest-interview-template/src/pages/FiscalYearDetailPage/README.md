### Project run

- 1 Open <http://erp.localhost:8000/app/fiscal-year> and create fiscal-year 2022

- 2 Visit <http://localhost:8006/fiscal-year/2022>, without step will show `fiscal year ${year} not created`

### Relative link

- [bench](https://frappeframework.com/docs/v14/user/en/bench)

### Notice

- Install jest if want to run test, (only added simple unit test)

```shell
yarn add jest ts-jest @types/jest jest-environment-jsdom
```

- Special handle for `autoname`, will set field to be hidden if match

### Things i didn't do

- Use BetaSchemaForm to render table column

- Actions on table (edit click)

- Ui detail

- Data transform from form data to api request when click `save`

- Use webpack alis to optimize `import` style, currently i put all relative code in `src/pages/FiscalYearDetailPage` for easy to review code

- Use `React.memo`, `React.useCallback` to optimize render

- Use `useRequest` hook instead of set loading

- Use recursion for trace `DocField`, only check `fieldtype === 'Table``, then add props to support render

- For table only support edit with `fieldtype === 'Link'`
