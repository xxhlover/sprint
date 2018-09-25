<template>
	<div class="weight-page">
		<div class="add-components">
			<el-button type="primary" @click="dialogFormVisible=true;chooseOne={};action='add'">+新增权重方案</el-button>
		</div>
		<edit-dialog
			v-if="dialogFormVisible"
			:data="chooseOne"
			:rules='weight_rules'
			:rowsData="weight_rowsData"
			:dialogFormVisible="dialogFormVisible"
			title="新增权重方案"
			ref="addWeight"
			@close="close_"
		></edit-dialog>
		
		<data-list
			:data="weightData"
			:rows="weight_rowsDataList"
			:edit="true"
			@editInfo="editInfo_"
			@deleteInfo="deleteInfo_"
			>
			</data-list>
	</div>
</template>

<script>
	import {testData } from '../js/data.js'
	import editDialog from '@/components/setting/editDialog'
	import dataList from '@/components/setting/dataList'
	export default{
		mixins:[testData],
		data(){
			return {
				dialogFormVisible:false,
				chooseOne:{}
			}
		},
		methods:{
			close_(){
				this.dialogFormVisible = false;
			},
			editInfo_(msg){
				this.chooseOne = JSON.parse(JSON.stringify(msg));
				this.dialogFormVisible = true;
			},
			deleteInfo_(msg){
				console.log(msg)
			}
		},
		components:{
			editDialog,
			dataList
		}
	}
</script>

<style scoped>
	.add-components{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 10px 0;
	}
</style>