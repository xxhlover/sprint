<template>
	<div class="chooseDialog-comp">
		<el-dialog top="5vh" width="60vw" :title="title" :visible.sync="dialogFormValue" @close="close_" v-if="dialogFormValue">
				<div class="search-module">
					<class-options
					v-if="options"
					:chooseData="chooseData"
					>
				</class-options>
				<search @search_="search"></search>
				</div>
				<data-list
					:choose="choose"
					:selection="false"
					:del="false"
					:data="data"
					:rows="rows"
					:width='100'
					@chooseInfo="chooseInfo"
					>
				</data-list>
		</el-dialog>
	</div>
</template>

<script>
	import classOptions from '@/components/comment/header/options/class'
	import search from '@/components/common/search'
	import dataList from '@/components/setting/dataList'
	export default{
		data(){
			return {
				dialogFormValue:false,
				options:true
			}
		},
		mounted(){
			this.$on('show',msg => {
				this.options = msg
				this.dialogFormValue = true;
			})
			this.$on('hide',()=>{
				this.dialogFormValue = false;
			})
		},
		props:{
			title:{
				type:String,
				default:'请选择'
			},
			data:{
				type:[Object,Array]
			},
			rows:{
				type:[Object,Array]
			},
			choose:{
				type:Boolean,
				default:true
			},
			chooseData:{
				type:[Object,Array]
			}
		},
		methods:{
			search(msg){
				this.$emit('search',msg)
			},
			chooseInfo(msg){
				this.$emit('chooseInfo_',msg)
				this.dialogFormValue = false;
			},
			close_(){
				this.dialogFormValue = false;
			}
		},
		components:{
			classOptions,
			search,
			dataList
		}
	}
</script>

<style scoped>
	.search-module{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		margin-bottom: 5vh;
	}
</style>