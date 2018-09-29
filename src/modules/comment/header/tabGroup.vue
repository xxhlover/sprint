<template>
	 <div class="header-btn">
	 	<el-button-group>
		 <el-button  
		 	:id="index==active?'actived':''"
		 	:class="[index==0?'leftRadius':index==(btns.length-1)?'rightRadius':'']" v-for="(x,index) in btns" @click="click_(index)">
		 	{{x.name}}
		 </el-button>
		</el-button-group>
	 </div>
</template>

<script>
	export default{
		data(){
			return{
				active:0,
			}
		},
		props:{
			btns:{
				type:[Object,Array]
			}
		},
		methods:{
			click_(index){
				this.active = index;
				this.$emit('click_',index);
			}
		}
	}
</script>

<style>
	.header-btn{
		margin: 2vw 0;
	}
	.header-btn>button{
		margin: 0!important;
		
	}
	.leftRadius{
		border-radius:10px 0 0 10px ;
	}
	.normal{
		
	}
	.rightRadius{
		border-radius:0 10px 10px 0 ;
	}
	#actived{
		background: #0099FF;
		color:white;
	}
	
</style>