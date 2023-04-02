import { FC } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';

const Login: FC = () => {
    
    const navigate = useNavigate();

    return <>
        <h3>Login</h3>
        <Button type="primary" onClick={() => {navigate('/')}}>to login page</Button>
    </>
}

export default Login;