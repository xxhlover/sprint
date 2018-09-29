<template>
	<div class="category-page">
		<div class="classChange-module">
			<span>当前班级：{{classNum}}班</span> <el-button type='primary' @click="changeClass" size="small">切换</el-button>
		</div>
		<div class="category-list">
			<div class="list-simple" v-for="(x,index) in actions">
				<div class="simple-header">
					<div class="header-desc">
						{{x.desc}}
					</div>
					<div class="header-in">
						<el-button @click="into(index)" size="small" round>&nbsp;&nbsp;导入&nbsp;&nbsp;</el-button>
					</div>
				</div>
				<div class="simple-body">
					<div class="simple-add">
						新增
					</div>
					<div class="simple-content" v-for="(y,index) in x.type">
						<div class="dialog">
							
						</div>
						<div class="">
							{{y.value}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="">
				<choose-dialog
					:chooseData="classOptions"
					:title="chooseTitle"
					ref="planChooseDialog"
					:data="planChooseData"
					:rows="planChooseRows"
					@search="search"
					@chooseInfo_="chooseInfo_"
					>
				</choose-dialog>
			</div>
	</div>
</template>

<script>
	import {testData} from '../js/data'
	import chooseDialog from '@/modules/setting/chooseDialog'
	export default{
		mixins:[testData],
		data(){
			return{
				classNum:3,
				chooseTitle:'选择当前班级',
				actions:[
					{
						desc:'表扬',
						type:[
							{
								value:'回答很棒'
							},{
								value:'积极主动'
							},{
								value:'团队合作'
							},{
								value:'遵守纪律'
							},{
								value:'帮助他人'
							},{
								value:'注意力集中'
							}
						]
					},{
						desc:'警告',
						type:[
							{
								value:'上课走神'
							}
						]
					}
				]
			}
		},
		methods:{
			//显示班级查询dialog
			changeClass(){
				this.$refs['chooseDialog'].$emit('show',true);
			},
			//班级切换/查询
			search(){
			},
			//班级切换/选择
			chooseInfo_(msg){
				console.log(msg)
			},
			//导入
			into(index){
				
			}
		},
		components:{
			chooseDialog
		}
	}
</script>

<style scoped>
	.classChange-module{
		width: 100%;
		text-align: left;
	}
	.simple-header{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;
		margin: 10px 0;
	}
	.header-desc{
		padding: 0 20px 0 10px;
		border-left: 2px solid #108EE9;
	}
	.simple-body{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.simple-content,.simple-add{
		width: 150px;
		height: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		margin:0 20px 20px 0;
		border: 1px solid #CCCCCC;
		position: relative;
	}
	.dialog{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
		background: white;
		opacity: 0;
	}
	.dialog:hover{
		opacity: .6;
	}
</style>