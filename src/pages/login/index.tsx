import { FC } from 'react';
import {
    LoginWrap,
    LoginContainer,
    LoginPic,
    LoginMain,
    LoginTitle,
    CopyrightDeclare
} from './styled';
import LoginForm from './LoginForm';
import SwitchLang from './SwitchLang';
import LoginKey from './LoginKey';
import { useTranslation } from 'react-i18next';


const Login: FC = () => {
    
    const { t } = useTranslation();

    return <LoginWrap>
        <LoginContainer>
            <LoginPic />
            <LoginMain>
                <LoginTitle>
                    <span>{t('login.title')}</span>
                </LoginTitle>
                <LoginForm t={t} />
            </LoginMain>
        </LoginContainer>
        <LoginKey />
        <SwitchLang wrapClassName='in_login_page' />
        <CopyrightDeclare> Copyright © 2020-2023 common_backstage All Rights Reserved. </CopyrightDeclare>
    </LoginWrap>
}

export default Login;