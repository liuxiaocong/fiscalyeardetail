# Take Home Exercise

I placed all code inside `src/pages/FiscalYearDetailPage` for easy reviewing ( Even some common `hooks` or `utils` )

`/config/routes.ts`

```diff
+ {
+     path: '/fiscal-year',
+     name: 'fiscalYear',
+     icon: 'crown',
+     access: 'canAdmin',
+     routes: [
+       {
+         path: '/fiscal-year/2022',
+         name: '2022',
+         component: './FiscalYearDetailPage',
+       },
+       {
+         path: '/fiscal-year/2021',
+         name: '2021',
+         component: './FiscalYearDetailPage',
+       },
+     ],
+ },
```

`/src/pages/FiscalYearDetailPage`

```
└── FiscalYearDetailPage
    ├── components
    │   ├── AntdSchemaForm
    │   ├── DoctypeForm
    │   ├── FormTypeLink
    │   ├── FormTypeTable
    ├── constants 
    ├── hooks
    ├── types 
    |── utils
    |── index.less
    |── index.tsx
```

### Project Run

- 1 Environment (optional): `node: v16.14.0` `yarn: 1.22.10`

- 2 Open <http://erp.localhost:8000/app/fiscal-year> and create fiscal-year 2022

- 3 Visit <http://localhost:8006/fiscal-year/2022>, without `step 2` will show `fiscal year ${year} not created`

### Requirements Compeleted

- Form Render, support `doctype: 'Check' | 'Date' | 'Data | 'Table'`

- Edit form data, support `doctype: 'Check' | 'Date' | 'Data'`

- Edit form table data
  - Column update support: `doctype: 'Link'`
  - Actions: `Add row`, `Delete rows`

- Can click `submit` to view result after update

### Not Implemented

- Ui detail

- Text translate

- Data transform from form data to api request when click `save`, (`hideInForm` item cann't get value)

- Use webpack alis to optimize `import` style

- Use `React.memo`, `React.useCallback` to optimize render

- Use `useRequest` hook instead of set loading

- Use recursion for trace `DocField`, only check `fieldtype === 'Table``, then add props to support render

- Use BetaSchemaForm to render `table column`

- Actions on table (edit click)

- Support editing with all fieldtype in table (now only supported `fieldtype === 'Link'`)

### Others

- Install jest if want to run test, (only added simple unit test)

```shell
yarn add jest ts-jest @types/jest jest-environment-jsdom
```

- Special handle for `autoname`, will set field to be hidden if match

### Relative link

- [bench](https://frappeframework.com/docs/v14/user/en/bench)

- [useRef with Input](https://github.com/ant-design/ant-design/issues/34425)
