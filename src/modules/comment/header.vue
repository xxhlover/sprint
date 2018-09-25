<template>
	 <div class="header-btn">
	 	<el-button-group>
		 <el-button  
		 	:id="index==active?'actived':''"
		 	:class="[index==0?'leftRadius':index==3?'rightRadius':'']" v-for="(x,index) in btns" :key="x.value" @click="click_(index)">{{x.name}}</el-button>
		</el-button-group>
		</el-radio-group>
	 </div>
</template>

<script>
	export default{
		data(){
			return{
				active:0,
				btns:[
					{
						name:'概况',
						value:''
					},{
						name:'班级详情',
						value:'classDetails'
					},{
						name:'小组详情',
						value:'groupDetails'
					},{
						name:'学生详情',
						value:'studentDetails'
					},
				]
			}
		},
		methods:{
			click_(index){
				this.active = index;
				if(index==0){
					this.$router.push({path:'/comment/details'});
				}else{
					this.$router.push({path:'/comment/desc'});
					this.$emit('click_',index);
				}
			}
		}
	}
</script>

<style>
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