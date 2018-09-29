<template>
	<div class="showScore-module" >
		<div class="score-header">
			<div class="name">{{data.name || '未选择'}}</div>
			<plan-group>
			</plan-group>
		</div>
		
		<score-echart 
			ref='scoreEchart'
			:data="data"
			:groupPlans = 'groupPlans'
			class="scoreEchart"
			>
		</score-echart>
		<score-desc 
			:data="data"
			@changeStatus_="changeStatus_"
			ref="scoreDesc"
			>
		</score-desc>
	</div>
</template>

<script>
	import scoreEchart from '@/components/comment/desc/score/scoreEchart'
	import scoreDesc from '@/components/comment/desc/score/scoreDesc'
	import planGroup from '@/components/common/planGroup'
	export default{
		created(){
			this.$on('reset',()=>{
				this.$refs['scoreDesc'].$emit('reset');
				this.$refs['scoreEchart'].$emit('reset');
			})
		},
		props:{
			data:{
				type:Object,
			},
			groupPlans:{
				type:[Object,Array]
			}
		},
		methods:{
			changeStatus_(msg){
				this.$emit('changeStatus',msg)
			}
		},
		components:{
			scoreEchart,
			scoreDesc,
			planGroup
		}
	}
</script>

<style scoped>
	.score-header{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.name{
		border-left: 5px solid #0099E8;
		padding-left: 1vw;
		font-size: 1.2vw;
	}
	.showScore-module{
		padding: 0 10px;
	}
</style>