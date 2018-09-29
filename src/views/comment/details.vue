<template>
	<div class="details">
		<score-group :data="scoreClassify" ></score-group>
		<div class="simple">
			<div class="simple-header">
				趋势分析
			</div>
			<div class="simple-body">
				<analysis-echart></analysis-echart>
			</div>
		</div>
		<div class="simple">
			<div class="simple-header">
				总分排行榜
			</div>
			<div class="simple-body">
				<rank-list :data="rankClass" headColor="background: #0099CC;">
				</rank-list>
				<rank-list :data="rankTeacher" headColor="background: #FF9933;">
				</rank-list>
			</div>
		</div>
		<div class="simple">
			<div class="simple-header">
				最热点评
			</div>
			<div class="simple-body">
				<hot></hot>
			</div>
		</div>
	</div>
</template>

<script>
	import analysisEchart from '@/components/comment/details/analysis'
	import scoreGroup from '@/components/comment/details/scoreGroup'
	import rankList from '@/components/comment/details/rankList'
	import hot from '@/components/comment/details/hot'
	import {testData} from './js/data.js'
	export default{
		name:'commentDetails',
		mixins:[testData],
		components:{
			analysisEchart,
			scoreGroup,
			rankList,
			hot
		}
	}
</script>

<style scoped>
	.details{
		width: 100%;
		font-size: 1.5vw;
	}
	.simple-header{
		border-left: .2vw solid grey;
		text-align: left;
		margin: 1.2vw 0;
		padding-left:.8vw;
	}
	.simple-body{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>