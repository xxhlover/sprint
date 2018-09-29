<template>
	<div class="functionManager-page">
		<div class="add-components">
			<el-button type="primary" @click="dialogFormVisible=true;chooseOne={guanlian:0};action='add'" size="small">+新增功能角色</el-button>
		</div>
		<edit-dialog
			v-if="dialogFormVisible"
			:data="chooseOne"
			:rules='function_rules'
			:rowsData="function_rowsData"
			:dialogFormVisible="dialogFormVisible"
			title="新增功能角色"
			refs="addFunction"
			@submit="submit"
			@close="close_"
		></edit-dialog>
		
		<data-list
			:data="functionData"
			:rows="function_rowsDataList"
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
				chooseOne:{
				}
			}
		},
		methods:{
			submit(msg,check){
				if(msg.guanlian==0){
					console.log(msg)	
				}else{
					console.log(msg,check)
				}
				
			},
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