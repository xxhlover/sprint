<template>
	<div class="treeDialog-comp">
		<el-dialog
		  title="编辑"
		  :visible.sync="dialogVisible"
		  width="30%"
		  >
		  <el-input
		    placeholder="请选择日期"
		    suffix-icon="el-icon-edit"
		    v-model="input">
		  </el-input>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="submit_">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				dialogVisible:false,
				input:''
			}
		},
		mounted(){
			this.$on('show',(data)=>{
				this.dialogVisible = true;
				this.input = data.label;
			})
		},
		methods:{
			submit_(){
				this.dialogVisible = false;
				this.$emit('submit_',this.input);
			}
		}
	}
</script>

<style>
</style>