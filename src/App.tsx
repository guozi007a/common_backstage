import { FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const Button = styled.button`
	box-sizing: border-box;
	padding: 5px 10px;
	border: none;
	border-radius: 4px;
	color: #fff;
	background-color: green;
	margin-top: 20px;
`

const App: FC = () => {

	const { t } = useTranslation();

	const changeLang = (lang: 'en' | 'cn') => {
		i18n.changeLanguage(lang);
	}

	return <>
		<Button onClick={() => {changeLang(i18n.language === 'en' ? 'cn' : 'en')}}>切换中/英文</Button>
		<br />
		<Button>{t('header.home')}</Button>
	</>
}

export default App;