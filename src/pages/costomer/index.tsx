import { FC } from 'react';
import { Outlet } from 'react-router-dom';


const Costomer: FC = () => {

    return <>
        <Outlet />
    </>
}

export default Costomer;