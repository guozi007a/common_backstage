import { FC, useRef, useEffect } from "react";
import * as echarts from 'echarts/core';
import {
    TitleComponent,
    TitleComponentOption,
    TooltipComponent,
    TooltipComponentOption,
    GridComponent,
    GridComponentOption
} from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
    TitleComponent,
    TooltipComponent, 
    GridComponent, 
    BarChart, 
    CanvasRenderer
]);

type EChartsOption = echarts.ComposeOption<TooltipComponentOption 
    | GridComponentOption 
    | BarSeriesOption
    | TitleComponentOption
>;

const option: EChartsOption = {
    title: {
        text: '售后服务'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }
    ]
};

const AfterMarketChart: FC = () => {

    const chartRef = useRef(null);

    useEffect(() => { 
        const myChart = echarts.init(chartRef.current);
        myChart.setOption(option);
        
        const handleResize = () => {
            myChart.resize();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return <>
        <div ref={chartRef} style={{ width: "40%", minWidth: 400, height: 400, marginTop: 20 }}></div>
    </>
}

export default AfterMarketChart;