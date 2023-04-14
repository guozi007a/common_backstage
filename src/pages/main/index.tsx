/** 首页 */
import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import GitCornerSvg from './GitCornerSvg';
import CardList from './CardList';
import TotalChart from './TotalChart';
import TradeCharts from './TradeCharts';
import AfterMarketChart from './AfterMarketChart';

const MainWrap = styled.main`
    position: relative;
`
const ChartsWrap = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    box-sizing: border-box;
    padding-top: 40px;
`

const Main: FC = () => {

    return <MainWrap>
        <GitCornerSvg />
        <CardList />
        <TotalChart />
        <ChartsWrap>
            <TradeCharts />
            <AfterMarketChart />
        </ChartsWrap>
    </MainWrap>
}

export default Main;