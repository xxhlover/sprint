<template>
	<div class="table-comp">
		<div class="table-title" >
			<div v-for="x in rowsData"> {{x.name}}</div>
		</div>
		<div class="table-list" v-for="x in data">
			<div class="table-list-simple" v-for="y in rowsData">
				{{y.value=='score'?x[y.value]>0?'+'+x[y.value]:'-'+x[y.value]:x[y.value]}}
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			rowsData:{
				type:[Object,Array]
			},
			data:{
				type:[Object,Array]
			}
		}
	}
</script>
<style scoped>
	.table-comp{
		width: 96vw;
		font-size: 5vw;
	}
	.table-title{
		background: #F2F2F2;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: row;
		height: 10vw;
	}
	.table-list{
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: row;
		border:.3vw solid #F2F2F2;
		padding: 1.3vw 0;
	}
	.table-list-simple{
		width: 33vw;
	}
	
</style>