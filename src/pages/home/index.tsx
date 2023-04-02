import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';

const Home: FC = () => {

    const navigate = useNavigate();

    return <>
        <h3>Home</h3>
        <Button type="primary" onClick={() => {navigate('/login')}}>to login page</Button>
    </>
}

export default Home;