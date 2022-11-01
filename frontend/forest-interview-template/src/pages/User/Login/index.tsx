import Footer from '@/components/Footer';
import type { LoginRequest } from '@/services/frappe';
import { getLoggedInUser, login } from '@/services/frappe';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { history, SelectLang, useModel } from '@umijs/max';
import { message } from 'antd';
import React, { useEffect } from 'react';
import styles from './index.less';

const type = 'account';

const Login: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  useEffect(() => {
    if (initialState?.currentUser) {
      const urlParams = new URL(window.location.href).searchParams;
      history.push(urlParams.get('redirect') || '/');
    }
  }, [initialState?.currentUser]);

  const handleSubmit = async (values: LoginRequest) => {
    try {
      const msg = await login({ ...values });
      if (msg === 'Logged In') {
        message.success('Login successful!');
        const currentUser = await getLoggedInUser();
        setInitialState((s) => ({ ...s, currentUser }));
        return;
      }
      message.error(`Login failed: ${msg}`);
    } catch (error) {
      message.error('Login failed, please try again!');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.lang} data-lang>
        {SelectLang && <SelectLang />}
      </div>
      <div className={styles.content}>
        <LoginForm
          logo={<img alt="logo" src="/logo.svg" />}
          title="Antd Pro"
          subTitle=""
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as LoginRequest);
          }}
        >
          <div className={styles.panel}>
            {type === 'account' && (
              <>
                <ProFormText
                  name="usr"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className={styles.prefixIcon} />,
                  }}
                  placeholder="Username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                />
                <ProFormText.Password
                  name="pwd"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={styles.prefixIcon} />,
                  }}
                  placeholder="Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                />
              </>
            )}

            <div style={{ marginBottom: 24 }}>
              <ProFormCheckbox noStyle name="autoLogin">
                Remember me
              </ProFormCheckbox>
              <a style={{ float: 'right' }}>Forgot Password?</a>
            </div>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
