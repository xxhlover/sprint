<template>
	<div class="analysis-comp">
		<div id="analysis-echarts" :style="{width: '100%', height: '100%'}">
		</div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	export default{
		data(){
			return{
				
			}
		},
		mounted(){
			this.drawing()
		},
		methods:{
			drawing(){
				var myChart = echarts.init(document.getElementById('analysis-echarts'));
		        var option = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'cross',
			            label: {
			                backgroundColor: '#F3F3F3'
			            }
			        }
			    },
			    legend: {
			        data:['警告分数','点评总分数','表扬分数']
			    },
			    toolbox: {
			        feature: {
			            saveAsImage: {}
			        }
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['周一','周二','周三','周四','周五','周六','周日']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'警告分数',
			            type:'line',
			            stack: '总量',
			            areaStyle: {},
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'点评总分数',
			            type:'line',
			            stack: '总量',
			            areaStyle: {},
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'表扬分数',
			            type:'line',
			            stack: '总量',
			            areaStyle: {},
			            data:[150, 232, 201, 154, 190, 330, 410]
			        },
			    ]
			};
		        // 使用刚指定的配置项和数据显示图表。
		        myChart.setOption(option);
			}
		}
	}
</script>

<style scoped>
	.analysis-comp{
		width: 100%;
		height: 33vw;
	}
</style>