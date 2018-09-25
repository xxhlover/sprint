<template>
	<div class="search-comp">
		<el-input placeholder="请输入内容" v-model="val" class="input-with-select" :clearable="true">
			<el-button slot="append" icon="el-icon-search" @click="search_"></el-button>
		</el-input>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				val:""
			}
		},
		methods:{
			search_(){
				this.$emit('search_',this.val);
			}
		}
	}
</script>

<style>
</style>