import styled from 'styled-components';


const loginBG = 'http://static.yudao.iocoder.cn/static/img/bg.c05ff27e.png';
const loginPic = 'http://static.yudao.iocoder.cn/static/img/pic.49137f73.png';

export const LoginWrap = styled.main`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${loginBG}) no-repeat center center;
    background-size: contain;
    background-color: #e6ebf2;
    overflow: hidden;
`;
export const LoginContainer = styled.section`
    position: relative;
    width: 710px;
    height: 397px;
    background-color: #fff; 
    border-radius: 20px;
    overflow: hidden;
    display: flex;
`;
export const LoginPic = styled.aside`
    width: 314px;
    background: url(${loginPic}) no-repeat center center;
    background-size: contain;
`
export const LoginMain = styled.section`
    position: relative;
    flex: 1;
`
export const LoginTitle = styled.header`
    position: relative;
    width: 100%;
    height: 58px;
    text-align: center;
    line-height: 58px;
    font-size: 40px;
    font-weight: 700;
    color: #5c6adc;
`;