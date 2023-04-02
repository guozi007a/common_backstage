import { FC } from 'react';
import {
    LoginWrap,
    LoginContainer,
    LoginTitle
} from './styled';
import LoginForm from './LoginForm';
import SwitchLang from './SwitchLang';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Login: FC = () => {
    

    return <LoginWrap>
        <LoginContainer>
            <LoginTitle>
                <span>BackStage Login</span>
                <SwitchLang />
            </LoginTitle>
            <LoginForm />
        </LoginContainer>
    </LoginWrap>
}

export default Login;