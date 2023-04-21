import { FC } from 'react';
import { Button, Form, Input, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import './index.less';

const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const AddMerchant: FC = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <div className='add_merchant_wrap'>
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
            {/* 
            Tesseract.js和ocrad.js两个js库实现识别图片中的文本
            https://www.jianshu.com/p/255ff0376bec 
            Tesseract.js可以自己训练中文字库，提升识别度
            */}
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>上传营业执照图片</Button>
            </Upload>

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

            <Form.Item
                label="公司法人代表"
                name="legal"
                rules={[{ required: true, message: 'Please input your legal!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="联系人"
                name="contacts"
                rules={[{ required: true, message: 'Please input your contacts!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="联系方式"
                name="phone"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="公司地址"
                name="address"
                rules={[{ required: true, message: 'Please input your address!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    确认添加商户
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default AddMerchant;