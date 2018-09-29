<template>
	<div class="dialog">
		<el-dialog top="5vh" :title="title" :visible.sync="dialogForm" @close="close_">
			<el-form :model="data" label-width="180px" :rules="rules" :ref="refs">
				<el-form-item :label="x.type=='check'&& !showCheckBox?'':x.label?x.label:x.name" :prop="x.name" v-for="x in rowsData">
					<el-input v-model="data[x.name]" :clearable='true' v-if="x.type=='input'" :placeholder="x.placeholder"></el-input>
					<el-select v-model="data[x.name]" :placeholder="x.placeholder" v-if="x.type=='choose'">
				      <el-option :label="y.name" :value="y.value"  v-for="y in x.child"></el-option>
				    </el-select>
				     <div class="radio" v-if="x.type=='radio'">
				     	<el-radio v-model="data[x.name]" :label="index" v-for="(y,index) in x.child" @change="changeRadio(index)">{{y.name}}</el-radio>
				     </div>
				      <div v-if="x.type=='check'&&showCheckBox">
					      <el-checkbox-group v-model="checkBox"  class="check">
						    <el-checkbox class="checksimple" :label="y.name"  v-for="(y,index) in x.child" @change="changeCheck(index)"></el-checkbox>
						  </el-checkbox-group>
				     </div>
				     <div v-if="x.type =='radioBtn'">
				     	<el-button :class="[active==index?'actived':'']" v-for="(y,index) in x.child" @click="changeRadioBtn(index)">{{y.name}}</el-button>
				     	<!--<el-radio-group v-model="data[x.name]"  @change="changeRadioBtn">
					      <el-radio-button  :label="index" v-for="(y,index) in x.child" >{{y.name}}</el-radio-button>
					    </el-radio-group>-->
				     </div>
				     <div v-if="x.type=='disable'" >
				     	<span>{{data[x.name]}}</span>
				     </div>
				</el-form-item>
				<el-button type="primary" @click="submit_(refs)">确认</el-button>
				<el-button @click="reset_(refs)">重置</el-button>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active:-1,
				checkBox:[],
				formLabelWidth: '120px',
				dialogForm:false,
				showCheckBox:false
			};
		},
		mounted(){
			this.dialogForm = this.dialogFormVisible
		},
		props: {
			//传入的对象
			data: {
				type: [Object, Array]
			},
			//设定表单名字
			refs:{
				type:String,
				default:'form'
			},
			//显示隐藏
			dialogFormVisible:{
				type:Boolean,
				default:false
			},
			//需要验证的对象,并且通过type判定如何显示输入框/选择框 
			/*
			 * rowsData:[
					{
						name:'test',
						type:'input'
					},{
						name:'test1',
						type:'input'
					},{
						name:'test2',
						type:'input'
					},{
						name:'test3',
						type:'choose',
						child:[
							{
								name:'启动',
								value:'1'
							},{
								name:'禁止',
								value:0
							}
						]
					},
				],
			 */
			rowsData:{
				type:[Object,Array],
			},
			title:{
				type:String,
				default:'title'
			},
			//校验规则
			rules:{
				type: [Object, Array]
			}
		},
		methods: {
			submit_(formName) {
				this.$refs[formName].validate((valid) => {
		          if (valid) {
		          	if(this.data.guanlian){
			          	if(this.data.guanlian==0){
			          		return this.$emit('submit',this.data);
			          	}else{
			          		return this.$emit('submit',this.data,this.checkBox);	
			          	}
		          	}else{
			          		return this.$emit('submit',this.data);
		          	}
		          }
		        });
			},
			changeRadio(index){
				if(index==1){
					return this.showCheckBox = true;
				}
				return this.showCheckBox = false;
			},
			changeRadioBtn(index){
				this.active = index;
				this.$emit('changeRadio_',index);
			},
			changeCheck(index){
				console.log(index)
			},
			reset_(formName) {
				this.$refs[formName].resetFields();
				this.$emit('reset')
				this.checkBox=[];
				this.showCheckBox = false;
			},
			close_(){
				this.$emit('close');
			}
		},
		components: {}
	};
</script>

<style scoped>
	.leftBtn {
		align-self: flex-start;
	}
	.radio{
		text-align: left;
	}
	.check{
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
	}
	.checksimple{
		margin-left: 0!important;
	}
	.actived{
		border: 1px solid #0099FF;
		color: #0099FF;
	}
</style>