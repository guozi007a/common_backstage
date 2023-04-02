import { FC } from 'react';
import {
    LoginWrap,
    LoginContainer,
    LoginTitle
} from './styled';
import LoginForm from './LoginForm';
import SwitchLang from './SwitchLang';
import { useTranslation } from 'react-i18next';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Login: FC = () => {
    
    const { t } = useTranslation();

    return <LoginWrap>
        <LoginContainer>
            <LoginTitle>
                <span>{t('login.title')}</span>
                <SwitchLang />
            </LoginTitle>
            <LoginForm t={t} />
        </LoginContainer>
    </LoginWrap>
}

export default Login;