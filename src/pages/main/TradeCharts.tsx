import { FC, useRef, useEffect } from "react";
import * as echarts from "echarts/core";
import { TitleComponent, TitleComponentOption, TooltipComponent, TooltipComponentOption, LegendComponent, LegendComponentOption } from "echarts/components";
import { PieChart, PieSeriesOption } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout
]);

type EChartsOption = echarts.ComposeOption<TitleComponentOption
    | TooltipComponentOption
    | LegendComponentOption
    | PieSeriesOption
>;

const option: EChartsOption = {
	title: {
		text: "金额相关",
		subtext: "交易总额-产品存量-原料存余",
		left: "center",
	},
	tooltip: {
		trigger: "item",
	},
	legend: {
		orient: "vertical",
		left: "left",
	},
	series: [
		{
			type: "pie",
			radius: "50%",
			data: [
				{ value: 1048, name: "交易总额" },
				{ value: 735, name: "产品存量" },
				{ value: 580, name: "原料存余" },
			],
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: "rgba(0, 0, 0, 0.5)",
				},
			},
		},
	],
};

const TradeCharts: FC = () => {

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
	}, []);

	return (
		<>
			<div ref={chartRef} style={{ width: "40%", minWidth: 400, height: 400, marginTop: 20 }}></div>
		</>
	);
};

export default TradeCharts;
