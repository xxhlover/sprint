<template>
	<div class="getScore-module">
		<el-dialog 
			top="5vh" 
			title="新建小组计分方案"
			 :visible.sync="dialogFormValue" 
			 @close="close_" 
			 v-if="dialogFormValue">
			 <div class="ruleDesc">
			 		<div>计分规则</div>
			 	</div>
			 <div class="dialog-body">
			 	<div class="dialog-table" v-for="(x,index) in data">
			 		<i class="el-icon-close del" style="position: absolute;right: 10px;top: 10px;" @click="deleteGroup(index)"></i>
			 		<div class="table-data">
			 			<div class="data-name">
			 				<input type="text" name="" id="" v-model="x.name" v-if="x.isEdit" />
			 				<span v-else>{{x.name}} </span>
			 				<i @click="editName(index)" class="el-icon-edit" style="margin-left: 10px; cursor: pointer;" ></i>
			 			</div>
			 			<div class="data-xishu">
			 				<div style="white-space: nowrap;">系数：</div>
			 				<div class="radio-div">
			 					<div :class="[y.val==radioBtn[index]?'radio actived':'radio']" v-for="y in radioArr" @click="changeActive(index,y.val)">
				 					{{y.val}}
				 				</div>
			 				</div>
			 			</div>
			 			<el-button class="button">+选择学生</el-button>
			 			<div  class="student-div" v-if="x.students.length>0">
			 				<div class="studentsList" v-for="y in x.students">
			 					{{y.name}}
			 				</div>
			 			</div>
			 			<div class="student-div-else" v-else>
			 					未添加学生
			 			</div>
			 		</div>
			 	</div>
			 	<div class="dialog-add-table" v-if="data.length<4" @click="addTable">
			 		<div class="add-data" >
			 			添加
			 			<div class="">
			 				<i class="el-icon-plus"></i>
			 			</div>
			 		</div>
			 	</div>
			 </div>
			<div class="button-div">
				<div class="senior-setting" @click="showSetting">
					高级设置
				</div>
				<el-button @click="close_" round>取消</el-button>
				<el-button type="primary" @click="submit_" round>确认</el-button>
			</div>
		</el-dialog>
		
		<senior-setting
			ref="seniorSetting"
			>
		</senior-setting>
		
	</div>
</template>

<script>
	import seniorSetting from '@/components/setting/seniorSetting'
	export default{
		created(){
			this.$on('show',()=>{
				this.dialogFormValue = true;
			})
			for(let i in this.data){
				this.radioBtn.splice(i,1,this.data[i].ratio);
			}
		},
		data(){
			return{
				dialogFormValue:false,
				radioBtn:[-1,-1,-1,-1],
				radioArr:[
					{
						val:1,
					},{
						val:2,
					},{
						val:3,
					},{
						val:4,
					},
				]
			}
		},
		props:{
			data:{
				type:[Object,Array]
			},
			
		},
		methods:{
			editName(index){
				console.log(index)
				this.data[index].isEdit = !this.data[index].isEdit;
			},
			deleteGroup(index){
				this.data.splice(index,1);
			},
			changeActive(index,val){
				for(let i in this.radioBtn){
					if(this.radioBtn[i]==val){
						this.radioBtn[i] = -1;
					}
				}
				this.radioBtn.splice(index,1,val);
			},
			showSetting(){
				this.$refs['seniorSetting'].$emit('show');
			},
			addTable(){
				this.data.push({
					name:'测试方案',
					ratio:1
				});
			},
			submit_(){
				
			},
			close_(){
				this.dialogFormValue = false;
			}
		},
		components:{
			seniorSetting
		}
	}
</script>

<style scoped>
	.dialog-body{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow-x: auto;
	}
	.ruleDesc{
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-direction: row;
	}
	.ruleDesc>div{
		width: 80px;
		border: 1px solid black;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 10px 5px;
	}
	.dialog-table{
		padding: 10px;
		width: 24%;
		height: 400px;
		position: relative;
		border:1px solid #F1F1F1;
		margin:0 5px;
		overflow: hidden;
	}
	.table-data{
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
	.data-name,.data-xishu{
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 10px 0 ;
	}
	.data-name>input{
		width: 60%;
	}
	.data-name>span{
		width: 60%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.radio-div{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.radio{
		border-radius: 50%;
		width: 20px;
		height: 20px;
		border:1px solid grey;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.del:hover,.radio:hover,.dialog-add-table:hover{
		cursor: pointer;
	}
	.actived{
		background: #0099FF;
		color: white;
	}
	.dialog-add-table{
		position: relative;
		border:1px solid #F1F1F1;
		margin:0 5px;
		width: 24%;
		height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.button-div{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 20px 0 0;
	}
	.senior-setting{
		position: absolute;
		left: 10px;
		color: #0099FF;
	}
	.senior-setting:hover{
		cursor: pointer;
	}
	.studentsList{
		width: 98%;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.studentsList:hover{
		border:1px solid #F1F1F1;
	}
	.button{
		width: 90%;
		margin: 5px 0 ;
		overflow: hidden;
	}
	.student-div{
		width: 100%; 
		height: 100%;
		overflow-y: auto;
	}
	.student-div-else{
		width: 100%; 
		height: 100%;
		overflow: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #999999;
	}
	
</style>