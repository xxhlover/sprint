<template>
	<div class="showScore-module" >
		<score-echart :data="data" class="scoreEchart"></score-echart>
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
	export default{
		created(){
			this.$on('reset',()=>{
				this.$refs['scoreDesc'].$emit('reset');
			})
		},
		props:{
			data:{
				type:Object,
			}
		},
		methods:{
			changeStatus_(msg){
				this.$emit('changeStatus',msg)
			}
		},
		components:{
			scoreEchart,
			scoreDesc
		}
	}
</script>

<style scoped>
	.showScore-module{
		padding: 0 10px;
	}
</style>