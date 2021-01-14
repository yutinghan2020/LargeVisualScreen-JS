function initChartR11(){
	let aqiData = 5000;
	let myChart = echarts.init(document.getElementById('chart-r1-1'));

	let option = {
	    title: {
	        text: aqiData,
	        textStyle: {
	            fontSize: 24,
	            fontWeight: 'normal',
	            color: 'rgb(124,190,255)'
	        },
	        x: 'center',
	        y: '30%'
	    },
	    graphic: [{
	        type: 'group',
	        left: 'center',
	        top: '75%',
	        children: [{
	            type: 'text',
	            style: {
	                fill: '#fff',
	                text: '库存总量',
	                fontSize: 18
	            }
	        }]
	    }],
	    series: [{
	        type: 'liquidFill',
	        waveAnimation: 10,
	        data: [0.35, 0.3, 0.35],
	        center:["center","40%"],
	        //color: ["rgba(77,95,202,.8)", "rgba(79,71,183,.5)", "rgba(79,71,183,.2)"],
	        color: {
	            type: 'linear',
	            x: 0,
	            y: 0,
	            x2: 0,
	            y2: 1,
	            colorStops: [{
	                offset: 1,
	                color: 'rgba(0, 155, 219, .2)'
	            }, {
	                offset: 0.5,
	                color: 'rgba(0, 155, 219, .5)'
	            }, {
	                offset: 0,
	                color: 'rgba(0, 155, 219, 1)'
	            }],
	            globalCoord: false
	        },
	        amplitude: 5,
	        radius: '70%',
	        backgroundStyle: {
	            color: {
	                type: 'radial',
	                x: 0.5,
	                y: 0.5,
	                r: 0.55,
	                colorStops: [{
	                    offset: 0.5,
	                    color: 'rgba(0, 155, 219, .01)' // 0% 处的颜色
	                }, {
	                    offset: 0.75,
	                    color: 'rgba(0, 155, 219, .2)' // 100% 处的颜色
	                }, {
	                    offset: 0.95,
	                    color: 'rgba(0, 155, 219, .6)' // 100% 处的颜色
	                }],
	                globalCoord: false // 缺省为 false
	            }
	        },
	        outline: {
	            show: false
	        },
	        label: {
	            normal: {
	                formatter: ""
	            }
	        }
	    }]
	};
	myChart.setOption(option);
	return myChart
}
function initChartR12(){
	let aqiData = 3500;
	let myChart = echarts.init(document.getElementById('chart-r1-2'));

	let option = {
	    title: {
	        text: aqiData,
	        textStyle: {
	            fontSize: 24,
	            fontWeight: 'normal',
	            color: 'rgb(124,190,255)'
	        },
	        x: 'center',
	        y: '30%'
	    },
	    graphic: [{
	        type: 'group',
	        left: 'center',
	        top: '75%',
	        children: [{
	            type: 'text',
	            style: {
	                fill: '#fff',
	                text: '出库总量',
	                fontSize: 18
	            }
	        }]
	    }],
	    series: [{
	        type: 'liquidFill',
	        waveAnimation: 10,
	        data: [0.35, 0.3, 0.35],
	        center:["center","40%"],
	        color: {
	            type: 'linear',
	            x: 0,
	            y: 0,
	            x2: 0,
	            y2: 1,
	            colorStops: [{
	                offset: 1,
	                color: 'rgba(31, 222, 225, .1)'
	            }, {
	                offset: 0.5,
	                color: 'rgba(31, 222, 225, .5)'
	            }, {
	                offset: 0,
	                color: 'rgba(31, 222, 225, 1)'
	            }],
	            globalCoord: false
	        },
	        amplitude: 5,
	        radius: '70%',
	        backgroundStyle: {
	            color: {
	                type: 'radial',
	                x: 0.5,
	                y: 0.5,
	                r: 0.55,
	                colorStops: [{
	                    offset: 0.5,
	                    color: 'rgba(31, 222, 225, .01)' // 0% 处的颜色
	                }, {
	                    offset: 0.75,
	                    color: 'rgba(31, 222, 225, .2)' // 100% 处的颜色
	                }, {
	                    offset: 0.95,
	                    color: 'rgba(31, 222, 225, .6)' // 100% 处的颜色
	                }],
	                globalCoord: false // 缺省为 false
	            }
	        },
	        outline: {
	            show: false
	        },
	        label: {
	            normal: {
	                formatter: ""
	            }
	        }
	    }]
	};
	myChart.setOption(option);
	return myChart
}
function initChartR13(){
	let aqiData = 1500;
	let myChart = echarts.init(document.getElementById('chart-r1-3'));

	let option = {
	    title: {
	        text: aqiData,
	        textStyle: {
	            fontSize: 24,
	            fontWeight: 'normal',
	            color: 'rgb(124,190,255)'
	        },
	        x: 'center',
	        y: '30%'
	    },
	    graphic: [{
	        type: 'group',
	        left: 'center',
	        top: '75%',
	        children: [{
	            type: 'text',
	            style: {
	                fill: '#fff',
	                text: '剩余库存',
	                fontSize: 18
	            }
	        }]
	    }],
	    series: [{
	        type: 'liquidFill',
	        waveAnimation: 10,
	        data: [0.35, 0.3, 0.35],
	        center:["center","40%"],
	        color: {
	            type: 'linear',
	            x: 0,
	            y: 0,
	            x2: 0,
	            y2: 1,
	            colorStops: [{
	                offset: 1,
	                color: 'rgba(212, 252, 125, .2)'
	            }, {
	                offset: 0.5,
	                color: 'rgba(2, 193, 131, .5)'
	            }, {
	                offset: 0,
	                color: 'rgba(2, 193, 131, 1)'
	            }],
	            globalCoord: false
	        },
	        amplitude: 5,
	        radius: '70%',
	        backgroundStyle: {
	            color: {
	                type: 'radial',
	                x: 0.5,
	                y: 0.5,
	                r: 0.55,
	                colorStops: [{
	                    offset: 0.5,
	                    color: 'rgba(2, 193, 131, .01)' // 0% 处的颜色
	                }, {
	                    offset: 0.75,
	                    color: 'rgba(2, 193, 131, .2)' // 100% 处的颜色
	                }, {
	                    offset: 0.95,
	                    color: 'rgba(2, 193, 131, .6)' // 100% 处的颜色
	                }],
	                globalCoord: false // 缺省为 false
	            }
	        },
	        outline: {
	            show: false
	        },
	        label: {
	            normal: {
	                formatter: ""
	            }
	        }
	    }]
	};
	myChart.setOption(option);
	return myChart
}