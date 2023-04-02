import styled from 'styled-components';

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
    left: 50%;
    width: 50%;
    height: 100%;
    border-radius: 17px;
    background-color: #fff;
    box-shadow: inset 0 0 4px 4px rgba(0, 0, 0, .2);
    transition: left .2s linear;

    &.change {
        left: 0%;
        transition: left .2s linear;
    }
`;

const SwitchLang: React.FC = () => {

    return <SwitchWrap>
        <SwitchTrack>CN</SwitchTrack>
        <SwitchTrack>EN</SwitchTrack>
        <SwitchThumb></SwitchThumb>
    </SwitchWrap>
}

export default SwitchLang;