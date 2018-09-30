<template>
  <div class="tabs">
  	<el-tabs v-model="activeName" @tab-click="handleClick">
	    <el-tab-pane label="系统图标" name="first">
	    	<div class="iconList">
	    		<div class="iconList-simple" v-for="(x,index) in sysIcons" @click="chooseIcon(index)">
	    			<div class="sysIcon">
	    				<div class="icons" :class="[active==index?'actived':'']">
	    					<i class="iconSize el-icon-circle-check"></i>
	    				</div>
		    			<img :src="x.url"/>
		    		</div>
	    		</div>
	    	</div>
	    </el-tab-pane>
	    <el-tab-pane label="自定义图标" name="second">自定义图标2</el-tab-pane>
	  </el-tabs>
	  <div class="tabs-content">
	  	
	  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      	active:-1,
        activeName: 'first'
      };
    },
    props:{
    	sysIcons:{
    		type:[Object,Array]
    	},
    	data:{
    		type:String
    	}
    },
    mounted(){
    	this.sysIcons.filter((data,index)=>{
    		if(data.url == this.data) this.active = index; 
    	})
    },
    methods: {
      handleClick(tab, event) {
      },
      chooseIcon(index){
      	this.active = index;
      	this.$emit('changeIcon',index);
      }
    }
  };
</script>
<style scoped>
	.tabs{
		width: 100%;
		height:100%;
	}
	.iconList{
		width: 100%;
		height: 300px;
		overflow: auto;
	}
	.iconList-simple{
		width: 50px;
		height: 50px;
		float: left;
		margin: 10px 10px 0 0;
		cursor: pointer;
		position: relative;
	}
	.sysIcon{
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border:1px solid #999999;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.sysIcon>img{
		width: 100%;
		height: 100%;
	}
	.icons{
		background: white;
		display: none;
		position: absolute;
		right: 0;
		top:0;
		z-index: 1;
	}
	.iconSize{
		color: #0099FF;
		transform: scale(1.5);
	}
	.actived{
		display: block;
	}
</style>