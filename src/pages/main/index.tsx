/** 首页 */
import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as echarts from 'echarts/core';
import {
    BarChart,
    // 系列类型的定义后缀都为 SeriesOption
    BarSeriesOption,
    LineChart,
    LineSeriesOption
} from 'echarts/charts';
import {
    TitleComponent,
    // 组件类型的定义后缀都为 ComponentOption
    TitleComponentOption,
    TooltipComponent,
    LegendComponent,
    TooltipComponentOption,
    GridComponent,
    GridComponentOption,
    // 数据集组件
    DatasetComponent,
    DatasetComponentOption,
    // 内置数据转换器组件 (filter, sort)
    TransformComponent,
    VisualMapComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import GitCornerSvg from './GitCornerSvg';
import CardList from './CardList';

type ECOption = echarts.ComposeOption<
    | BarSeriesOption
    | LineSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | DatasetComponentOption
>;

    // 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    VisualMapComponent,
    LegendComponent,
    BarChart,
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);

const MainWrap = styled.main`
    position: relative;
`

const Main: FC = () => {

    const chartRef = useRef(null);

    const chartOptions: ECOption = {
        title: {
            text: '本周经营数据一览'
        },
        legend: {
            data: ['商户数量', '订单数量', '项目数量', '交易总额', '客户数量', '产品存量', '售后总量', '原料存余'],
            top: 30
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '商户数量',
                type: 'line',
                smooth: true,
                data: [158, 154, 166, 173, 168, 160, 168]
            },
            {
                name: '订单数量',
                type: 'line',
                smooth: true,
                data: [433, 512, 510, 598, 601, 647, 692]
            },
            {
                name: '项目数量',
                type: 'line',
                smooth: true,
                data: [17, 15, 10, 24, 32, 28, 23]
            },
            {
                name: '交易总额',
                type: 'line',
                smooth: true,
                data: [1520.4, 1592, 1583.6, 1672, 1741.5, 1806.3, 1860.2]
            },
            {
                name: '客户数量',
                type: 'line',
                smooth: true,
                data: [1324, 1376, 1320, 1400, 1421, 1409, 1438]
            },
            {
                name: '产品存量',
                type: 'line',
                smooth: true,
                data: [455.5, 432.7, 467.6, 320.9, 337.6, 452, 498.8]
            },
            {
                name: '售后总量',
                type: 'line',
                smooth: true,
                data: [276, 224, 282, 357, 313, 328, 395]
            },
            {
                name: '原料存余',
                type: 'line',
                smooth: true,
                data: [527, 463, 429.8, 676.4, 724.9, 765.1, 816.4]
            },
        ]
    };

    useEffect(() => { 
        
        const myChart = echarts.init(chartRef.current);
        myChart.setOption(chartOptions);

        const handleResize = () => {
            myChart.resize();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return <MainWrap>
        <GitCornerSvg />
        <CardList />
        <div ref={chartRef} style={{ width: '80%', height: 600, marginTop: 40 }}></div>
    </MainWrap>
}

export default Main;