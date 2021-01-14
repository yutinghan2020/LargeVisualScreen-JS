## 基于JavaScript、ECharts的可视化大屏
基于JavaScript、百度ECharts图表插件制作的可视化大屏，带有自动轮播效果功能。


* * *
#### git地址
` https://github.com/yutinghan2020/LargeVisualScreen-JS.git`
#### 技术栈
* JavaScript
* ECharts
* CSS 

#### 运行
不用安装其他依赖，只需要将代码下载到本地，然后在目录中找到pages文件夹，最后直接用浏览器打开文件夹里面的main.html页面即可。
#### 文件目录
**assembly：** 这里主要是放置ECharts相关的第三方插件。
**CSS：** 这是放置页面样式的地方。
**images：** 放置页面的图片，可将背景图片放在这里，然后引用。
**JavaScript：** 放置公用方法脚本和各个图表模块方法，然后再主页面中引入调用。
**pages：** 放置主页面的文件夹，如果有多个页面可以放在此文件夹里。
**video：** 放置视频文件。
#### 主要代码
由于图表模块已经抽离，所以需要将各个图表的初始化方法单独引入页面中；

    <script src="../assembly/echarts/tooltip.js"></script>
	<script src="../JavaScript/ChartR1.js"></script>
	<script src="../JavaScript/ChartR2.js"></script>
	<script src="../JavaScript/ChartR3.js"></script>
	<script src="../JavaScript/ChartC2.js"></script>
	<script src="../JavaScript/ChartL2.js"></script>
	<script src="../JavaScript/ChartL1-1.js"></script> 

然后在主页面中调用各个图表初始化的方法；

    let ChartC2=initChartC2();
    let ChartR2=initChartR2();
    let ChartR3=initChartR3();
    let ChartL2=initChartL2();
    let ChartL11=initChartL11();
    let  ChartR11=initChartR11();
    let  ChartR12=initChartR12();
    let  ChartR13=initChartR13()；
    
给图表添加自适应重载方法；

    window.onresize = function () {
        ChartC2.resize();
        ChartR2.resize();
        ChartR3.resize();
        ChartL2.resize();
        ChartL11.resize();
        ChartR11.resize();
        ChartR12.resize();
        ChartR13.resize();
    }

* * *

注意：ECharts的水球图需要单独引入水球图组件（echarts-liquidfill.min.js）

**如有不同可以相互交流。**
