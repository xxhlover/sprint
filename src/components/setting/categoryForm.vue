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
		          value: 'zhinan',
		          label: '指南',
		          children: [{
		            value: 'shejiyuanze',
		            label: '设计原则',
		            children: [{
		              value: 'yizhi',
		              label: '一致'
		            }, {
		              value: 'fankui',
		              label: '反馈'
		            }, {
		              value: 'xiaolv',
		              label: '效率'
		            }, {
		              value: 'kekong',
		              label: '可控'
		            }]
		          }, {
		            value: 'daohang',
		            label: '导航',
		            children: [{
		              value: 'cexiangdaohang',
		              label: '侧向导航'
		            }, {
		              value: 'dingbudaohang',
		              label: '顶部导航'
		            }]
		          }]
		        }, {
		          value: 'zujian',
		          label: '组件',
		          children: [{
		            value: 'basic',
		            label: 'Basic',
		            children: [{
		              value: 'layout',
		              label: 'Layout 布局'
		            }, {
		              value: 'color',
		              label: 'Color 色彩'
		            }, {
		              value: 'typography',
		              label: 'Typography 字体'
		            }, {
		              value: 'icon',
		              label: 'Icon 图标'
		            }, {
		              value: 'button',
		              label: 'Button 按钮'
		            }]
		          }, {
		            value: 'form',
		            label: 'Form',
		            children: [{
		              value: 'radio',
		              label: 'Radio 单选框'
		            }, {
		              value: 'checkbox',
		              label: 'Checkbox 多选框'
		            }, {
		              value: 'input',
		              label: 'Input 输入框'
		            }, {
		              value: 'input-number',
		              label: 'InputNumber 计数器'
		            }, {
		              value: 'select',
		              label: 'Select 选择器'
		            }, {
		              value: 'cascader',
		              label: 'Cascader 级联选择器'
		            }, {
		              value: 'switch',
		              label: 'Switch 开关'
		            }, {
		              value: 'slider',
		              label: 'Slider 滑块'
		            }, {
		              value: 'time-picker',
		              label: 'TimePicker 时间选择器'
		            }, {
		              value: 'date-picker',
		              label: 'DatePicker 日期选择器'
		            }, {
		              value: 'datetime-picker',
		              label: 'DateTimePicker 日期时间选择器'
		            }, {
		              value: 'upload',
		              label: 'Upload 上传'
		            }, {
		              value: 'rate',
		              label: 'Rate 评分'
		            }, {
		              value: 'form',
		              label: 'Form 表单'
		            }]
		          }, {
		            value: 'data',
		            label: 'Data',
		            children: [{
		              value: 'table',
		              label: 'Table 表格'
		            }, {
		              value: 'tag',
		              label: 'Tag 标签'
		            }, {
		              value: 'progress',
		              label: 'Progress 进度条'
		            }, {
		              value: 'tree',
		              label: 'Tree 树形控件'
		            }, {
		              value: 'pagination',
		              label: 'Pagination 分页'
		            }, {
		              value: 'badge',
		              label: 'Badge 标记'
		            }]
		          }, {
		            value: 'notice',
		            label: 'Notice',
		            children: [{
		              value: 'alert',
		              label: 'Alert 警告'
		            }, {
		              value: 'loading',
		              label: 'Loading 加载'
		            }, {
		              value: 'message',
		              label: 'Message 消息提示'
		            }, {
		              value: 'message-box',
		              label: 'MessageBox 弹框'
		            }, {
		              value: 'notification',
		              label: 'Notification 通知'
		            }]
		          }, {
		            value: 'navigation',
		            label: 'Navigation',
		            children: [{
		              value: 'menu',
		              label: 'NavMenu 导航菜单'
		            }, {
		              value: 'tabs',
		              label: 'Tabs 标签页'
		            }, {
		              value: 'breadcrumb',
		              label: 'Breadcrumb 面包屑'
		            }, {
		              value: 'dropdown',
		              label: 'Dropdown 下拉菜单'
		            }, {
		              value: 'steps',
		              label: 'Steps 步骤条'
		            }]
		          }, {
		            value: 'others',
		            label: 'Others',
		            children: [{
		              value: 'dialog',
		              label: 'Dialog 对话框'
		            }, {
		              value: 'tooltip',
		              label: 'Tooltip 文字提示'
		            }, {
		              value: 'popover',
		              label: 'Popover 弹出框'
		            }, {
		              value: 'card',
		              label: 'Card 卡片'
		            }, {
		              value: 'carousel',
		              label: 'Carousel 走马灯'
		            }, {
		              value: 'collapse',
		              label: 'Collapse 折叠面板'
		            }]
		          }]
		        }, {
		          value: 'ziyuan',
		          label: '资源',
		          children: [{
		            value: 'axure',
		            label: 'Axure Components'
		          }, {
		            value: 'sketch',
		            label: 'Sketch Templates'
		          }, {
		            value: 'jiaohu',
		            label: '组件交互文档'
		          }]
		        }]
			}
		},
		mounted(){
			this.ruleForm = this.data;
			this.active = this.data.value-1;
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