<template>
	<div class="details">
		<div class="details-score"> 
			<div :class="[index==5?'':'borderCss']" v-for="(x,index) in scoreClassify">
				<div :style="x.colorStyle">{{x.point}}</div>
				<div>{{x.desc}}</div>
			</div>
		</div>
		<div class="rank">
				<div class="rank-header">
					总分排行榜
				</div>
				<div class="rank-body">
					<rank-list :data="rankClass" headColor="background: #0099CC;"></rank-list>
					<rank-list :data="rankTeacher" headColor="background: #FF9933;"></rank-list>
				</div>
		</div>
		<div class="hot">
			<div class="hot-header">
				最热点评
			</div>
			<div class="hot-body">
				<hot></hot>
			</div>
		</div>
	</div>
</template>

<script>
	import rankList from '@/components/comment/details/rank/rankList'
	import hot from '@/components/comment/details/hot/hot'
	import {testData} from './js/data.js'
	export default{
		mixins:[testData],
		components:{
			rankList,
			hot
		}
	}
</script>

<style scoped>
	.details{
		width: 100%;
	}
	.details-score{
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #EFF4F5;
	}
	.details-score>div{
		width: 100%;
		height: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.details-score>div>div:nth-of-type(1){
		font-size: 30px;
	}
	.borderCss{
		border-right: 1px solid #EFF4F5;
	}
	.rank-header,.hot-header{
		border-left: 3px solid grey;
		text-align: left;
		margin: 10px 0;
	}
	.rank-body{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>