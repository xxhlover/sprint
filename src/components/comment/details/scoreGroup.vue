<template>
	<div class="details-score">
		<div 
			:class="[index==(data.length-1)?'score-group':'borderCss score-group']" 
			v-for="(x,index) in data"
			>
			<div 
				:style="x.colorStyle"
				>
				{{x.point}}
			</div>
			<div>
				{{x.desc}}
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			data:[Object,Array]
		}
	}
</script>

<style scoped>
	.details-score{
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #EFF4F5;
	}
	.score-group{
		width: 100%;
		height: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.score-group>div:nth-of-type(1){
		font-size:3vw;
	}
	.score-group>div:nth-of-type(2){
		font-size:1.2vw;
	}
	.borderCss{
		border-right: .1vw solid #EFF4F5;
	}
</style>