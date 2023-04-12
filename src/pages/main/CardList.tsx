import { FC } from "react";
import styled from 'styled-components';
import { Card, Space } from 'antd';
import AliIcon from "@/components/AliIcon";

interface CardItemType {
    key: React.Key,
    title: string,
    icon: string,
    count: number,
    unit: string
}

const cardData: CardItemType[] = [
    {
        key: 'shanghu',
        title: '商户数量',
        icon: 'icon--shanghu',
        count: 168,
        unit: '家'
    },
    {
        key: 'dingdan',
        title: '订单数量',
        icon: 'icon-dingdanguanli',
        count: 692,
        unit: '单'
    },
    {
        key: 'xiangmu',
        title: '项目数量',
        icon: 'icon-toubiaoxinxidengji',
        count: 23,
        unit: '标的'
    },
    {
        key: 'jiaoyi',
        title: '交易总额',
        icon: 'icon-jiaoyiliangtongji-zongshouru',
        count: 1860.2,
        unit: '万元'
    },
    {
        key: 'kehu',
        title: '客户数量',
        icon: 'icon-icon_kehuliang',
        count: 1438,
        unit: '家'
    },
    {
        key: 'chanpin',
        title: '产品存量',
        icon: 'icon-jingxuanchanpin',
        count: 498.8,
        unit: '万元'
    },
    {
        key: 'shouhou',
        title: '售后总量',
        icon: 'icon-shouhou',
        count: 395,
        unit: '件'
    },
    {
        key: 'yuanliao',
        title: '原料存余',
        icon: 'icon-yuanliaoxinxi',
        count: 816.4,
        unit: '万元'
    },
];

const CardWrap = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 20px;

    .ant-card {
        width: 22%;
        min-width: 284px;
        user-select: none;

        .ant-card-body {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }
    }
`
const CardText = styled.p`
    margin: 0;
    padding: 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 2px;
    color: #333;

    .count {
        font-size: 18px;
        color: #f77676;
    }
    .unit {
        font-size: 14px;
        color: gray;
    }
`
const CountSpan = styled.span.attrs({
    className: 'count'
})`
    margin-right: 5px;
`;
const UnitSpan = styled.span.attrs({
    className: 'unit'
})``;

const CardList: FC = () => {

    return <CardWrap>
        {
            cardData.map((v, i) => {
                return <Card key={v.key}>
                    <AliIcon icon={v.icon} styles={{fontSize: '50px'}} />
                    <CardText>
                        <span>{v.title}</span>
                        <br />
                        <CountSpan>{v.count}</CountSpan>
                        <UnitSpan>{v.unit}</UnitSpan>
                    </CardText>
                </Card>
            })
        }
    </CardWrap>
}

export default CardList;