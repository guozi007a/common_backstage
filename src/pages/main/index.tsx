/** 首页 */
import { FC, useEffect, useRef } from 'react';
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

const Main: FC = () => {

    const chartRef = useRef(null);

    const chartOptions: ECOption = {
        title: {
            text: 'Stacked Line'
        },
        series: [
            {
                name: 'one',
                type: 'line',
                data: [1, 2, 3, 0],
                stack: 'all'
            },
            {
                name: 'two',
                type: 'line',
                data: [4, 5, 6, 2],
                stack: 'all'
            }
        ],
        xAxis: {
            type: 'category',
            data: ['业务一', '业务二', '业务三', '业务四']
        },
        yAxis: {
            type: 'value'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['one', 'two']
        }
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

    return <>
        <h3>首页</h3>
        <div ref={chartRef} style={{width: '50%', height: 300}}></div>
    </>
}

export default Main;