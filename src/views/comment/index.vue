<template>
	<div class="main">
		<div class="main-header">
			<!--导航栏-->
			<tabs 
				@click_="changeRouter" 
				:btns="btns"
				>
			</tabs>
			<!--筛选组-->
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
		<div class="main-body">
			<keep-alive :include="commentAlive">
				<router-view />
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import tabs from '@/modules/comment/header/tabGroup'	//二级nav
	import optionsModal from '@/modules/comment/header/optionsModal'	//查询条件
	import {testData} from './js/data.js'
	import {options} from './js/options.js'
	export default{
		name:'comment',
		mixins:[options,testData],
		data(){
			return{
				commentAlive:'commentDetails,commentDesc'
			}
		},
		methods:{
			changeRouter(val){
				//主要是对需要注入的数据进行修改;
				//页面切换
				if(val==0){
					this.$router.push({path:'/comment/details'});
				}else{
					this.$router.push({path:'/comment/desc'});
				}
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
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		background: #EFF4F5;
		font-size: 1vw;
	}
	.main::-webkit-scrollbar {
		width: 0 !important;
		display:none
	}
	.main-header{
		width: 90vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 2vw;
	}
	.main-body{
		width: 88vw;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		background: white;
		padding: 1vw;
	}
</style>