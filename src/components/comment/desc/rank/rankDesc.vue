<template>
	<div class="rankDesc-comp" :data="data" :rankName="rankName">
		<div class="rank-time">
			{{time}}			
		</div>
		<div class="desc-list">
			<div class="desc" v-for="x in commentDescFilter">
				<div class="">
					<img class="desc-img" :src="x.name+'.png'"/>
				</div>
				<div class="desc-details">
					<div class="desc-because">
						<span :class="[x.getScore>0?'add':'reduce']">{{x.getScore>0?"+"+x.getScore:x.getScore}}分&nbsp;</span>
							{{x.getScore>0?'表扬':'批评'}}给{{x.name}},因为{{x.desc}}
					</div>
					<div class="desc-time">
						{{x.time}} 由xxxx点评
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
				if(this.rankName=='全部点评'){
					return this.data.commentDesc;
				}else{
					return this.data.commentDesc.filter((val)=>{
						return val.desc.indexOf(this.rankName)>-1
					})
				}
			}
		},
		props:{
			data:{
				type:Object
			},
			rankName:{
				type:String,
				default:'全部点评'
			},
			time:{
				type:String,
				default:' '
			}
		}
	}
</script>

<style scoped>
	.desc-list{
		width: 100%;
		height: 33vw;
		overflow: auto;
	}
	.desc{
		width: 100%;
		padding: .5vw 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}
	.desc-details{
		width: 81%;
	    display: flex;
	    justify-content: center;
	    align-items: flex-start;
	    flex-direction: column;
	}
	.desc-time{
		color:#999999 ;
		font-size:.8vw;
		margin-top: .5vw;
	}
	.add{
		color:#0099FF;
	}
	.reduce{
		color:red;
	}
	.desc-img{
		width: 4vw;
		height: 4vw;
	}
</style>