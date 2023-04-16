import { FC } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const AddMerchant: FC = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <>
        <Form
            name="add_merchant"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="公司名称"
                name="mechant_name"
                rules={[{ required: true, message: 'Please input your company name!' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item
                label="营业执照号"
                name="licenseid"
                rules={[{ required: true, message: 'Please input your licenseid!' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </>
}

export default AddMerchant;