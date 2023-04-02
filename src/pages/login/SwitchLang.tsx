import { FC, useState } from 'react';
import styled from 'styled-components';
import Local from '@/utils/local';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

type LangProp = {
    lang: 'cn' | 'en'
}

const SwitchWrap = styled.main`
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 82px;
    height: 34px;
    background-color: #1677ff;
    border-radius: 17px;
    box-shadow: inset 0 0 4px 4px rgba(255, 255, 255, .2);
    display: flex;
`;
const SwitchTrack = styled.section`
    width: 50%;
    height: 100%;
    border-radius: 17px;
    text-align: center;
    line-height: 34px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    user-select: none;
`;
const SwitchThumb = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: ${(props: LangProp) => props.lang === 'en' ? '50%' : '0%'};
    width: 50%;
    height: 100%;
    border-radius: 17px;
    background-color: #fff;
    box-shadow: inset 0 0 4px 4px rgba(0, 0, 0, .2);
    transition: left .15s linear;
`;

const local = new Local('lang');

const SwitchLang: FC = () => {

    const [currentLang, setCurrentLang] = useState(local._key || 'cn');
    const { t } = useTranslation();

    const handleCN = () => {
        if (currentLang !== 'cn') {
            setCurrentLang('cn'); 
            local._value = 'cn';
            i18n.changeLanguage('cn');
        }
    }
    const handleEN = () => {
        if (currentLang !== 'en') {
            setCurrentLang('en');
            local._value = 'en';
            i18n.changeLanguage('en');
        }
    }

    return <SwitchWrap>
        <SwitchTrack onClick={handleCN}>{t('lang.cn')}</SwitchTrack>
        <SwitchTrack onClick={handleEN}>{t('lang.en')}</SwitchTrack>
        <SwitchThumb lang={currentLang}></SwitchThumb>
    </SwitchWrap>
}

export default SwitchLang;