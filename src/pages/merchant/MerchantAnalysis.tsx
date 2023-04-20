import { FC, useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import {
    TitleComponent,
    TitleComponentOption,
    TooltipComponent,
    TooltipComponentOption,
    LegendComponent,
    LegendComponentOption,
    VisualMapComponent,
    VisualMapComponentOption,
    GeoComponent,
    GeoComponentOption
} from 'echarts/components';
import {
    PieChart,
    PieSeriesOption,
    MapChart,
    MapSeriesOption
} from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import china from '@/json/CHINA.json';


echarts.use([
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    VisualMapComponent,
    GeoComponent,
    PieChart,
    MapChart,
    CanvasRenderer,
    LabelLayout
]);

type EChartsOption = echarts.ComposeOption<
    | TitleComponentOption
    | TooltipComponentOption
    | LegendComponentOption
    | PieSeriesOption
    | VisualMapComponentOption
    | GeoComponentOption
    | MapSeriesOption
>;

const MerchantAnalysis: FC = () => {

    const provideRef = useRef(null);
    const chinaRef = useRef(null);

    useEffect(() => {

        const option: EChartsOption = {
            title: {
                text: '商户月供货量分析',
                left: 'center'
            },
            legend: {
                top: 'bottom',
                data: [
                    '0-5',
                    '5-10',
                    '10-20',
                    '20-50',
                    '50-100',
                    '100-200',
                    '200-500',
                    '>=500',
                ]
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}万元: {c}家'
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [50, 250],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        { value: 40, name: '0-5' },
                        { value: 38, name: '5-10' },
                        { value: 32, name: '10-20' },
                        { value: 30, name: '20-50' },
                        { value: 28, name: '50-100' },
                        { value: 26, name: '100-200' },
                        { value: 22, name: '200-500' },
                        { value: 18, name: '>=500' }
                    ]
                }
            ]
        };

        const myChart = echarts.init(provideRef.current);
        myChart.setOption(option);
    }, [])

    useEffect(() => { 

        echarts.registerMap('CHINA', JSON.parse(JSON.stringify(china)));

        const option: EChartsOption = {
            title: {
                text: '全国商户分布',
                left: 'center',
                top: '20px'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br />{b}  {c}'
            },
            visualMap: {
                min: 0,
                max: 50,
                text: ['High', 'Low'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered']
                },
                right: '20%'
            },
            series: [
                {
                    name: '商户分布',
                    type: 'map',
                    map: 'CHINA',
                    label: {
                        show: false
                    },
                    data: [
                        { name: '北京', value: 12 },
                        { name: '河南', value: 22 },
                        { name: '浙江', value: 18 },
                        { name: '黑龙江', value: 0 },
                        {name: '江苏', value: 8},
                        {name: '宁夏回族自治区', value: 2},
                        {name: '西藏自治区', value: 17},
                        { name: '台湾', value: 1 },
                        { name: '内蒙古自治区', value: 35 },
                        {name: '四川', value: 29},
                    ],
                    nameMap: {
                        '新疆': '新疆维吾尔自治区',
                        '西藏': '西藏自治区',
                        '广西': '广西壮族自治区',
                        '宁夏': '宁夏回族自治区',
                        '内蒙古': '内蒙古自治区',
                        '香港': '香港特别行政区',
                        '澳门': '澳门特别行政区',
                    }
                }
            ]
        };

        const myChart = echarts.init(chinaRef.current);
        myChart.setOption(option);
    }, [])

    return <>
        <div ref={provideRef} style={{width: '80%', height: 600}}></div>
        <div ref={chinaRef} style={{width: '80%', height: 650}}></div>
    </>
}

export default MerchantAnalysis;