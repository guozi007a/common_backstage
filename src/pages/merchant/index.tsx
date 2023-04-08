import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Merchant: FC = () => {

    return <>
        <Outlet />
    </>
}

export default Merchant;