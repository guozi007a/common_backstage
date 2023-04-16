import { FC } from "react";
import styled from 'styled-components';

type CountsProp = {
    matchLength: number,
    selectCounts: number,
}

const Counts = styled.section`
    width: 100%;
    height: 38px;
    box-sizing: border-box;
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
    border-radius: 6px;
    padding-left: 15px;
    line-height: 38px;
    margin-top: 20px;

    span {
        color: #1890ff;
        padding: 0 6px;
    }
`

const MatchCounts: FC<CountsProp> = (props: CountsProp) => {

    const { matchLength, selectCounts } = props;

    return <Counts>
        共匹配到<span>{matchLength}</span>项数据，您共选中了<span>{selectCounts}</span>条数据.
    </Counts>
}

export default MatchCounts;