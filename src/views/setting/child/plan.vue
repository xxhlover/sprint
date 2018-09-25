<template>
	<div class="plan-page">
		<div class="classChange-module">
			<span>当前班级：{{classNum}}班</span> <el-button type='primary' @click="changeClass">切换</el-button>
		</div>
			<div class="add-components">
				<el-button type="primary" @click="addPlan">+新增计分方案</el-button>
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
				classNum:3,
				chooseTitle:'选择当前班级'
			}
		},
		props:{
			
		},
		methods:{
			editInfo(){
				
			},
			deleteInfo(){
				
			},
			changeClass(){
				this.$refs['planChooseDialog'].$emit('show',true);
			},
			search(){
				
			},
			chooseInfo_(msg){
				console.log(msg)
//				this.classNum = msg.classNum;
			},
			addPlan(){
				this.$refs['getScore'].$emit('show')
			}
		},
		components:{
			dataList,
			chooseDialog,
			getScore
		}
	}
</script>

<style scoped>
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
	.add-components>button{
		margin: 20px 0;
	}
</style>