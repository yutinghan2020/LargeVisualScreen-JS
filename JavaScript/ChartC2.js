function initChartC2(){
	let myChart = echarts.init(document.getElementById('chart-c2'));

	const colorList = ["#9E87FF", '#c5ec92', '#fe9a8b', '#F56948', '#9E87FF'];
	let option = {
		tooltip: {
         	trigger: 'axis',
	        borderWidth: 0,
	        backgroundColor: 'rgba(245,245,245,0.3)',
         	extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
         	

        },
	    grid: {
	    	top: '10%',
	    	bottom:'17%',
	    	left:"5%",
	    	right:"3%",
	    },
	    xAxis:[
	    	{
	    		type:"category",
	    		data:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
	    		axisLine: {
		            lineStyle: {
		                color:'rgba(255,255,255,0.1)'
		            }
		        },
		        axisTick: {
		            show: false
		        },
		        axisLabel: {
		            interval: 0,
		            textStyle: {
		                color: 'rgba(255,255,255,0.6)'
		            },
		            fontSize: 12,// 默认x轴字体大小
		            margin: 10// margin:文字到x轴的距离
		        },
		        axisPointer:{
		        	label:{
		        		padding:[0,0,10,0],
		        		margin: 10,
		        		fontSize:12,
		        		backgroundColor:{
		        			type: 'linear',
		                    x: 0,
		                    y: 0,
		                    x2: 0,
		                    y2: 1,
		                    colorStops:[
		                    	{offset:0, color:"#fff"},
		                    	{offset:0.86, color:"#fff"},
		                    	{offset:0.86, color:"#33c0cd"},
		                    	{offset:1, color:"#33c0cd"},
		                    ],
		                    global: false
		        		}
		        	}
		        },
		        boundaryGap:false
	    	}
	    ],
	    yAxis:[
	    	{
	    		type:"value",
	    		axisTick:{
	    			show: false
	    		},
	    		axisLine:{
	    			show: true,
		            lineStyle: {
		                color: 'rgba(255,255,255,0.1)'
		            }
	    		},
	    		axisLabel: {
		            textStyle: {
		                color: 'rgba(255,255,255,0.6)'
		            }
		        },
		        splitLine: {
		            show: false
		        }
	    	}
	    ],
	    series:[
	    	{
	    		name:"标准产品",
	    		type:"line",
	    		data:[30,10,15,52,65,45,59,62.5,64.8,59.8,75.2,33.6],
	    		symbolSize: 1,
            	symbol: 'circle',
            	smooth: true,
            	showSymbol: false,
	            lineStyle: {
	                width: 5,
	                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
	                        offset: 0,
	                        color: '#9effff'
	                    },
	                    {
	                        offset: 1,
	                        color: '#9E87FF'
	                    }
	                ]),
	                shadowColor: 'rgba(158,135,255, 0.3)',
	                shadowBlur: 10,
	                shadowOffsetY: 20
	            },
	            itemStyle: {
	                normal: {
	                    color: colorList[0],
	                    borderColor: colorList[0]
	                }
	            }
	    	},
	    	{
	    		name: '定制产品',
	            type: 'line',
	            data: [19.2, 12, 11, 14, 25, 16, 10, 15, 30.5, 18.6, 20.8, 25],
	            symbolSize: 1,
	            symbol: 'circle',
	            smooth: true,
	            showSymbol: false,
	            lineStyle: {
	                width: 5,
	                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
	                        offset: 0,
	                        color: '#73DD39'
	                    },
	                    {
	                        offset: 1,
	                        color: '#c5ec92'
	                    }
	                ]),
	                shadowColor: 'rgba(115,221,255, 0.3)',
	                shadowBlur: 10,
	                shadowOffsetY: 20
	            },
	            itemStyle: {
	                normal: {
	                    color: "#73DD39",
	                    borderColor: colorList[1]
	                }
	            }
	    	},
	    	{
	            name: '产品实施',
	            type: 'line',
	            data: [15, 16.8, 18.6, 20, 20, 18.9, 18.5, 17.6, 20.9, 16.3, 11.2, 19.5],
	            symbolSize: 1,
	            symbol: 'circle',
	            smooth: true,
	            showSymbol: false,
	            lineStyle: {
	                width: 5,
	                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
	                        offset: 0,
	                        color: '#fe9a'
	                    },
	                    {
	                        offset: 1,
	                        color: '#fe9a8b'
	                    }
	                ]),
	                shadowColor: 'rgba(254,154,139, 0.3)',
	                shadowBlur: 10,
	                shadowOffsetY: 20
	            },
	            itemStyle: {
	                normal: {
	                    color: colorList[2],
	                    borderColor: colorList[2]
	                }
	            }
	        },
	    	{
	            name: '产品服务',
	            type: 'line',
	            data: [10, 8.8, 12.6, 15.8, 16.8, 10.9, 13.5, 14.6, 12.9, 10.3, 8.2, 9.5],
	            symbolSize: 1,
	            symbol: 'circle',
	            smooth: true,
	            showSymbol: false,
	            lineStyle: {
	                width: 5,
	                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
	                        offset: 0,
	                        color: '#F569'
	                    },
	                    {
	                        offset: 1,
	                        color: '#F56948'
	                    }
	                ]),
	                shadowColor: 'rgba(254,154,139, 0.3)',
	                shadowBlur: 10,
	                shadowOffsetY: 20
	            },
	            itemStyle: {
	                normal: {
	                    color: colorList[3],
	                    borderColor: colorList[3]
	                }
	            }
	        }
	    ]
	}

	myChart.setOption(option);
	autoHover(myChart, option, 12, 3000);

	return myChart
	
}