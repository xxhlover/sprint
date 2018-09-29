<template>
	<div class="seniorSetting-comp">
		<el-dialog
			top='5vh'
			  title="提示"
			  :visible.sync="dialogVisible"
			  width="50%"
			  >
			<div class="content">
				<div class="radio-div" v-for="(x,index) in options">
					<div v-for="(y,index) in x.child">
						<el-radio v-model="x.value" :label="y.name" >{{y.name}}</el-radio>
						<div class="radio-div-desc">
							 <p>{{y.desc1}}</p>
							 <p>{{y.desc2}}</p>
						</div>
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
	export default{
		created(){
			this.$on('show',()=>{
				this.dialogVisible = true;
			})
		},
		data(){
			return {
				dialogVisible:false,
				options:[
					{
						value:'小组、学生单独计分（适用于各组人数不同时）',
						child:[
							{
								name:`小组、学生单独计分（适用于各组人数不同时）`,
								desc1:`示例：给全组＋1分时，小组分数＋1，组内的学生分别＋1;`,
								desc2:`给学生＋1分时，小组分数不变。`
							},{
								name:`小组分数为组内学生分数总和（适用于各组人数相同时）`,
								desc1:`示例：给全组＋1分时，小组分数＋(1＊各自系数再求和)，组内的学生分别＋1;`,
								desc2:`给组内某一个学生＋1分时，小组分数＋1＊该学生系数。`
							}
						]
					}
				]
			}
		},
		methods:{
			submit_(){
				this.dialogVisible = false;
			},
			close_(){
				this.dialogVisible = false;
			}
		}
	}
</script>

<style scoped>
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
	.radio-div-desc{
		margin-top: 20px;
	}
	p{
		text-align: left;
		color: #999999;
	}
</style>