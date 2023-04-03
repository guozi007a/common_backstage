import { ReactNode } from 'react';
import styled from 'styled-components';

// 默认的fallback
export const defaultFB = (): ReactNode => (<span>Loading...</span>);
// 登录页的fallback
const LoginFB = styled.div`
    width: 100%;
    height: 100%;
    background-color: #2D3A4B;
`;
export const loginFB = (): ReactNode => (<LoginFB />);