import { FC, useEffect } from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './loginForm.less';
import { useSelector } from 'react-redux';
import { IA } from '@/store/payloadTypes';
import { useNavigate } from 'react-router-dom';
import Local from '@/utils/local';
import { USERINFO } from '@/config/loginInfo';

type FormProp = {
    t: (arg: string) => string // eslint-disable-line
}


interface StateType {
    injectReducer: IA;
}

const LoginForm: FC<FormProp> = (props: FormProp) => {

    const { t } = props;
    const { username, password } = useSelector((state: StateType) => state.injectReducer);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    

    const onFinish = (values: any) => {
        // console.log('Success:', values);
        const local = new Local(USERINFO);
        const { username, password } = values;
        local._value = { username, password };
        message.success('Login Success!');
        navigate('/');
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => { 
        
        form.setFieldsValue({ username, password });

    }, [username, password])

    return <Form
        name="basic"
        wrapperCol={{ span: 18 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
    >
        <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input prefix={<UserOutlined className="user-form-item-icon" />} placeholder={t('login.username')} />
        </Form.Item>

        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password prefix={<LockOutlined className="psw-form-item-icon" />} placeholder={t('login.password')} />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>{t('login.remember')}</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}
            className='submit_btn_wrap'
        >
            <Button type="primary" htmlType="submit">
                {t('login.submit')}
            </Button>
        </Form.Item>
    </Form>
};

export default LoginForm;