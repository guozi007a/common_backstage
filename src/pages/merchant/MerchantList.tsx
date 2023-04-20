/** 商户列表 */
import { FC, useState } from "react";
import { Space, Input, Button, Table, Tag } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import MatchCounts from '@/components/MatchCounts';


interface DataType {
    key: React.Key;
    name: string;
    licenseId: string;
    legal: string;
    contacts: string;
    phone: number;
    address: string;
    cooperationStatus: boolean;
    cooperStartDate: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: '商户名称',
        dataIndex: 'name',
    },
    {
        title: '营业执照号',
        dataIndex: 'licenseId'
    },
    {
        title: '法人代表',
        dataIndex: 'legal'
    },
    {
        title: '联系人',
        dataIndex: 'contacts'
    },
    {
        title: '联系方式',
        dataIndex: 'phone',
    },
    {
        title: '地址',
        dataIndex: 'address',
    },
    {
        title: '合作状态',
        dataIndex: 'cooperationStatus',
        render: (_, { cooperationStatus }) => {
            const color = cooperationStatus ? 'green' : 'red';
            return <Tag color={color}>{cooperationStatus ? '合作中' : '已终止'}</Tag>
        }
    },
    {
        title: '开始合作时间',
        dataIndex: 'cooperStartDate'
    },
    {
        title: '操作',
        dataIndex: 'action',
        render: () => {
            return <Space>
                <Button type="primary" size="small" style={{fontSize: 12}}>详情</Button>
                <Button type="primary" size="small" style={{fontSize: 12}}>编辑</Button>
            </Space>
        }
    }
];

const data: DataType[] = [];
for (let i = 0; i < 463; i++) {
    data.push({
        key: i,
        name: '商户' + i,
        licenseId: 'N36455451J78',
        legal: '张三',
        contacts: '小明',
        phone: 13766438888,
        address: '江南省京州市' + i + '号市场',
        cooperationStatus: Math.random() > 0.5,
        cooperStartDate: 1234567891011,
    });
}

const MerchantList: FC = () => {
    
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        // console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return <>
        <div>
            <Space>
                <label htmlFor="merchantName" style={{paddingLeft: 5}}>
                    商户名称: 
                    <Input
                        id="merchantName"
                        placeholder="商户名称"
                    />
                </label>
                <label htmlFor="licenseId">
                    营业执照号: 
                    <Input
                        id="licenseId"
                        placeholder="营业执照号"
                    />
                </label>
                <label htmlFor="contacts">
                    联系人姓名: 
                    <Input
                        id="contacts"
                        placeholder="联系人姓名"
                    />
                </label>
            </Space>
        </div>
        <div style={{marginTop: 20}}>
            <Space>
                <Button type="primary"
                    icon={<SearchOutlined />}
                >搜索</Button>
                <Button>重置</Button>
                <Button danger disabled={!hasSelected}>批量删除</Button>
            </Space>
        </div>
        <MatchCounts matchLength={data.length} selectCounts={selectedRowKeys.length} />
        <div>
            <div style={{ marginBottom: 20 }}></div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{showSizeChanger: false}} />
        </div>
    </>
}

export default MerchantList;