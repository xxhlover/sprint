<template>
	<div class="rank-comp">
		<div class="rank-header">
			<div class="rank-header-desc">
					<div 
						:class="[index==0?'rank-div rankLeft':'rank-div rankRight', active==index?'actived':''] " 
						v-for="(x,index) in ranks"
						@click="click_(index)"
						>
					{{rankName}}-{{x.name}}
				</div>
			</div>
			<div class="rank-list">
				<div class="student-list" v-for="(x,index ) in commentDescFilter">
					<div class="std-index">
						{{index+1}}
					</div>
					<div class="std-name">
						{{x.name}}
					</div>
					<div class="std-desc">
						{{x.desc}}
					</div>
					<div class="std-score">
						{{x.getScore>0?'+'+x.getScore:x.getScore}}分
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		computed:{
			commentDescFilter(){
				if( !this.data.commentDesc){
					return ;
				}else{
					if(this.rankName=='全部点评'){
						return this.data.commentDesc.filter((val,index)=>{
							return index<this.length
						})
					}else{
						return this.data.commentDesc.filter((val,index)=>{
							return val.desc.indexOf(this.rankName)>-1
						})
					}
				}
			}
		},
		props:{
			data:{
				type:[Object,Array]
			},
			rankName:{
				type:String,
				default:'全部点评'
			}
		},
		data(){
			return{
				length:3,
				active:0,
				ranks:[
					{
						name:'学生排行榜'
					},{
						name:'小组排行榜'
					}
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
	.rank-comp{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.rank-header{
		width: 100%;
	}
	.rank-header-desc{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;
		font-size: .5vw;
	}
	.rank-div{
		width: 11vw;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		border:.5px solid darkgrey;
		cursor: pointer;
		padding: .2vw 0;
	}
	.rankLeft{
		border-radius: .8vw 0 0 .8vw;
	}
	.rankRight{
		border-radius:  0 .8vw .8vw 0;
	}
	.actived{
		background: #0099FF;
		color:white;
	}
	.student-list{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid darkgrey;
		height: 50px;
	}
	.student-list>div{
		width: 25%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>