<template>
	<div class="scoreEchart-comp">
		<!--<div class="header">
			<div class="name">{{data.name || '未选择'}}</div>
			<el-select  v-model="value" placeholder="小组方案:请选择" class="select" @change="change">
			    <el-option
			      v-for="(x,index) in groupPlans"
			      :label="x.name"
			      :value="index"
			      >
			    </el-option>
		  </el-select>
		</div>-->
		<div class="echart">
			<div class="getScore">
				<div class="score-sum">
					{{(data.addScore + data.reduceScore) || 0}}
				</div>
				<div class="score-date">
					本周得分
				</div>
			</div>
			<div id="echart-pic" :style="{width: '100%', height: '100%'}"></div>
		</div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	export default{
		data(){
			return{
				value:'',
				colorArrs : ['#108EE9','#FF005A'],
				defaultColorArrs : ['#A9A9A9','#A9A9A9']
			}
		},
		props:{
			data:{
				type:Object
			},
			groupPlans:{
				type:[Object,Array]
			}
		},
		mounted(){
			this.drawing(this.defaultColorArrs)
			this.$on('reset',()=>{
				setTimeout(()=>{
					this.drawing(this.colorArrs);
				},10)
			})
		},
		methods:{
			change(index){
				this.value = `小组方案:${this.groupPlans[index].name}`
			},
			drawing(colorParams){
				let i = 0,colorArr = colorParams;
				var myChart = echarts.init(document.getElementById('echart-pic'));
		        // 指定图表的配置项和数据
		        var option = {
				    tooltip: {
				        trigger: 'item',
				        formatter: "{a} <br/>{b}: {c} ({d}%)"
				    },
	//			    legend: {
	//			        orient: 'vertical',
	//			        x: 'left',
	//			        data:['表扬','警告']
	//			    },
				    series: [
				        {
				            name:'评价',
				            type:'pie',
				            avoidLabelOverlap: false,
				            itemStyle:{
				            	normal:{
				            		color:()=>{
				            			return colorArr[i++];
				            		}
				            	}
				            },
				            label: {
				                normal: {
				                    show: false,
				                    position: 'center'
				                },
				                emphasis: {
				                    show: false,
				                    textStyle: {
				                        fontSize: '30',
				                        fontWeight: 'bold'
				                    }
				                }
				            },
				            labelLine: {
				                normal: {
				                    show: false
				                }
				            },
				            data:[
				            	{value:this.data.addScore || 0, name:'表扬'},
				                {value:Math.abs(this.data.reduceScore) || 0, name:'警告'}
				                
				            ],
				            radius:['50%','60%']
				        }
				    ]};
		        // 使用刚指定的配置项和数据显示图表。
		        myChart.setOption(option);
			}
		}
	}
</script>

<style scoped>
	.header{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}
	.scoreEchart-comp{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.echart{
		width: 100%;
		height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.getScore{
		position: absolute;
	}
	.score-sum{
		font-size: 2vw;
		color: #108EE9;
	}
</style>