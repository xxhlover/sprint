<template>
	<div class="intoDialog-module">
		<el-dialog
			v-show="dialogFormValue"
			  :title="progress==0?'选择需要导入的对象':'导入'"
			  :visible.sync="dialogFormValue"
			  width="50%"
			  >
			<div class="content">
				<div class="class-desc">
					<span>{{desc}}</span>
				</div>
				<div class="classList" v-show="progress==0">
					<class-options 
						:chooseData="chooseData" 
						:showDesc='showDesc'>
					</class-options>
					<!--选择需要导入的班级-->
					<div class="class-list">
						<div class="class-info" v-for="(x,index) in testClass" @click="chooseClass(x)">
							{{x.name}}
						</div>
					</div>
				</div>
				<div class="categoryList" v-show="progress==1">
					<!--选择导入的班级的类型-->
					<div class="showClassName">
						{{className}} <span @click="progress =0;">更换</span>
					</div>
					<div class="iconList">
						<div class="iconList-simple" v-for="(x,index) in copy_intoCategory" @click="chooseCate(x)">
							<div class="icons" :class='x.flag?"actived":"normal"'>
			    				<i class="iconSize el-icon-circle-check"></i>
			    			</div>
			    			<div class="sysIcon-score">
									{{x.value}}
							</div>
							<div class="sysIcon">
				    			<img :src="x.url"/>
				    		</div>
				    		<div class="simple-desc">
				    			{{x.desc}}
				    		</div>
						</div>
					</div>
					<div class="categoryList-bottom">
						<div class="bottom-buttonGroup">
							<div class="buttonGroup">
								<div class="btnCss" :class="[actived==index?'active':'']" v-for="(x,index) in actions" @click="changeAction(index)">
									{{x.name}}
								</div>
							</div>
							<div class="botton-desc" v-for="(x,index) in actions" v-show="actived==index">
								{{x.desc}}
							</div>
						</div>	
						<div class="bottom-intoBtn">
							<el-checkbox v-model="checked" @change="allChoose">全选</el-checkbox>
							<div class="intoBtn" @click='into_'>
								导入
							</div>
						</div>
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
				actived:0,
				checked:false,
				dialogFormValue:false,
				progress:0,
				showDesc:false,
				intoType:'',
				copy_intoCategory:[],
				testClass:[
					{
						name:'三年级五班'
					},{
						name:'三年级三班'
					},{
						name:'三年级二班'
					},
				],
				className:'',	//选择的班级的名字
				actions:[
					{
						name:'累加',
						desc:'保留原自定义类型，同时累加新导入的类型'
					},{
						name:'替换',
						desc:'清除原自定义类型，只保留新导入的类型'
					},
				]
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
			},
			intoCategory:{
				type:[Object,Array]
			}
		},
		mounted(){
			this.$on('show',(index)=>{
				//通过index判断是表扬还是警告
				this.dialogFormValue = true;
				this.intoType = index;
			})
			this.$on('hide',()=>{
				this.dialogFormValue = false;
			})
		},
		methods:{
			//选择班级
			chooseClass(val){
				this.progress = 1;
				if(this.intoType==0){
					this.desc = '班级默认表扬类型'
				}else{
					this.desc = '班级默认警告类型'
				}
				this.className = val.name
				//初始化
				this.copy_intoCategory = JSON.parse(JSON.stringify(this.intoCategory));
				this.checked = false;
				this.actived = 0;
			},
			//选中要导入的类型
			chooseCate(val){
				val.flag = !val.flag;
				for(let i in this.copy_intoCategory){
					if(!this.copy_intoCategory[i].flag){
						this.checked = false;
						break;
					}else{
						if((i==this.copy_intoCategory.length-1) && this.copy_intoCategory[i].flag){
							this.checked = true;
						}
					}
				}
			},
			//切换累加/替换按钮
			changeAction(index){
				this.actived = index;
			},
			//全选
			allChoose(val){
				if(val){
					this.copy_intoCategory.filter((val)=>{
						return val.flag = true;
					})
				}else{
					this.copy_intoCategory.filter((val)=>{
						return val.flag = false;
					})
				}
			},
			//导入
			into_(){
				let arr = [];
				this.copy_intoCategory.filter((val)=>{
					if(val.flag){
						arr.push(val)
					};
				})
				this.$emit('into_',this.actived,arr);
			},
			close_(){
				this.dialogFormValue = false;
			},
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
	
	
	.iconList{
		width: 100%;
		height: 300px;
		overflow: auto;
	}
	.iconList-simple{
		width: 80px;
		height: 80px;
		float: left;
		margin: 10px 10px 0 0;
		cursor: pointer;
		position: relative;
		border: 1px solid #169BD5;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.sysIcon-score{
		position: absolute;
	    top: 18%;
	    right: 25%;
	    background: #05A488;
	    width: 20px;
	    height: 20px;
	    border-radius: 50%;
	    z-index: 1;
	    color: white;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	}
	.sysIcon{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border:1px solid #999999;
		position: relative;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.sysIcon>img{
		width: 100%;
		height: 100%;
	}
	.icons{
		background: white;
		position: absolute;
		right: 5px;
		top:5px;
		z-index: 1;
	}
	.iconSize{
		transform: scale(1.5);
	}
	.actived{
		color: #0099FF;
	}
	.normal{
		color:#CCCCCC ;
	}
	.categoryList-bottom{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;
	}
	.buttonGroup{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		border-radius: 50px;
		border: 2px solid #B3C0D1;
		width: 120px;
	}
	.bottom-buttonGroup,.bottom-intoBtn{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;
	}
	.btnCss{
		width: 100%;
		height: 30px;
		background:white;
		border-radius: 50px;
		color: black;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.active{
		color: white;
		background: #0099FF;
	}
	.simple-desc{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		width: 100%;
	}
	.botton-desc{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		width: 270px;
		margin-left: 20px;
		text-align: left;
	}
	.bottom-intoBtn{
		margin-left:100px;
	}
	.intoBtn{
		background: #0099FF;
		color: white;
		width: 100px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 30px;
		margin-left: 10px;
		cursor: pointer;
	}
</style>