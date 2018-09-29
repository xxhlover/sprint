<template>
	<div class="addStudents-comp">
		<el-dialog
			top='5vh'
			  title="选择学生"
			  :visible.sync="dialogVisible"
			  width="50%"
			  >
			<div class="content">
				<div class="choosedStdList">
					<div class="list-header">
						已选择{{count}}名学生
					</div>
					<div class="list-body">
						<div class="list-simple" v-for="(x,index) in forms.choosedStd">
							<div class="student-name">
								{{x.name}}
							</div>
							<div class="student-del">
								<i class="el-icon-close del" style="margin-left: 10px; cursor: pointer;" @click="delete_(index)" ></i>
							</div>
						</div>
					</div>
				</div>
				<div class="groupList">
					<div class="groupList-header">
						<div class="group-name">
							小组方案:{{forms.name}}
						</div>
						<div class="group-search">
							<search placeholder="请输入学生名称"></search>
						</div>
					</div>
					<div class="groupList-body">
						
					</div>
				</div>
			</div>
			<div class="footer">
				<el-button @click="close_" round>取消</el-button>
				<el-button type="primary" @click="submit_" round>确认</el-button>
			</div>
			</el-dialog>
	</div>
</template>

<script>
	import search from '@/components/common/search'
	export default{
		created(){
			this.$on('show',(val)=>{
				let arr = JSON.parse(JSON.stringify(val));
				this.forms.name = arr.name;
				this.forms.choosedStd = arr.students;
				this.count = arr.students.length;
				this.dialogVisible = true;
			})
		},
		data(){
			return {
				forms:{
					name:'',
					choosedStd:[]
				},
				dialogVisible:false,
				count:4,
			}
		},
		methods:{
			delete_(index){
				this.forms.choosedStd.splice(index,1);
				this.count--;
			},
			submit_(){
				this.$emit('submit_',this.forms);
				this.close_();
			},
			close_(){
				this.dialogVisible = false;
			}
		},
		components:{
			search
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		height: 400px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		overflow: hidden;
	}
	.radio-div>div{
		display: flex;
		justify-content: center;
		align-items: flex-start;
		margin: 0 0 30px 0;
		flex-direction: column;
	}
	.footer{
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.list-body{
		height: 95%;
		overflow: auto;
	}
	.list-simple{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		border-bottom: 1px solid #CCCCCC;
		padding: 10px 0;
	}
	.choosedStdList{
		width: 28%;
		height: 100%;
	}
	.groupList{
		width: 70%;
		height: 100%;
		border-left: 2px solid #CCCCCC;
	}
	.groupList-header{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		padding: 10px 0;
	}
	.group-name{
		margin-left: 10px;
	}
	.groupList-body{
		width: 100%;
		height: 85%;
		overflow: auto;
	}
</style>