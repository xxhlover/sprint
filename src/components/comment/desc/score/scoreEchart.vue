<template>
	<div class="scoreEchart-comp" :data="data">
		<span class="name">{{data.name || '未选择'}}</span>
		<div class="echart">
			这里用echart插件解决
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			data:{
				type:Object
			}
		}
	}
</script>

<style scoped>
	.scoreEchart-comp{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.name{
		align-self: flex-start;
		border-left: 5px solid #0099E8;
	}
	.echart{
		width: 100%;
		height: 300px;
	}
</style>