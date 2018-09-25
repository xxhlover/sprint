<template>
	<div class="details-page">
		<overall-situation class="overall"></overall-situation>
		<trend-analysis class="analysis"></trend-analysis>
		<hottest-comments class="comments"></hottest-comments>
		<score-list class="scoreList"></score-list>
	</div>
	
</template>
<script>
	import overallSituation from '@/components/mobile/overallSituation'
	import trendAnalysis from '@/components/mobile/trendAnalysis'
	import hottestComments from '@/components/mobile/hottestComments'
	import scoreList from '@/components/mobile/scoreList'
	export default{
		components:{
			overallSituation,
			trendAnalysis,
			hottestComments,
			scoreList
		}
	}
</script>
<style scoped>
	.overall,.analysis,.comments{
		border-bottom:1vw solid #F2F2F2;
	}
	
</style>