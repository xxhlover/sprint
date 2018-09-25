<template>
	<div class="hot-comp">
		 <el-radio-group v-model="active" style="margin-bottom: 30px	">
		    <el-radio-button :class="index==active?'actived':'' " v-for="(x,index) in btns" :label="index" @click="click_(index)">{{x.name}}</el-radio-button>
		  </el-radio-group>
		
		
		 <!--<el-button-group>
		 <el-button  
		 	:class="index==active?'actived':''" v-for="(x,index) in btns" @click="click_(index)">{{x.name}}</el-button>
		</el-button-group>-->
	</div>
</template>

<script>
	export default{
		data(){
			return {
				active:0,
				btns:[
					{
						name:'表扬'
					},{
						name:'警告'
					},
				]
			}
		},
		methods:{
			click_(index){
				this.active = index;
			}
		}
	}
</script>

<style scoped>
	.actived{
		background: #CCCCCC;
		color:white;
	}
	.btnCss{
		width: 80px;
	}
</style>