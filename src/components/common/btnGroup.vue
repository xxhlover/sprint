<template>
	<div class="btn-group">
		<button :class="[index==active?'blueBtn':'normalBtn']" 
		v-for="(x,index) in btns" @click="chooseInfo(index)">{{x.name}}</button>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				active:0
			}
		},
		props:{
			btns:{
				type:[Object,Array]
			}
		},
		methods:{
			chooseInfo(index){
				this.active = index;
				
			}
		}
	}
</script>
<style scoped>
	.btn-group{
		border:.3vw solid #C6EFF3;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		margin: 2vw;
		background: #C6EFF3;
	}
	.btn-group>button{
		width:30vw;
		height: 9vw;
		text-align: center;
		border:0;
		font-size: 4.2vw;
	}
	.normalBtn{
		background: white;
		color: darkgrey;
	}
	.blueBtn{
		background: #C6EFF3;
		color: black;
		border:.3vw solid #C6EFF3;
	}
	
</style>