import { FC, useState } from 'react';
import styled from 'styled-components';
import { KeyOutlined } from '@ant-design/icons';
import LoginAccountList from './LoginAccountList';


const KeyWrap = styled.aside`
    position: fixed;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 48px;
    height: 48px;
    background-color: #1890ff;
    border-radius: 4px 0 0 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    user-select: none;
`;

const LoginKey: FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    }

    return <>
        <KeyWrap onClick={handleOpen}>
            <KeyOutlined />
        </KeyWrap>
        <LoginAccountList isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
}

export default LoginKey;