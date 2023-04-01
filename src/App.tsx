import { FC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

type ThemeProp = {
	theme: { isDarkTheme: boolean }
};

const commonStyle = `
	&.dark {
		filter: invert(1) hue-rotate(180deg);

		img,
		video,
		svg {
			filter: invert(1) hue-rotate(180deg);
		}
	}
`;

const Head = styled.header`
	width: 100%;
	height: 80px;
	background-color: #272822;
	${(props: ThemeProp) => props.theme.isDarkTheme ? commonStyle : ''}
`;
const Input = styled.input.attrs({
	type: 'checkbox',
})`
	width: 100px;
	height: 60px;
	float: right;
	margin-right: 200px;
	border: none;
	background-color: #F0AD4E;
`;
const Main = styled.main`
	width: 100%;
	background-color: #fff;
	${(props: ThemeProp) => props.theme.isDarkTheme ? commonStyle : ''}
`
const Img = styled.img`
	width: 200px;
`;
const Button = styled.button`
	box-sizing: border-box;
	padding: 6px 10px;
	margin-top: 20px;
	border: none;
	border-radius: 4px;
`;
const ButtonA = styled(Button)`
	color: #fff;
	background-color: #3BAE56;
`;
const ButtonB = styled(Button)`
	color: #000;
	background-color: #F0AD4E;
`;



const App: FC = () => {

	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

	return <>
		<ThemeProvider theme={{isDarkTheme}}>
			<Head className={`${isDarkTheme ? 'dark' : ''}`}>
				<Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setIsDarkTheme(e.target.checked)}} />
			</Head>
			<Main className={`${isDarkTheme ? 'dark' : ''}`}>
				<Img src="https://zkres1.myzaker.com/201908/5d497ae28e9f0972d90628e9_1024.jpg" alt="" />
				<br />
				<ButtonA>click button A.</ButtonA>
				<br />
				<ButtonB>click button B.</ButtonB>
			</Main>
		</ThemeProvider>
	</>
}

export default App;