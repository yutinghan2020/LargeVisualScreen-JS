function initChartL11(){
	let myChart = echarts.init(document.getElementById('chart-l1-1'));
	let month=[];
	var colorList = [
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
    '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
    '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
    ];
	let datas=[
		{name:"张三", list:[12.5,15.9,16.4,20.1,19.3,12.3,16.7,18.2,16.6,14,19,13.3]},
		{name:"李四", list:[16.5,18.9,20.4,19.1,19.7,13.3,17.7,19.2,12.6,15,18.9,17.3]},
		{name:"王五", list:[8.5,9.9,15.4,15.1,13.3,11.3,14.7,15.2,10.6,12,17.3,18.3]},
		{name:"王二狗", list:[10.5,11.9,12.5,13.3,15.5,14,16,17.1,15,17.6,16.6,15]},
		{name:"李狗蛋", list:[8.8,7.6,10,14,16.3,17.5,18,17.6,14.9,15,20.6,11.1]},
		{name:"王小虎", list:[12.5,15.1,13.3,15,14.8,15,14,16.8,14.7,15.6,18.9,20]},		
		{name:"小明", list:[15.2,13.5,14.8,14.4,20.5,21.1,18.4,17.6,19.5,15,21,20.3]},
		{name:"小红", list:[11.5,10,12.2,13.2,15.6,19.8,20.9,17,17.5,17,18.8,14.5]},
		{name:"李二牛", list:[12,15.6,14.5,15.8,20.5,18.2,15.2,17.2,13.3,13.4,16.4,15.8]},
	]
	let data=[],jdData=[];
	for (var i = 0; i <= 11; i++) {
		month.push((i+1)+"月");

		let monthData=[],nameData=[];
		datas.forEach((item)=>{
			nameData.push(item.name);
			monthData.push(item.list[i])
		});
		jdData.push(nameData)
		data.push(monthData)
	}

	option = {
	    baseOption: {
	        timeline: {
	         	show:false,
	            data: month,
	            axisType: 'category',
	            autoPlay: true,
	            playInterval: 6000, //播放速度
	         },
	        title: {
	             right: 20,
	             textStyle: {
	                 fontSize: 24,
	                 color: '#ff8800' //标题字体颜色
	             }
	         },
	         calculable: true,
	         grid: {
	             left: 60,
	             right: 30,
	             bottom: 10,
	             top: 50,
	             containLabel: true
	         },
	         label: {
	             normal: {
	                 textStyle: {
	                     color: 'red'
	                 }
	             }
	         },
	         yAxis: [{

	             nameGap: 50,
	             offset: '37',
	             'type': 'category',
	             interval: 50,
	             //inverse: ture,//图表倒叙或者正序排版
	             data: '',
	             nameTextStyle: {
	                 color: 'red'
	             },


	            axisLabel: {
	                show: false,
	             },
	             axisLine: {

	                 lineStyle: {
	                     color: 'rgba(255,255,255,0.1)' //Y轴颜色
	                 },
	             },
	             splitLine: {
	                 show: false,
	                 lineStyle: {
	                     color: 'rgba(255,255,255,0.1)'
	                 }
	             },

	         }],
	         xAxis: [{
	             'type': 'value',
	             'name': '',

	             splitNumber: 8, //轴线个数
	             
	             axisLine: {
	                 lineStyle: {
	                     color: 'rgba(255,255,255,0.1)' //X轴颜色
	                 }
	             },
	             axisLabel: {
	                 formatter: '{value} ',
	                 color: 'rgba(255,255,255,0.6)'
	             },
	             splitLine: {
	                 show: true,
	                 lineStyle: {
	                    color: 'rgba(255,255,255,0.1)'
	                 }
	             },
	         }],
	         series: [{
	                 'name': '',
	                 'type': 'bar',
	                 markLine: {
	                     label: {
	                         normal: {
	                             show: false
	                         }
	                     },
	                     lineStyle: {
	                         normal: {
	                             color: 'red',
	                             width: 3
	                         }
	                     },
	                 },
	                 label: {
	                     normal: {
	                         show: true,
	                         position: 'right', //数值显示在右侧
	                         formatter: '{c}'
	                     }
	                 },
	                 itemStyle: {
	                     normal: {
	                        color: function(params) {        
	                          	return colorList[jdData[0].indexOf(params.name)];
	                        },

	                     }
	                 },
	             },

	             {
	                 'name': '',
	                 'type': 'bar',
	                 markLine: {
	                     label: {
	                         normal: {
	                             show: false
	                         }
	                     },
	                     lineStyle: {
	                         
	                         normal: {
	                             color: 'red',
	                             width: 3
	                         }
	                     },
	                 },
	                 barWidth: '50%',
	                 barGap: '-100%',
	                 label: {
	                     normal: {
	                         show: true,
	                         fontSize: 13,  //标签国家字体大小
	                         position: 'left', //
	                         formatter: function(p) {
	                            return p.name;
	                         },
	                         
	                     }
	                 },
	                itemStyle: {
	                    normal: {
	                        color: function(params) {
								return colorList[jdData[0].indexOf(params.name)];
	                        },

	                    }
	                },
	             }
	         ],

	         animationEasingUpdate: 'quinticInOut',
	         animationDurationUpdate: 2000, //动画效果
	     },

	     options: []
	 };
	for (var n = 0; n < month.length; n++) {

	     var res = [];
	     //alert(jdData.length);
	     for (j = 0; j < data[n].length; j++) {
	         res.push({
	             name: jdData[n][j],
	             value: data[n][j]
	         });

	     }

	     res.sort(function(a, b) {
	         return b.value - a.value;
	     }).slice(0, 6);

	     res.sort(function(a, b) {
	         return a.value - b.value;
	     });


	     var res1 = [];
	     var res2 = [];
	     //console.log(res);
	     for (t = 0; t < res.length; t++) {
	         res1[t] = res[t].name;
	         res2[t] = res[t].value;
	     }
	     option.options.push({
	         title: {
	            text: month[n]
	         },
	         yAxis: {
	             data: res1,
	         },
	         series: [{
	             data: res2
	         }, {
	             data: res2
	         }]
	     });
	}

	myChart.setOption(option);
	return myChart
}
