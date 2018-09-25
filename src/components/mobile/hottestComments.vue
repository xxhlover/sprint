<template>
	<div class="comments-comp">
		<div class="comments-title">
			最热点评
		</div>
		<div class="comments-content">
			<btn-group
			:btns="btns"
			></btn-group>
		</div>
	</div>
</template>

<script>
	import btnGroup from '@/components/common/btnGroup'
	export default{
		data(){
			return{
				btns:[
					{
						name:'表扬'
					},{
						name:'警告'
					},
				]
			}
		},
		components:{
			btnGroup
		}
	}
</script>

<style scoped>
	.comments-comp{
		width: 100vw;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
	.comments-title{
		width: 96vw;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-bottom: .1vw solid #F2F2F2;
		padding:0 1vw;
		font-size: 4.5vw;
	}
	.comments-content{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		flex-direction: row;
		padding: .5vw;
	}
</style>