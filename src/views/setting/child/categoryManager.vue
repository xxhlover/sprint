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
					<div class="simple-add" @click="addActions(index)" v-if="x.type.length<20">
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
				:selfIcons="selfIcons"
				@changeUrl="changeIconUrl"
				@submit_="submit_"
				>
				</edit-dialog>
				
				<!--into Dialog-->
				<into-dialog
					:chooseData="classOptions"
					ref='intoDialog'
					:intoCategory="intoCategoryData"
					@into_="intoData"
				>
				</into-dialog>
				<!--chooseCategoryDialog-->
				<category-dialog
					ref="categoryDialog"
					@submit_="submit_into"
					>
				</category-dialog>
	</div>
</template>

<script>
	import {testData} from '../js/data'
	import chooseDialog from '@/modules/setting/chooseDialog'
	import editDialog from '@/modules/setting/editDialog'
	import intoDialog from '@/modules/setting/intoDialog'
	import categoryDialog from '@/modules/setting/categoryDialog'
	export default{
		mixins:[testData],
		data(){
			return{
				editTitle:'编辑点评类型',
				chooseTitle:'选择当前班级',
				chooseEdit:'',		//保存选择要编辑的类型;
				chooseAdd:{			//保存添加得类型;
					desc:'',
					value:1,
					category:'',
					url:''
				},
				saveUpdateIndex:[]  //累加导致的同名事项的下标，用于进行本地数据的修改
			}
		},
		methods:{
			//显示班级查询dialog
			changeClass(){
				this.$refs['chooseDialog'].$emit('show',true);
			},
			//班级切换/查询
			search(val){
				console.log(val)
			},
			//班级切换/选择
			chooseInfo_(msg){
				console.log(msg)
			},
			//导入
			into(index){
				this.$refs['intoDialog'].$emit('show',index)
				this.chooseEditIndex = index;
			},
			//新增
			addActions(index){
				this.chooseEdit = '';
				this.chooseAdd = {
					desc:'',
					value:1,
					category:'',
					url:''
				};
				this.$refs['editDialog'].$emit('show',this.chooseAdd);
				this.chooseEditIndex = index;
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
			changeIconUrl(index,type){
				if(this.chooseEdit){
					if(type=='sysIcons'){
						this.chooseEdit.url = this.sysIcons[index].url;	
					}else{
						this.chooseEdit.url = this.selfIcons[index].url;
					}
				}else{
					if(type=='sysIcons'){
						this.chooseAdd.url = this.sysIcons[index].url;
					}else{
						this.chooseAdd.url = this.selfIcons[index].url;
					}
				}
				
			},
			//提交修改
			submit_(val){
				//TODO 提交给后台,如果成功，直接修改本地数据，不用重新请求;
				if(val.id){
					//修改
					Object.assign(this.actions[this.chooseEditIndex].type[this.chooseEditIndex2],val)	
				}else{
					//添加 需要请求到id
					this.actions[this.chooseEditIndex].type.push(val)
				}
			},
			//导入类型提交
			intoData(type,val){
				if(val.length>0){
					//提交
					this.into_filter(type,val);
				}else{
					console.log('什么都没做')
					this.close_intoDialog();
				}
			},
			//选择累加后的同名事项,发送给后台进行更改
			submit_into(val){
				//TODO 发送给后台，如果返回成功，修改本地数据
				for(let i in this.saveUpdateIndex){
					this.actions[this.chooseEditIndex].type.splice(this.saveUpdateIndex[i],1,val[i]);
				}
				this.$refs['categoryDialog'].$emit('hide');
				this.close_intoDialog();
			},
			into_filter(type,val){
				this.saveUpdateIndex = [];
				let showChooseDialog = false,
					newArr = [],
					oldArr = [];
				if(type==0){
					//累加
					let val2 = this.actions[this.chooseEditIndex].type;
					for(let i in val){
						for(let j in val2){
							//全同
							if(val[i].desc == val2[j].desc && val[i].value == val2[j].value && val[i].url == val2[j].url){
								//保留原设置
								console.log('保留原设置')
								break;
							}else{
								//名同
								if(val[i].desc == val2[j].desc){
									//如果是与自定义内容同名，进行选择
									if(val2[j].type=='self'){
										console.log('名同且是自定义点评类型，弹框确认')
										showChooseDialog = true;
										newArr.push(val[i]);
										oldArr.push(val2[j]);
										this.saveUpdateIndex.push(j);
									}else{
										console.log('名同但是默认点评类型，默认保留默认点评')
										//如果是与默认内容同名，默认保留默认点评类型
										//可以给一个提示
									}
									break;
								}else{
									//名不同,直接添加
									if(j == val2.length-1){
										console.log('名不同，直接添加')
										this.actions[this.chooseEditIndex].type.push(val[i]);	
									}
								}
							}
						}
					}
				}else{
					//替换 清除原有类型，只保留新导入的类型
					this.actions[this.chooseEditIndex].type = val;
				}
				if(showChooseDialog){
						//显示选择dialog
						this.$refs['categoryDialog'].$emit('show',oldArr,newArr);
				}else{
					this.close_intoDialog();	
				}
			},
			close_intoDialog(){
				this.$refs['intoDialog'].$emit('hide');
			}
		},
		components:{
			editDialog,
			chooseDialog,
			intoDialog,
			categoryDialog
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