import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './index.less';

const Merchant: FC = () => {

    return <>
        <Outlet />
    </>
}

export default Merchant;