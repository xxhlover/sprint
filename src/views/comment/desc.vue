<template>
	<div class="body">
		<div class="showSearch">
			<show-search 
				:resultData="sortFilter" 
				:desc="desc" 
				:resultRows="resultRows" 
				@chooseOne_="chooseFun" 
				@changeSort_="changeSortFun" 
				@searchRes_="searchResFun"
				>
			</show-search>
		</div>
		<div class="showScore">
			<show-score 
				ref="showScore"
				:data="chooseOne"
				:groupPlans= "groupPlans"
				@changeStatus="changeStatus"
				>
			</show-score>
		</div>
		<div class="showRank">
			<show-rank 	
				:rankName="rankName" 
				:data="chooseOne"
				>
			</show-rank>
		</div>
	</div>
</template>

<script>
	import showSearch from '@/modules/comment/desc/showSearch' //body-left模块
	import showScore from '@/modules/comment/desc/showScore' //body-middle模块
	import showRank from '@/modules/comment/desc/showRank' //body-right模块
	import { testData } from './js/data.js'
	import { search } from './js/search.js'

	export default {
		name:'commentDesc',
		mixins: [testData, search],
		data() {
			return {
				rankName: '全部点评'
			}
		},
		beforeRouteEnter(to,from,next){
			to.meta.keepAlive = true;
			next();
		},
		components: {
			showSearch,
			showScore,
			showRank
		}
	}
</script>

<style scoped>
	.body {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: row;
		overflow: auto;
	}
	
	.search {
		width: 100%;
	}
	
	.showSearch {
		width: 30%;
		height: 100%;
	}
	
	.showScore {
		width: 35%;
		height: 100%;
	}
	
	.showRank {
		width: 35%;
		height: 100%;
	}
</style>