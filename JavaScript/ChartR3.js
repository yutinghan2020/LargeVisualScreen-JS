function initChartR3(){
	let myChart = echarts.init(document.getElementById('chart-r3'));
	let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF', "#7b68ee"];
	let chartData = [
		{ name: "货品采购", value: 13211, },
	    { name: "公司团建", value: 42111, },
	    { name: "差旅支出", value: 81711, },
	    { name: "客户招待", value: 91711, },
	    { name: "其他费用", value: 121711, }
	];
	let arrName = [];
	let arrValue = [];
	let sum = 0;
	let pieSeries = [],
	    lineYAxis = [];

	// 数据处理
	chartData.forEach((v, i) => {
	    arrName.push(v.name);
	    arrValue.push(v.value);
	    sum = sum + v.value;
	})

	// 图表option整理
	chartData.forEach((v, i) => {
	    pieSeries.push({
	        name: '构成',
	        type: 'pie',
	        clockWise: false,
	        hoverAnimation: false,
	        radius: [75 - i * 15 + '%', 67 - i * 15 + '%'],
	        center: ["30%", "50%"],
	        label: {
	            show: false
	        },
	        data: [{
	            value: v.value,
	            name: v.name
	        }, {
	            value: sum - v.value,
	            name: '',
	            itemStyle: {
	                color: "rgba(0,0,0,0)"
	            }
	        }]
	    });
	    pieSeries.push({
	        name: '',
	        type: 'pie',
	        silent: true,
	        z: 1,
	        clockWise: false, //顺时加载
	        radius: [75 - i * 15 + '%',67 - i * 15 + '%'],
	        center: ["30%", "50%"],
	        label: {
	            show: false
	        },
	        data: [{
	            value: 7.5,
	            itemStyle: {
	                //color: "rgba(0,12,49,0.5)"
	                color:"rgba(255,255,255,0.3)"
	            }
	        }, {
	            value: 2.5,
	            name: '',
	            itemStyle: {
	                color: "rgba(0,0,0,0)"
	            }
	        }]
	    });
	    v.percent = (v.value / sum * 100).toFixed(1) + "%";
	    lineYAxis.push({
	        value: i,
	        textStyle: {
	            rich: {
	                circle: {
	                    color: color[i],
	                    padding: [0, 5]
	                },
	                name:{ color: color[i] },
	                unit:{ color: color[i] }
	            }
	        }
	    });
	})

	option = {
	    color: color,
	    grid: {
	        top: '15%',
	        bottom: '54%',
	        left: "50%",
	        containLabel: false
	    },
	    yAxis: [{
	        type: 'category',
	        inverse: true,
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            formatter: function(params) {
	                let item = chartData[params];
	                return '{line|----}{circle|●}{name|'+ item.name +'}{percent|'+item.percent+'}{value|'+ item.value+'}{unit|元}'
	            },
	            interval: 0,
	            inside: true,
	            verticalAlign: "middle",
	            textStyle: {
	                color: "#333",
	                fontSize: 14,
	                rich: {
	                    line: {
	                        width: -50,
	                        height: 10,
	                    },
	                    name: { fontSize: 13 },
	                    percent:{
	                        color: '#EEE',
	                        fontSize: 13,
	                        padding: [0, 10, 0, 10]
	                    },
	                    value: {
	                        color: '#EEE',
	                        fontSize: 14,
	                        fontWeight: 500,
	                        padding: [0, 5, 0, 0]
	                    },
	                    unit: { fontSize: 13 }
	                }
	            },
	            show: true
	        },
	        data: lineYAxis
	    }],
	    xAxis: [{
	        show: false
	    }],
	    series: pieSeries
	};

	myChart.setOption(option);
	return myChart
}