<template>
	<div class="overallSituation-comp">
		<div class="overall-title">
			整体概况
		</div>
		<div class="overall-content">
			<div class="overall-content-simple" v-for="x in scoreClassify">
				<div :style="x.colorStyle" class="pointSize">{{x.point}}</div>
				<div class="descSize">{{x.desc}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				scoreClassify: [{
					desc: '使用教师数',
					colorStyle: 'color: #999E9F;',
					point: 45
				}, {
					desc: '总分数',
					colorStyle: 'color: #FFCC00;',
					point: 334
				}, {
					desc: '表扬分数',
					colorStyle: 'color: #00CC33;',
					point: 488
				}, {
					desc: '警告分数',
					colorStyle: 'color: red;',
					point: -154
				}, {
					desc: '学校平均分',
					colorStyle: 'color: #0099FF;',
					point: 80
				}, {
					desc: '全省排名',
					colorStyle: 'color: #FF9900;',
					point: 1
				}, ],
			}
		}
	}
</script>

<style scoped>
	.overallSituation-comp{
		width: 100vw;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
	.overall-title{
		width: 96vw;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-bottom: .1vw solid #F2F2F2;
		padding:0 1vw;
		font-size: 4.5vw;
	}
	.overall-content{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		flex-direction: row;
		padding: .5vw;
	}
	.overall-content-simple{
		width: 33vw;
		margin: 1vw 0;
	}
	.pointSize{
		font-size: 8vw;
	}
	.descSize{
		font-size: 4vw;
	}
</style>