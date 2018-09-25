<template>
	<div class="scoreDesc-comp" :data="data">
		<div @click="click_all" :class="[active==-1?'actived head describe':'head describe'] " >
			<div class="">
				全部点评
			</div>
			<div class="score"  v-if="data.addScore">
				{{data.addScore+data.reduceScore>0?
					"+"+(data.addScore+data.reduceScore): data.addScore+data.reduceScore==0?
					 0:"-"+(data.addScore+data.reduceScore) }}分
			</div>
			<div class="score" v-else>
				0分
			</div>
		</div>
		<div 
			v-if="x.getScore!=0"
			:class="[index==active?'actived details describe':'details describe'] " 
			v-for="(x,index) in descFilter"
			@click="click_(index,x.desc)"
			>
			<div class="">
				{{x.desc}}
			</div>
			<div class="score">
				{{x.getScore>0?"+"+x.getScore:x.getScore}}分
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		created(){
			this.$on('reset',()=>{
			this.click_all();
			})
		},
		data(){
			return{
				active:-1
			}
		},
		props:{
			data:{
				type:Object
			}
		},
		computed:{
			//对desc相同的得分进行统计
			descFilter(){
				let arrName = [],
				arrScore = [],
				arr=[];
				for(let i in this.data.commentDesc){
					if(arrName.indexOf(this.data.commentDesc[i].desc)==-1){
						arrName.push(this.data.commentDesc[i].desc);
					}
				}
				
				for(let i in arrName){
					let point = 0;
					for(let j in this.data.commentDesc){
						if(arrName[i]==this.data.commentDesc[j].desc){
							point+=this.data.commentDesc[j].getScore;
						}
						if( j==this.data.commentDesc.length-1){
								arrScore.push(point);
							}
					}
				}
				for(let i in arrName){
					arr.push({desc:arrName[i],getScore:arrScore[i]})
				}
				return arr;
			}
		},
		methods:{
			click_(index,name){
				this.active = index;
				this.$emit('changeStatus_',name);
			},
			click_all(){
				this.active = -1;
				this.$emit('changeStatus_','全部点评');
			}
		}
	}
</script>

<style scoped>
	.actived{
		background: #E5F4FC;
	}
	.describe{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 50px;
		cursor: pointer;
	}
	.head{
		border-bottom: 1px solid darkgrey;
	}
	.details{
		border-bottom: 1px solid darkgrey;
	}
	.score{
		margin-right: 10px;
	}
</style>