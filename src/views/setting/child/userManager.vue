<template>
	<div class="userManager-page">
		<div class="add-components">
			<el-button type="primary" @click="dialogFormVisible=true;user_chooseOne={};action='add'" size="small">+添加用户</el-button>
		</div>
		<edit-dialog
			v-if="dialogFormVisible"
			:data="user_chooseOne"
			:rules='user_rules'
			:rowsData="user_rowsData"
			:dialogFormVisible="dialogFormVisible"
			title="添加用户"
			refs="addUser"
			@changeRadio_="changeRadio_"
			@reset= "reset"
			@close="close_"
			@submit="submit"
			>
		</edit-dialog>
		<choose-module
			:chooseData="classOptions"
			:title="chooseTitle"
			ref="chooseDialog"
			:data="userChooseData"
			:rows="userChooseRows"
			@search="search"
			@chooseInfo_="chooseInfo_"
		>
		</choose-module>
		<data-list
			:data="userData"
			:rows="user_rowsDataList"
			:edit="true"
			:del="false"
			:status="true"
			@editInfo="editInfo_"
			@changeStatus="changeStatus"
			>
			</data-list>
	</div>
</template>

<script>
	import {testData } from '../js/data.js'
	import editDialog from '@/components/setting/editDialog'
	import chooseModule from '@/modules/setting/chooseDialog'
	import dataList from '@/components/setting/dataList'
	export default{
		mixins:[testData],
		data(){
			return {
				chooseTitle:'',
				show:true,
				dialogFormVisible:false,
				user_chooseOne:{},
				userChooseData:[],
				userChooseRows:[]
			}
		},
		methods:{
			//二级dialog
			search(msg){
				console.log(msg)
			},
			chooseInfo_(msg){
				let params ={};
				Object.assign(params,{
					userName:msg.userName,
					name:msg.name
				},this.user_chooseOne)
				this.user_chooseOne=JSON.parse(JSON.stringify(params));
			},
			//一级dialog
			submit(msg){
				console.log(msg)
			},
			changeRadio_(msg){
				if(msg ==2){
					this.show = false;
				}else{
					this.show = true;
				}
				switch(msg){
					case 0:
						this.chooseTitle = '选择学生角色'
						this.userChooseData = this.chooseStudentData;
						this.userChooseRows = this.chooseStudentRows;
					break;
					case 1:
						this.chooseTitle = '选择教师角色'
						this.userChooseData = this.chooseTeacherData;
						this.userChooseRows = this.chooseTeacherRows;
					break;
					case 2:
						this.chooseTitle = '选择管理者角色'
						this.userChooseData = this.chooseMasterData;
						this.userChooseRows = this.chooseMasterRows;
					break;
					case 3:
						this.chooseTitle = '选择家长角色'
					break;
				}
				this.$refs['chooseDialog'].$emit('show',this.show)
			},
			reset(){
				this.user_chooseOne =JSON.parse(JSON.stringify(this.user_chooseOne));
			},
			close_(){
				this.dialogFormVisible = false;
			},
			//table表格
			editInfo_(msg){
				this.user_chooseOne = JSON.parse(JSON.stringify(msg));
				this.dialogFormVisible = true;
			},
			changeStatus(msg){
				console.log(msg);
			},
		},
		components:{
			editDialog,
			chooseModule,
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