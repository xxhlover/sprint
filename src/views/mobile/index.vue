<template>
	<div class="comment-page">
		<navbar-module class="navbar"
		:options="options"
		:details = 'details'
		>
		</navbar-module>
		<div class="body">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import {testData} from './data'
	import navbarModule from '@/modules/mobile/navBar'
	export default{
		mixins:[testData],
		components:{
			navbarModule,
		}
	}
</script>

<style scoped>
	.body{
		margin-top:24vw;
	}
</style>