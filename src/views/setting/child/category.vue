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
					<div class="simple-add" @click="addActions">
						新增
					</div>
					<div class="simple-content" v-for="(y,index2) in x.type">
						<div class="dialog">
						</div>
						<div class="dialog-btn">
							<button class="editBtn" @click="editBtn(index,index2,y)">编辑</button>
						</div>
						<div class="">
							{{y.desc}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="">
			<!--classChangeDialog-->
				<choose-dialog
					:chooseData="classOptions"
					:title="chooseTitle"
					ref="chooseDialog"
					:data="planChooseData"
					:rows="planChooseRows"
					@search="search"
					@chooseInfo_="chooseInfo_"
					>
				</choose-dialog>
			</div>
			<!--editBtnDialog-->
			<edit-dialog
				:title="editTitle"
				ref= 'editDialog'
				:sysIcons="sysIcons"
				@changeUrl="changeIconUrl"
				@submit_="submit_"
				>
				</edit-dialog>
				
				<!--into Dialog-->
				<into-dialog
					:chooseData="classOptions"
					ref='intoDialog'
				>
				</into-dialog>
	</div>
</template>

<script>
	import {testData} from '../js/data'
	import chooseDialog from '@/modules/setting/chooseDialog'
	import editDialog from '@/modules/setting/editDialog'
	import intoDialog from '@/modules/setting/intoDialog'
	export default{
		mixins:[testData],
		data(){
			return{
				editTitle:'编辑点评类型',
				chooseTitle:'选择当前班级',
				chooseEdit:''		//保存选择要编辑的类型;
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
				this.$refs['intoDialog'].$emit('show',index)
			},
			//新增
			addActions(){
				this.$refs['editDialog'].$emit('show');
				this.editTitle = '添加点评类型';
			},
			//编辑按钮
			editBtn(index,index2,val){
				this.editTitle = '编辑点评类型';
				this.chooseEdit =JSON.parse(JSON.stringify(val))
				this.chooseEditIndex = index;
				this.chooseEditIndex2 = index2;
				this.$refs['editDialog'].$emit('show',this.chooseEdit)
			},
			//修改图标
			changeIconUrl(index){
				this.chooseEdit.url = this.sysIcons[index].url;
			},
			//提交修改
			submit_(val){
				//TODO 提交给后台,如果成功，直接修改本地数据，不用重新请求;
				Object.assign(this.actions[this.chooseEditIndex].type[this.chooseEditIndex2],val)
			}
		},
		components:{
			editDialog,
			chooseDialog,
			intoDialog
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
		margin:0 20px 20px 0;
		border: 1px solid #CCCCCC;
		position: relative;
	}
	.simple-add{
		cursor: pointer;
	}
	.dialog{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
		background: white;
		opacity: 0;
	}
	.dialog-btn{
		position: absolute;
		z-index: 2;
		display: none;
	}
	.editBtn{
		width: 80px;
		height: 30px;
		background: white;
		border:1px solid #A9A9A9;
		border-radius: 50px;
		cursor: pointer;
	}
	.simple-content:hover > .dialog{
		opacity: .6;
	}
	.simple-content:hover > .dialog-btn{
		display: block;
	}
	.editBtn:hover{
		color: #06BB9C;
		border:1px solid #06BB9C;
	}
</style>