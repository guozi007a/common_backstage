import { FC } from 'react';
import { Modal, Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { accountsList, AccountType, limitTagColor } from '@/config/accounts';
import { getInjectingAccount } from '@/store/actions';
import { useDispatch } from 'react-redux';
import { IA } from '@/store/payloadTypes';

type ListProp = {
    isOpen: boolean,
    setIsOpen: (bool: boolean) => any,
}

const LoginAccountList: FC<ListProp> = (props: ListProp) => {


    const { isOpen, setIsOpen } = props;
    const dispatch = useDispatch();
    

    const handleInject = ({username, password}: IA) => {
        dispatch(getInjectingAccount({ username, password }));
    }

    const columns: ColumnsType<AccountType> = [
        {
            title: 'username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'limits',
            key: 'limits',
            dataIndex: 'limits',
            render: (_, { limits }) => (
            <>
                {limits.map((limit) => {
                    const color = limitTagColor(limit);
                return (
                    <Tag color={color} key={limit}>
                        {limit}
                    </Tag>
                );
                })}
            </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="small">
                    <Button type='primary' title='click to use this account'
                        onClick={() => {
                            handleInject({
                                username: record.username,
                                password: record.password
                            })
                        }}
                    >
                        Inject
                    </Button>
                </Space>
            ),
        },
    ];

    const handleOk = () => {
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };


    return <>
        <Modal
            title="Some accounts for your injecting below."
            open={isOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Table columns={columns} dataSource={accountsList} />
        </Modal>
    </>
}

export default LoginAccountList;