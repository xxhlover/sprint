<template>
	<div class="seniorSetting-comp">
		<el-dialog
			top='5vh'
			  title="高级设置"
			  :visible.sync="dialogVisible"
			  width="50%"
			  >
			<div class="content">
				<div class="radio-div" v-for="(x,index) in options">
					<div>
						<b>{{x.desc}}：</b>
					</div>
					<div>
						<el-radio v-model="x.value" :label="y.name" v-for="(y,index) in x.child">{{y.name}}</el-radio>
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
						value:'系统默认',
						desc:'系数',
						child:[
							{
								name:'系统默认',
							},{
								name:'自定义(可自定义设置正数、负数、整数、小数)',
							}
						]
					},
					{
						value:'最多4',
						desc:'等级',
						child:[
							{
								name:'最多4'
							},{
								name:'无限制'
							},
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
		justify-content: flex-start;
		align-items: center;
		margin: 50px 0;
	}
	.footer{
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
</style>