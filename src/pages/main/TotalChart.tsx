import { FC, useRef, useEffect } from "react";
import * as echarts from 'echarts/core';
import { LineChart, LineSeriesOption } from "echarts/charts";
import {
    TitleComponent,
    TitleComponentOption,
    TooltipComponent,
    TooltipComponentOption
} from "echarts/components";
import { CanvasRenderer } from 'echarts/renderers';
import { LabelLayout, UniversalTransition } from 'echarts/features';

type ECOption = echarts.ComposeOption<
    | LineSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    >;

echarts.use([
    LineChart,
    TitleComponent,
    TooltipComponent,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);

const option: ECOption = {
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
            data: [158, 154, 166, 173, 168, 160, 168],
        },
        {
            name: '订单数量',
            type: 'line',
            smooth: true,
            data: [433, 512, 510, 598, 601, 647, 692],
        },
        {
            name: '项目数量',
            type: 'line',
            smooth: true,
            data: [17, 15, 10, 24, 32, 28, 23],
        },
        {
            name: '交易总额',
            type: 'line',
            smooth: true,
            data: [1520.4, 1592, 1583.6, 1672, 1741.5, 1806.3, 1860.2],
        },
        {
            name: '客户数量',
            type: 'line',
            smooth: true,
            data: [1324, 1376, 1320, 1400, 1421, 1409, 1438],
        },
        {
            name: '产品存量',
            type: 'line',
            smooth: true,
            data: [455.5, 432.7, 467.6, 320.9, 337.6, 452, 498.8],
        },
        {
            name: '售后总量',
            type: 'line',
            smooth: true,
            data: [276, 224, 282, 357, 313, 328, 395],
        },
        {
            name: '原料存余',
            type: 'line',
            smooth: true,
            data: [527, 463, 429.8, 676.4, 724.9, 765.1, 816.4],
        },
    ]
}

const TotalChart: FC = () => {

    const chartRef = useRef(null);

    useEffect(() => {
        
        const totalChart = echarts.init(chartRef.current);
        chartRef.current && totalChart.setOption(option);

        const handleResize = () => {
            totalChart.resize();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chartRef.current = null;
        }
    }, [])

    return <>
        <div ref={chartRef} style={{width: '80%', height: 600, marginTop: 40}}></div>
    </>
}

export default TotalChart;