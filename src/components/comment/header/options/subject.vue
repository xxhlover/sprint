<template>
	<div class="searchSubject">
		<!--用button改变背景颜色-->
		学科:
		<div :class="[active==index?'tag actived':'tag']" v-for="(x,index) in subject" @click="click_(index,x.name)">
			{{x.name}}
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				active:0,
				subject:[
					{
						name:'全部',
						value:'all'
					},{
						name:'语文',
						value:'Chinese'
					},{
						name:'数学',
						value:'Math'
					},{
						name:'英语',
						value:'English'
					},{
						name:'政治',
						value:'Politics'
					}
				]
			}
		},
		methods:{
			click_(index,name){
				this.active=index;
				this.$emit('changeSubject_',name);
			}
		}
		
	}
</script>

<style scoped>
	.searchSubject{
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 1vw 0;
	}
	.tag{
		width: 3.5vw;
		height: 2vw;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 1vw;
		white-space: nowrap;
		cursor: pointer;
		border-radius: .8vw;
	}
	.actived{
		background: #3BB608;
		color:white;
	}
	.normal{
		/*background: ;*/
	}
</style>