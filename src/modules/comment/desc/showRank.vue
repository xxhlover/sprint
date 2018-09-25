<template>
	<div class="showRank-module" :data="data">
		<div class="rank">
			<rank 
				:data="data"
				:rankName="rankName"
				>
			</rank>
		</div>
		<div class="rank-desc">
			<rank-desc 
				:data="data"
				:rankName="rankName"
				>
				
			</rank-desc>
		</div>
	</div>
</template>

<script>
	import rank from '@/components/comment/desc/rank/rank'
	import rankDesc from '@/components/comment/desc/rank/rankDesc'
	export default{
		props:{
			data:{
				type:[Object,Array]
			},
			rankName:{
				type:String,
				default:'全部点评'
			}
		},
		components:{
			rank,
			rankDesc
		}
	}
</script>

<style scoped>
	.showRank-module{
		padding: 0 10px;
	}
</style>