function initChartR2(){
	let myChart = echarts.init(document.getElementById('chart-r2'));

	let option = {
		tooltip: {
	        trigger: 'axis',
	        borderWidth: 0,
	        backgroundColor: 'rgba(245,245,245,0.3)',
	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	        }
        },
        grid: {
          	top: '20%',
	    	bottom:15,
	    	left:20,
	    	right:25,
          	containLabel: true
        },
        legend:{
        	data:["客户跟进", "客户挖掘", "成交客户"],
        	right:10,
        	top:12,
        	textStyle: {
	            color: "#fff"
	        },
	        itemWidth: 12,
	        itemHeight: 10,
        },
        xAxis:{
        	type: 'category',
          	data: ['张三','李四','王五','小明','王小虎','李二狗','张二牛'],
          	axisLine:{
          		lineStyle:{
          			color:'rgba(255,255,255,0.1)'
          		}
          	},
          	axisLabel:{
          		textStyle:{
          			fontFamily:"Microsoft YaHei",
          			color: 'rgba(255,255,255,0.6)'
          		}
          	}
        },
        yAxis:{
        	name:"次",
        	type: 'value',
        	nameTextStyle: {
                color: 'rgba(255,255,255,0.6)'
            },
	        axisLine: {
	            lineStyle: {

	              	color: 'rgba(255,255,255,0.1)'
	            }
	       	},
	        splitLine: {
	            show: true,
	            lineStyle: {
	              	color: 'rgba(255,255,255,0.1)'
	            }
	        },
	        axisLabel:{
          		textStyle:{
          			fontFamily:"Microsoft YaHei",
          			color: 'rgba(255,255,255,0.6)'
          		}
          	}
        },
        series: [
	        {
	          name: '客户跟进',
	          type: 'bar',
	          barWidth: '15%',
	          itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#fccb05'
	                }, {
	                    offset: 1,
	                    color: '#f5804d'
	                }]),
	                barBorderRadius: 12,
	            },
	          },
	          data: [400, 400, 300, 300, 300, 400, 400]
	        },
	        {
	          name: '客户挖掘',
	          type: 'bar',
	          barWidth: '15%',
	          itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#8bd46e'
	                }, {
	                    offset: 1,
	                    color: '#09bcb7'
	                }]),
	                barBorderRadius: 11,
	            }
	            
	          },
	          data: [400, 500, 500, 500, 500, 400,400]
	        },
	        {
	          name: '成交客户',
	          type: 'bar',
	          barWidth: '15%',
	          itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#248ff7'
	                }, {
	                    offset: 1,
	                    color: '#6851f1'
	                }]),
	            barBorderRadius: 11,
	            }
	          },
	          data: [400, 600, 700, 700, 1000, 400, 400]
	        }
        ]
	}

	myChart.setOption(option);
	autoHover(myChart, option, 7, 3000);
	return myChart
	
}