import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Page404: FC = () => {
    
    const navigate = useNavigate();

    return <>
        <h3>404</h3>
        <Button type='primary' onClick={() => {navigate('/')}}>redirect to homepage</Button>
    </>
}

export default Page404;