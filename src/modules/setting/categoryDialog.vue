<template>
	<div class="categoryDialog-module">
		<el-dialog
			v-if="dialogFormValue"
			  title="选择"
			  :visible.sync="dialogFormValue"
			  width="50%"
			  >
			  <div class="content">
			  	<div class="categoryLists">
				  	<div class="lists oldCategory-lists">
				  		<div class="iconList-simple" v-for="(x,index) in oldCategorys" :class='x.flag?"actived":""' @click="chooseOld(index)">
				  			<div class="sysIcon-score">
								{{x.value}}
							</div>
				  			<div class="sysIcon" >
					    			<img :src="x.url"/>
					    		</div>
					    		<div class="simple-desc">
					    			{{x.desc}}
					    		</div>
				  		</div>
				  	</div>
				  	<div class="lists newCategory-lists">
				  		<div class="iconList-simple" v-for="(x,index) in newCategorys" :class='x.flag?"actived":""' @click="chooseNew(index)">
				  			<div class="sysIcon-score">
								{{x.value}}
							</div>
				  			<div class="sysIcon">
					    			<img :src="x.url"/>
					    		</div>
					    		<div class="simple-desc">
					    			{{x.desc}}
					    		</div>
				  		</div>
				  	</div>
			  </div>
			  </div>
			<div class="footer">
				<el-button @click="close_" round>取消</el-button>
				<el-button type="primary" @click="submit_" round>确认</el-button>
			</div>
			</el-dialog>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				dialogFormValue:false,
				oldCategorys:[],
				newCategorys:[]
			}
		},
		mounted(){
			this.$on('show',(data1,data2)=>{
				console.log('zzzzzz')
				this.dialogFormValue = true;
				this.oldCategorys = JSON.parse(JSON.stringify(data1));
				this.newCategorys = JSON.parse(JSON.stringify(data2));
				console.log(data1,data2)
			})
			this.$on('hide',()=>{
				this.dialogFormValue = false;
			})
		},
		methods:{
			chooseOld(index){
				this.oldCategorys[index].flag = true;
				this.newCategorys[index].flag = false;
			},
			chooseNew(index){
				this.newCategorys[index].flag = true;
				this.oldCategorys[index].flag = false;
			},
			submit_(){
				let arr = [];
				this.oldCategorys.filter((val)=>{
					if(val.flag){
						arr.push(val)
					}
				})
				this.newCategorys.filter((val)=>{
					if(val.flag){
						delete val.flag;
						Object.assign(val,{type:'self'})
						arr.push(val)
					}
				})
				this.$emit('submit_',arr);
			},
			close_(){
				this.dialogFormValue = false;
			}
			
		},
	}
</script>

<style scoped>
	.content{
		max-height: 500px;
		overflow: auto;
	}
	.categoryLists{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		border-top: 1px solid #CCCCCC;
		border-bottom: 1px solid #CCCCCC;
	}
	.lists{
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
	.iconList-simple{
		width: 80px;
		height: 80px;
		cursor: pointer;
		margin:20px;
		position: relative;
		border: 1px solid #CCCCCC;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.sysIcon{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border:1px solid #CCCCCC;
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
		position: absolute;
		right: 5px;
		top:5px;
		z-index: 1;
	}
	.iconSize{
		transform: scale(1.5);
	}
	.actived{
		border:1px solid #0099FF;
	}
	.footer{
		margin-top: 40px;
	}
	.sysIcon-score{
		position: absolute;
	    top: 18%;
	    right: 25%;
	    background: #05A488;
	    width: 20px;
	    height: 20px;
	    border-radius: 50%;
	    z-index: 1;
	    color: white;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	}
</style>