<template>
	<div class="editCategory-module">
		<el-dialog
			v-if="dialogFormValue"
			  :title="title"
			  :visible.sync="dialogFormValue"
			  width="50%"
			  >
			<div class="content">
				<div class="category-desc">
					<div class="desc-img">
						<img :src="descInfo.url" class="categoryImg" />
					</div>
					<category-form 
						:data="descInfo"
						ref="categoryForm"
						@changeVal="changeVal_"
						@submit="canSubmit"
						>
					</category-form>
				</div>
				<div class="imgLists">
					<category-tabs 
						:sysIcons="sysIcons" 
						:data="descInfo.url"
						@changeIcon="changeIcon_"
						>
					</category-tabs>
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
	import categoryTabs from '@/components/setting/categoryTabs'
	import categoryForm from '@/components/setting/categoryForm'
	export default{
		data(){
			return{
				descInfo:[],		//图标信息
				dialogFormValue:false,
			}
		},
		props:{
			title:{
				type:String,
				default:'点评类型'
			},
			//图标
			sysIcons:{
				type:[Object,Array]
			},
		},
		mounted(){
			this.$on('show',(data)=>{
				this.dialogFormValue = true;
				this.descInfo = data || {
					desc:'',
					value:1,
					category:''
				};
			})
		},
		methods:{
			//修改图标
			changeIcon_(index){
				this.$emit('changeUrl',index)
			},
			//修改分值
			changeVal_(val){
				this.descInfo.value = val;
			},
			//判断输入内容是否合理
			submit_(){
				this.$refs['categoryForm'].$emit('submitData',this.descInfo);
			},
			//输入内容合理
			canSubmit(){
				this.$emit('submit_',this.descInfo);
				this.close_();
			},
			close_(){
				this.dialogFormValue = false;
			}
		},
		components:{
			categoryForm,
			categoryTabs
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
	}
	.category-desc{
		width: 35%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
	.imgLists{
		width: 63%;	
		height: 100%;
	}
	.categoryImg{
		width: 90%;
		height: 90%;
	}
	.desc-img{
		width: 100px;
		height: 100px;
		overflow: hidden;
		border-radius: 50%;
		border:1px solid #999999;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>