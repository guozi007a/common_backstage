import { FC } from 'react';
import {
    LoginWrap,
    LoginContainer,
    LoginTitle
} from './styled';
import LoginForm from './LoginForm';
import SwitchLang from './SwitchLang';
import LoginKey from './LoginKey';
import { useTranslation } from 'react-i18next';


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
        <LoginKey />
    </LoginWrap>
}

export default Login;