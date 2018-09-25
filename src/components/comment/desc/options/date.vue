<template>
	<div class="searchDate">
		<!--用button改变背景颜色-->
		日期:
		<div :class="[active==index?'tag actived':'tag', index==3?'bigBtn':'']" v-for="(x,index) in dates" @click="click_(index,x.name)">
			{{x.name}}
		</div>
		<div class="">
			从:
			<el-date-picker :disabled="disabled" v-model="form.dateFrom" type="date" value-format="yyyy-MM-dd" placeholder="选择开始日期">
			</el-date-picker>
		</div>
		<div class="">
			到:
			<el-date-picker :disabled="disabled" v-model="form.dateTo" type="date" value-format="yyyy-MM-dd" placeholder="选择结束日期">
			</el-date-picker>
		</div>
		<el-button type="primary" @click="submit_">确定</el-button>
	</div>
</template>

<script>
	export default {
		props:{
			disabled:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				active: 0,
				form: {
					dateFrom: '',
					dateTo: ''
				},
				dates: [{
					name: '今日',
					value: '0'
				}, {
					name: '本周',
					value: '1'
				}, {
					name: '本月',
					value: '2'
				}, {
					name: '选择日期',
					value: '3'
				}]
			}
		},
		methods: {
			click_(index, name) {
				this.active = index;
				this.$emit('changeDate_', name);
			},
			submit_(){
				this.$emit('submit_');
			}
		}

	}
</script>

<style scoped>
	.searchDate {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.tag {
		width: 45px;
		height: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
		white-space: nowrap;
		cursor: pointer;
		border-radius: 10px;
	}
	
	.actived {
		background: #3BB608;
		color: white;
	}
	
	.bigBtn {
		width: 80px;
	}
</style>