import { FC, useState } from "react";
import styled from 'styled-components';
import { Space, Input, Button, Table, Select, Tag } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

enum Sex { Male, Female }

interface DataType {
    key: React.Key;
    SID: number;
    name: string;
    department: string;
    sex: Sex;
    age: number;
    address: string;
    entryTime: number;
    isOnDuty: boolean;
}

const columns: ColumnsType<DataType> = [
    {
        title: '工号',
        dataIndex: 'SID',
    },
    {
        title: '姓名',
        dataIndex: 'name'
    },
    {
        title: '所属部门',
        dataIndex: 'department'
    },
    {
        title: '性别',
        dataIndex: 'sex',
        render: (_, { sex }) => {
            return <span>{sex ? '男' : '女'}</span>
        }
    },
    {
        title: '年龄',
        dataIndex: 'age',
    },
    {
        title: '地址',
        dataIndex: 'address',
    },
    {
        title: '入职时间',
        dataIndex: 'entryTime'
    },
    {
        title: '是否在岗',
        dataIndex: 'isOnDuty',
        render: (_, { isOnDuty }) => {
            const color = isOnDuty ? 'green' : 'red';
            return <Tag color={color}>{isOnDuty ? '是' : '否'}</Tag>
        }
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
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        SID: 10001 + i,
        name: '姓名' + i,
        department: Math.random() > 0.5 ? '业务增值' : '产品研发',
        sex: Math.random() > 0.5 ? Sex.Female : Sex.Male,
        age: 32,
        address: '杭州拱墅区' + i + '号街道',
        entryTime: 1234567891011,
        isOnDuty: Math.random() > 0.5,
    });
}

const MatchCounts = styled.section`
    width: 100%;
    height: 38px;
    box-sizing: border-box;
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
    border-radius: 6px;
    padding-left: 15px;
    line-height: 38px;
    margin-top: 20px;

    span {
        color: #1890ff;
        padding: 0 6px;
    }
`

const DepartmentList: FC = () => {

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const handleSelectChange = (value: string) => {
        console.log(`selected ${value}`);
    };

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
                <label htmlFor="department" style={{paddingLeft: 5}}>
                    选择部门: 
                    <br />
                    <Select
                        // defaultValue="业务增值"
                        style={{ width: 120 }}
                        onChange={handleSelectChange}
                        options={[
                            { value: '业务增值', label: '业务增值' },
                            { value: '产品研发', label: '产品研发' },
                        ]}
                    />
                </label>
                <label htmlFor="staffname">
                    员工姓名: 
                    <Input
                        id="staffname"
                        placeholder="员工姓名"
                    />
                </label>
                <label htmlFor="staffid">
                    员工工号: 
                    <Input
                        id="staffid"
                        placeholder="员工工号"
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
        <MatchCounts>
            共匹配到<span>{data.length}</span>项数据，您共选中了<span>{selectedRowKeys.length}</span>条数据.
        </MatchCounts>
        <div>
            <div style={{ marginBottom: 20 }}></div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    </>
}

export default DepartmentList;