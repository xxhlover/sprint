<template>
	<div class="rank-comp" :data="data" >
		<div class="rank-header rankRow" :style="headColor">
			<div class="rank-header-center">
				{{data.desc}}排行榜
			</div>
			<div class="rank-header-right">
				<a href="">更多>></a>
			</div>
		</div>
		<div class="rank-list">
			<div :class="[index%2==0?'tableList':'greyCss tableList']" v-for="(x,index) in data.arr">
				<div class="paiming">
					{{index+1}}
				</div>
				<div v-for ="y in rows">
					{{x[y.value]}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				rows:[
					{
						value:'name'
					},{
						value:'point'
					},
				]
			}
		},
		props: {
			data: {
				type: [Array, Object]
			},
			headColor:{
				type:String,
				default:'background: #0099CC;'
			}
		}
	}
</script>

<style scoped>
	.rank-comp {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
	
	.rank-header,
	.rank-list {
		width: 30vw;
	}
	.tableList>div{
		width: 100%;
	}
	.rank-header {
		justify-content: center;
		align-items: center;
		position: relative;
		color: white;
		height: 3vw;
	}
	
	.rank-header a {
		text-decoration: none;
		color: white;
		font-size: 1vw;
	}
	
	.rank-header-right {
		position: absolute;
		right: 1vw;
	}
	
	.rankRow {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.info {
		justify-content: space-between;
		align-items: center;
		background: red;
	}
	.tableList{
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: row;
		height: 3vw;
	}
	.tableColumn{
		width: 33%;
	}
	.greyCss{
		background: #F2F2F2;
	}
</style>