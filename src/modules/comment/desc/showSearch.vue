<template>
	<div class="showSearch-module">
		<search-btn
			@search="searchRes_"
			:placeholder="desc" 
			@changeSort="changeSort_">
		</search-btn>
		<search-result :data="resultData" :rows="resultRows" @click_="chooseOne_"></search-result>
	</div>
</template>
<script>
	import searchBtn from '@/components/comment/desc/search/searchBtn'
	import searchResult from '@/components/comment/desc/search/searchResult'
	export default{
		data(){
			return{}
		},
		props:{
			resultData:{
				type:[Object,Array]
			},
			desc:{
				type:String,
				default:'请输入内容'
			},
			resultRows:{
				type:[Object,Array]
			}
		},
		methods:{
			chooseOne_(msg){
				this.$emit('chooseOne_',msg);
			},
			changeSort_(msg){
				this.$emit('changeSort_',msg);
			},
			searchRes_(msg){
				this.$emit('searchRes_',msg);
			}
		},
		components:{
			searchBtn,
			searchResult
		}
	}
</script>

<style scoped>
</style>