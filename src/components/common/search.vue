<template>
	<div class="search-comp">
		<el-input :placeholder="placeholder" v-model="val" class="input-with-select" clearable>
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
		props:{
			placeholder:{
				type:String,
				default:'请输入内容'
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