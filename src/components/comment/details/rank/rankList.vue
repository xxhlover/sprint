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
			<el-table :data="data.arr" stripe style="width: 100%" :show-header="false">
				<el-table-column v-for="x in rows" :prop="x.value" header-align="center">
				</el-table-column>
			</el-table>

			<!--<div class="info rankRow" v-for="x in data.arr" >
				<div>{{x.name}}</div>
				<div>{{x.point}}</div>
			</div>-->
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
		width: 60%;
	}
	
	.rank-header {
		justify-content: center;
		align-items: center;
		position: relative;
		color: white;
		height: 50px;
	}
	
	.rank-header a {
		text-decoration: none;
		color: white;
		font-size: 13px;
	}
	
	.rank-header-right {
		position: absolute;
		right: 10px;
	}
	
	.rankRow {
		display: flex;
		flex-direction: row;
	}
	
	.info {
		justify-content: space-between;
		align-items: center;
		background: red;
	}
</style>