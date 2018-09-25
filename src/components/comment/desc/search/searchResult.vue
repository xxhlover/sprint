<template>
	<div class="showResult-comp">
		<el-table @row-click="click_" :data="data" :highlight-current-row='true' style="width: 100%">
			<el-table-column v-for="x in rows" :prop="x.value" :label="x.name">
			</el-table-column>
			<el-table-column label="点评得分" fixed="right">
				<template slot-scope="scope" class="template">
					<div class="ceil-btn">
						<button round  v-if="scope.row.addScore!=0 " class="add scoreBtn">+{{scope.row.addScore}}</button>
						<button round  v-if="scope.row.reduceScore!=0 " class="reduce scoreBtn">{{scope.row.reduceScore}}</button>
						<button round v-else-if="scope.row.addScore==0 &&scope.row.reduceScore==0  " class="zero scoreBtn">0</button>
					</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		props: {
			data: {
				type: [Object, Array]
			},
			rows: {
				type: [Object, Array]
			}
		},
		methods: {
			click_(row) {
				this.$emit('click_',row);
			}
		}
	}
</script>

<style scoped>
	.ceil-btn{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-direction: row;
	}
	.add{
		background: #3CC4A9;
		color: #0099FF;
	}
	.reduce{
		background: #FFA07A;
		color: #FF0000;
		margin-left: 10px;
	}
	.scoreBtn{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 35px;
		height: 35px;
		border-radius: 50%;
		border:0px;
	}
	.zero{
		background: darkgrey;
		color:white;
	}
	.showResult-comp :hover{
		cursor: pointer;
	}
</style>