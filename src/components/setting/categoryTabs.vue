<template>
  <div class="tabs">
  	<el-tabs v-model="activeName" @tab-click="handleClick">
	    <el-tab-pane label="系统图标" name="first">
	    	<div class="iconList">
	    		<div class="iconList-simple" v-for="(x,index) in sysIcons" @click="chooseIcon(index,'sysIcons')">
	    			<div class="sysIcon">
	    				<div class="icons" :class="[active==index?'actived':'']">
	    					<i class="iconSize el-icon-circle-check"></i>
	    				</div>
		    			<img :src="x.url"/>
		    		</div>
	    		</div>
	    	</div>
	    </el-tab-pane>
	    <el-tab-pane label="自定义图标" name="second">
	    	<div class="addSelfIcons">
						<el-upload
						  action="https://jsonplaceholder.typicode.com/posts/"
						  list-type="picture-card"
						  :on-preview="handlePictureCardPreview"
						  :on-remove="handleRemove">
						  <i class="el-icon-plus"></i>
						</el-upload>
						<el-dialog :visible.sync="dialogVisible">
						  <img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>
						<!--<div class="upload-text"> <span>可以从本地导入,然后选择</span><span>合适的作为头像</span></div>-->
	    	</div>
	    	<div class="iconList-simple" v-for="(x,index) in selfIcons" @click="chooseIcon(index,'selfIcons')" v-if="selfIcons.length>0">
	    		<img :src="x.url"/>
	    	</div>
	    	<div class="addPrompt" v-else>
	    	</div>
	    </el-tab-pane>
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
        activeName: 'first',
        imageUrl: '',
        dialogVisible:false,
        dialogImageUrl:''
      };
    },
    props:{
    	sysIcons:{
    		type:[Object,Array]
    	},
    	selfIcons:{
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
      chooseIcon(index,type){
      	this.active = index;
      	this.$emit('changeIcon',index,type);
      },
      //上传
      handleAvatarSuccess(){
      	
      },
      handlePictureCardPreview(){
      	
      },
      handleRemove(){}
      
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
	/*上传*/
	.addSelfIcons{
		width: 100%;
		height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
		overflow: auto;
	}
	.upload-div{
		border-radius: 50%;
		border:1px solid #CCCCCC;
		width: 100px;
		height: 100px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.icon-plus{
		position: absolute;
		z-index: 100;
		transform: scale(2);
		color: #169BD5;
		top: 48%;
		left: 48%;
	}
	.upload-text{
		position: absolute;
		bottom: 20%;
		color: #9999B3;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>