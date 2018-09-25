<template>
	<div class="scoreList-comp">
		<div class="scoreList-title">
			总分排行榜
		</div>
		<div class="scoreList-content">
			<btn-group :btns="btns"></btn-group>
			<mobile-table 
			class="table"
			:data="rankData"
			:rowsData = "rowsData"
			>
			</mobile-table>
		</div>
	</div>
</template>

<script>
	import btnGroup from '@/components/common/btnGroup'
	import mobileTable from '@/components/common/mobileTable'
	export default{
		data(){
			return{
				btns:[
					{
						name:'班级排行榜'
					},{
						name:'教师排行榜'
					},
				],
				rankData:[
					{
						className:'一年级三班',
						score:100
					},{
						className:'一年级二班',
						score:99
					},{
						className:'一年级一班',
						score:80
					},
				],
				rowsData:[
					{
						name:'排名',
						value:'rank'
					},{
						name:'班级',
						value:'className'
					},{
						name:'总分',
						value:'score'
					},
				]
			}
		},
		components:{
			btnGroup,
			mobileTable	
		}
	}
</script>

<style scoped>
	.scoreList-comp{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100vw;
		flex-direction: column;
	}
	.scoreList-title{
		width: 96vw;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-bottom: .1vw solid #F2F2F2;
		padding:0 1vw;
		font-size: 4.5vw;
	}
	.scoreList-content{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		flex-direction: row;
		padding: .5vw;
	}
</style>