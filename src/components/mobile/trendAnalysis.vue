<template>
	<div class="analysis-comp">
		<div class="analysis-title">
			趋势分析
		</div>
		<div class="analysis-content">
			<btn-group
			:btns='btns'
			></btn-group>
		</div>
	</div>
</template>

<script>
	import btnGroup from '@/components/common/btnGroup'
	export default{
		data(){
			return{
				active:0,
				btns:[
					{
						name:'点评总分数'
					},{
						name:'表扬分数'
					},{
						name:'警告分数'
					},
				]
			}
		},
		methods:{
			chooseInfo(index){
				this.active = index
			}
		},
		components:{
			btnGroup
		}
	}
</script>

<style scoped>
	.analysis-comp{
		width: 100vw;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
	.analysis-title{
		width: 96vw;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-bottom: .1vw solid #F2F2F2;
		padding:0 1vw;
		font-size: 4.5vw;
	}
	.analysis-content{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		flex-direction: row;
		padding: .5vw;
	}
</style>