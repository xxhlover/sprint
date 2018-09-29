<template>
	<div class="planGroup-comp">
		<el-cascader
		  :options="options"
		  v-model="selectedOptions"
		  placeholder='小组方案:请选择'
		  @change="change"
		></el-cascader>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: 'groupA',
					label: 'A小组',
					children: [{
						value: 'planA',
						label: '计分方案A',
					}, {
						value: 'planB',
						label: '计分方案B'
					}]
				}, {
					value: 'groupB',
					label: 'B小组',
					children: [{
						value: 'planA',
						label: '计分方案A',
					}, {
						value: 'planB',
						label: '计分方案B'
					}]
				},{
					value: 'groupC',
					label: 'C小组',
					children: [{
						value: 'planA',
						label: '计分方案A',
					}, {
						value: 'planB',
						label: '计分方案B'
					}]
				},],
				selectedOptions: []
			};
		},
		methods:{
			change(val){
				console.log(val)
			}
		}
	};
</script>

<style>

</style>