<template>
	<div class="hot-comp">
		<div class="btnGroup">
			<button :class="index==active?'btn actived':'btn'" v-for="(x,index) in btns" :label="index" @click="click_(index)">
				{{x.name}}
			</button>
		</div>
		<div class="hot-echart" >
			<div id="hot-echarts" :style="{width: '100%', height: '100%'}">
				
			</div>
		</div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	export default{
		data(){
			return {
				active:0,
				btns:[
					{
						name:'表扬'
					},{
						name:'警告'
					},
				],
				echartData: [19325, 23438, 31000, 121594, 134141, 681807,3023,2788,2489,2422]
			}
		},
		mounted(){
			this.drawing(this.echartData)
		},
		methods:{
			drawing(params){
				var myChart = echarts.init(document.getElementById('hot-echarts'));
		        var option = {
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'shadow'
				        }
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis: {
				    	position:'top',
				        type: 'value',
				        boundaryGap: [0, 0.01]
				    },
				    yAxis: {
				        type: 'category',
				        data: ['善解人意','遵守纪律','举手答问','积极思考','注意力集中，认真听讲','动作快','团队合作','饭菜吃干净 及时','坐姿端正','注意力集中']
				    },
				    series: [
				        {
				        	label:{
				        		show:true,
				        		position:'right',
				        	},
				            name: '次数',
				            type: 'bar',
				            data:params,
				            itemStyle:{
				            	normal:{
				                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
				                        offset: 0,
				                        color: '#35BDFF'
				                    }, {
				                        offset: 1,
				                        color: '#1A8DFF'
				                    }]),
				            	}
				            },
				        }
				    ]
				};
		        // 使用刚指定的配置项和数据显示图表。
		        myChart.setOption(option);
			},
			click_(index){
				this.active = index;
				if(index==0){
					this.drawing(this.echartData);
				}else{
					this.sortArr = JSON.parse(JSON.stringify(this.echartData)).sort();
					this.drawing(this.sortArr);
				}
			},
		}
	}
</script>

<style scoped>
	.hot-comp{
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
	.btnGroup{
		width: 25vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn{
		width: 100%;
		height: 3vw;
		font-size: 1vw;
		border: .1vw solid #CCCCCC;
		background: white;
		color: black;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.actived{
		background: #CCCCCC;
		color:white;
	}
	.btnCss{
		width: 80px;
	}
	.hot-echart{
		width: 100%;
		height: 20vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>