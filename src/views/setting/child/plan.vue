<template>
	<div class="plan-page">
		<div class="classChange-module">
			<span>当前班级：{{classNum}}班</span> <el-button type='primary' @click="changeClass"  size="small">切换</el-button>
		</div>
			<div class="add-components">
				<div class="add-header">
					<div class="add-header-tabs">
						<div :class="[active==index?'add-tab actived':'add-tab']" v-for="(x,index) in addTabs" @click="change(index)">
							{{x.name}}
						</div>
					</div>
					<el-button type="primary" @click="addPlan" size="small">+新增</el-button>
				</div>
				<data-list
					:data="planData"
					:rows="plan_rowsDataList"
					:edit="true"
					@editInfo="editInfo"
					@deleteInfo="deleteInfo"
					>
				</data-list>
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
			<div class="">
				<!--新建分组方案-->
				<get-score
					:data="groupArr"
					ref="getScore"
					>
				</get-score>
			</div>
			
	</div>
</template>

<script>
	import dataList from '@/components/setting/dataList'
	import chooseDialog from '@/modules/setting/chooseDialog'
	import getScore from '@/modules/setting/getScorePlan'
	import {testData} from '../js/data'
	export default{
		mixins:[testData],
		data(){
			return{
				active:0,
				classNum:3,
				chooseTitle:'选择当前班级',
				copy_groupArr:''
			}
		},
		methods:{
			//编辑列信息
			editInfo(){
				
			},
			//删除列信息
			deleteInfo(){
				
			},
			//切换班级
			changeClass(){
				this.$refs['planChooseDialog'].$emit('show',true);
			},
			//班级切换/查询
			search(){
				
			},
			//班级切换/选择
			chooseInfo_(msg){
				console.log(msg)
//				this.classNum = msg.classNum;
			},
			//新增方案
			addPlan(){
				this.$refs['getScore'].$emit('show')
			},
			//我的方案/班级方案切换;
			change(index){
				this.active =index;
			},
//			//添加学生
//			submitStd_(index,val){
//				console.log(index,val)
//				this.groupArr[index]
//			},
		},
		components:{
			dataList,
			chooseDialog,
			getScore
		}
	}
</script>

<style scoped>
	.plan-page{
		font-size:14px;
	}
	.classChange-module{
		width: 100%;
		text-align: left;
	}
	.add-components{
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
	}
	.add-header{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		margin: 20px 0;
	}
	.add-header-tabs{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;	
		font-size: 14px;
	}
	.add-tab{
		border:.1px solid #CCCCCC;
		padding: 9px 25px;
		color: black;
		cursor: pointer;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		
	}
	.actived{
		background: #0099FF;
		color: white;
	}
</style>