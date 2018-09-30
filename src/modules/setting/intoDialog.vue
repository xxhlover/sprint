<template>
	<div class="intoDialog-module">
		<el-dialog
			v-if="dialogFormValue"
			  :title="progress==0?'选择需要导入的对象':'导入'"
			  :visible.sync="dialogFormValue"
			  width="50%"
			  >
			<div class="content">
				<div class="class-desc">
					<span>{{desc}}</span>
				</div>
				<div class="" v-show="progress==0">
					<class-options :chooseData="chooseData" :showDesc='showDesc'></class-options>
					<!--选择需要导入的班级-->
					<div class="class-list">
						<div class="class-info" v-for="(x,index) in testClass" @click="chooseClass(x)">
							{{x.name}}
						</div>
					</div>
				</div>
				<div class="" v-show="progress==1">
					<!--选择导入的班级的类型-->
					<div class="showClassName">
						{{className}} <span @click="progress =0;">更换</span>
					</div>
				</div>
				
			</div>
			
			</el-dialog>
	</div>
</template>

<script>
	import classOptions from '@/components/comment/header/options/class'
	export default{
		data(){
			return{
				desc:'班级',
				dialogFormValue:false,
				progress:0,
				showDesc:false,
				intoType:'',
				testClass:[
					{
						name:'三年级五班'
					},{
						name:'三年级三班'
					},{
						name:'三年级二班'
					},
				],
				className:''	//选择的班级的名字
			}
		},
		watch:{
			dialogFormValue(curVal,oldVal){
				if(curVal==false){
					this.progress = 0;
					this.desc = '班级'
				}
			}
		},
		props:{
			chooseData:{
				type:[Object,Array]
			}
		},
		mounted(){
			this.$on('show',(index)=>{
				//通过index判断是表扬还是警告
				this.dialogFormValue = true;
				this.intoType = index;
			})
		},
		methods:{
			chooseClass(val){
				this.progress = 1;
				if(this.intoType==0){
					this.desc = '班级默认表扬类型'
				}else{
					this.desc = '班级默认警告类型'
				}
				this.className = val.name
				console.log(val)
			}
		},
		components:{
			classOptions
		}
	}
</script>

<style scoped>
	.class-desc{
		text-align: left;
	}
	.class-desc>span{
		border-left: 2px solid #108EE9;
		padding-left: 10px;
	}
	.class-list{
		width: 100%;
		height: 300px;
		overflow: auto;
	}
	.class-info{
		float: left;
		margin:10px 10px 0 0;
		padding: 10px;
		border: 1px solid #CCCCCC;
		cursor: pointer;
	}
	.showClassName{
		position: absolute;
		top: 25px;
		right: 25%;
	}
	.showClassName>span{
		margin-left: 10px;
		color: deepskyblue;
		cursor: pointer;
	}
</style>