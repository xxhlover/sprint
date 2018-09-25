<template>
	<div class="desc-page">
		<mobile-table
		:data="listData"
		:rowsData="rowsData"
		>
		</mobile-table>
	</div>
</template>
<script>
	import mobileTable from '@/components/common/mobileTable'
	export default{
		data(){
			return{
				listData:[{
					rank:1,
					name:'兵兵',
					class:'一年级三班',
					score:100
				}],
				rowsData:[
					{
						name:'排名',
						value:'rank'
					},{
						name:'姓名',
						value:'name'
					},{
						name:'班级',
						value:'class'
					},{
						name:'总分',
						value:'score'
					},
				]
			}
		},
		components:{
			mobileTable
		}
	}
</script>
<style scoped>
	.desc-page{
		padding: 0 10px;
	}
</style>