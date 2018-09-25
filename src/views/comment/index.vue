<template>
	<div class="main">
		<div class="header">
			<tabs @click_="changeRouter"></tabs>
			<options-modal
				:chooseData="classOptions"
				:disabled='optionsData.disabled'
				@changeSchool="changeSchool"
				@changeSubject="changeSubject"
				@changeDate="changeDate"
				@submit="submit"
				>
			</options-modal>
		</div>
		<div class="body">
				<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import tabs from '@/modules/comment/header'	//二级nav
	import optionsModal from '@/modules/comment/optionsModal'	//查询条件
	import {testData} from './js/data.js'
	import {options} from './js/options.js'
	
	
	export default{
		mixins:[options,testData],
		methods:{
			changeRouter(val){
				//主要是对需要注入的数据进行修改;
				console.log(val);
			},
		},
		components:{
			tabs,
			optionsModal,
		}
	}
</script>

<style scoped>
	.main{
		width: 100%;
		margin-top: 50px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
	.header{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		margin: 50px 0;
	}
	.body{
		width: 80%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
</style>