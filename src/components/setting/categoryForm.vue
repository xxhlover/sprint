<template>
	<div class="categoryForm-comp">
		<el-form :model="ruleForm" :rules="rules" ref="cateForm" label-width="50px" class="demo-ruleForm">
		  <el-form-item label="名称" prop="desc">
		    <el-input v-model="ruleForm.desc" required placeholder="不超过六个字"></el-input>
		  </el-form-item>
		  <el-form-item label="分值" prop="value">
		    <div class="valueGroup">
		    	<div class="valueDiv" :class="[active==index?'actived':'']" v-for="(x,index) in 10" name="value" @click="chooseValue(x)">
		    		{{x}}
		    	</div>
		    </div>
		  </el-form-item>
		  <el-form-item label="分类" prop="category">
		   <el-cascader
		   	  :value='valueArr'
			  :options="options"
			  :show-all-levels="false"
			  name="category"
			  @change="changeCate"
			></el-cascader>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				valueArr:[''],
				active:0,
				ruleForm:{
					desc:'',
					value:'',
					category:''
				},
				rules: {
		          desc: [
		            { required: true, message: '请输入名称', trigger: 'blur' },
		            { min: 1, max: 6, message: '不超过6个字', trigger: 'blur' }
		          ],
		          value: [
		            { required: true, message: '请选择分值', trigger: 'change' }
		          ],
		          category:[
		            { required: true, message: '请选择分类', trigger: 'change' }
		          ]
		       },
		       options:[{
		          value: 'fenlei1',
		          label: '分类1',
		          children: [{
		            value: 'fenlei1',
		            label: '分类1-1',
		          }, {
		            value: 'fenlei2',
		            label: '分类1-2',
		            children: [{
		              value: 'fenlei1',
		              label: '分类1-2-1'
		            }, {
		              value: 'fenlei2',
		              label: '分类1-2-2'
		            }]
		          }]
		        }, {
		          value: 'fenlei2',
		          label: '分类2',
		        }, {
		          value: 'fenlei3',
		          label: '分类3',
		          children: [{
		            value: 'fenlei1',
		            label: '分类3-1'
		          }, {
		            value: 'fenlei2',
		            label: '分类3-2'
		          }, {
		            value: 'fenlei3',
		            label: '分类3-3'
		          }]
		        }]
			}
		},
		mounted(){
			this.ruleForm = this.data;
			this.active = this.data.value-1;
			if(this.data.category){
				this.valueArr = this.data.category;
			}
			this.$on('submitData',(data)=>{
				this.submitForm('cateForm',data);
			})
		},
		props:{
			data:{
				type:[Object,Array]
			}
		},
		methods:{
			chooseValue(val){
				this.active = val-1;
				this.ruleForm.value = val;
				this.$emit('changeVal',val);
			},
			changeCate(val){
				this.ruleForm.category = val;
			},
			submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            this.$emit('submit');
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		      },
		}
	}
</script>

<style scoped>
	.categoryForm-comp{
		margin-top: 20px;
	}
	.valueGroup{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.valueDiv{
		width: 25px;
		height: 25px;
		border-radius: 50%;
		border: 1px solid #F1F1F1;
		display: flex;
		justify-content: center;
		align-items: center;
		margin:10px 7px 0 0;
		cursor: pointer;
	}
	.actived{
		background: #0099FF;
		color: white;
	}
</style>