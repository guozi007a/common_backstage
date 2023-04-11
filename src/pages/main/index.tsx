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
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent
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
    BarChart,
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);

const Main: FC = () => {

    const chartRef = useRef(null);

    const chartOptions: ECOption = {
        xAxis: {
            type: 'category',
            data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
        },
        yAxis: {},
        series: [
            {
                type: 'bar',
                name: '2015',
                data: [89.3, 92.1, 94.4, 85.4]
            },
            {
                type: 'bar',
                name: '2016',
                data: [95.8, 89.4, 91.2, 76.9]
            },
            {
                type: 'bar',
                name: '2017',
                data: [97.7, 83.1, 92.5, 78.1]
            }
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

    return <>
        <h3>首页</h3>
        <div ref={chartRef} style={{width: '50%', height: 300}}></div>
    </>
}

export default Main;