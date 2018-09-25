<template>
	<div class="navBar-comp">
		<div class="navBar-comp-title">
			<div class="nav-left">
			</div>
			<div class="nav-title" @click="click_middle">
				{{title}} <van-icon name="arrow-left"  class="transform" />
			</div>
			<div class="nav-right">
				更多筛选
			</div>
		</div>
		<div class="navBar-comp-subtitle">
			<div class="options">
				<div :class="[index==1?'options-simple optionsBorder':'options-simple']" v-for="(x,index) in options" @click="showOptions(index)">
					<span>{{x.name}}<van-icon name="arrow-left"  class="transform optionsPos" /></span>
					<span style="color: #CCCCCC;font-size: 3vw;">{{x.value}}</span>
				</div>
			</div>
			<div class="options-select" v-show="showSelect">
					<div class="options-select-div" v-for="(x,index) in options">
						<div :class="[y.name==x.value?'options-select-options actived':'options-select-options']"
							v-if="x.name!='班级'"
							v-for="(y,index2) in x.child" 
							v-show="index==active_options"
							@click="chooseSelect(index,index2)"
						>
							{{y.name}}
						</div>
						<div :class="[y.name==x.value?'options-select-options actived':'options-select-options']"
							v-if="x.name=='班级'"
							v-show="index==active_options &&index2 == active_class"
							v-for="(y,index2) in x.child" 
							>
							<div class="optionsShowRow">
								<div v-for="(item,index4) in arr" :class="[index4 == active_class?'bottomCss showRow-div':'showRow-div']" @click="changeOptionsClass(index4)">
									{{item}}
								</div>
							</div>
							<div :class="[z.name==y.value?'options-select-options-left actived':'options-select-options-left']" 
								v-for="(z,index3) in y.child"
								@click="chooseSelectClass(index,index2,index3)"
								>
								{{z.name}}
							</div>
						</div>
					</div>
				</div>
			<div class="myDialog" v-show="dialogFormValue">
				<div :class="[active==index?'actived':'']" v-for="(x,index) in details" @click="choosePos(index)">
					{{x.name}}
				</div>
			</div>
		</div>
		<time-picker
			ref="timePicker"
			@confirm="confirm"
			>
		</time-picker>
		<div class="shadow" v-show="showShadow"></div>
	</div>
</template>

<script>
	import timePicker from '@/components/mobile/timePicker'
	export default{
		data(){
			return{
				title:'概况',
				active:0,
				arr:['请选择'],
				active_class:0,
				showShadow:false,
				showSelect:false,
				stepIndex:-1,
				active_options:-1,
				dialogFormValue:false,
			}
		},
		props:{
			options:{
				type:[Object,Array]
			},
			details:{
				type:[Object,Array]
			}
		},
		methods:{
			//切换概况/详情
			click_middle(){
				this.dialogFormValue = !this.dialogFormValue;
			},
			choosePos(index){
				this.title = this.details[index].name;
				this.active = index;
				this.click_middle();
				if(index==0){
					this.$router.push({path:'/mobile/details'})
				}else{
					this.$router.push({path:'/mobile/desc'})
				}
			},
			//点击显示筛选项
			showOptions(index){
				if(this.stepIndex!=index){
					this.showSelect = true;
					this.showShadow = true;
					this.active_options = index;
					this.stepIndex = index;
				}else{
					this.showShadow = !this.showShadow;	
					this.showSelect = !this.showSelect;	
				}
			},
				//选择筛选项下的唯一选项;
			chooseSelect(index,index2){
				this.showSelect = !this.showSelect;	
				this.options[index].value = this.options[index].child[index2].name
				if(index==2 &&index2==3){
					this.$refs['timePicker'].$emit('show')
				}else{
					this.showShadow = !this.showShadow;	
					this.$refs['timePicker'].$emit('hide')
				}
			},
			confirm(){
				this.showShadow = !this.showShadow;	
			},
			//当筛选班级时，调用该方法;
			chooseSelectClass(index,index2,index3){
				this.arr.splice(index2,1,this.options[index].child[index2].child[index3].name);
				this.options[index].child[index2].value =this.options[index].child[index2].child[index3].name
				if(this.arr.length<3){
					this.arr.push('请选择')
					this.active_class ++;
				}else{
					this.showSelect = !this.showSelect;
					this.showShadow = !this.showShadow;	
					this.options[index].value = this.options[index].child[index2].value 
				}
			},
			changeOptionsClass(index){
				this.active_class = index;
				this.arr.splice(index+1);
			},
			
		},
		components:{
			timePicker
		}
	}
</script>

<style scoped>
	.navBar-comp{
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 1;
		
	}
	.navBar-comp-title{
		width: 100vw;
		padding: 2.5vw 0;
		background: #32CFA2 ;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		color:white;
		font-size: 5vw;
	}
	.nav-left{
		position: absolute;
		left: 2vh;
	}
	.nav-title{
		display: flex;
	}
	.nav-right{
		position: absolute;
		right: 2vh;
	}
	.transform{
		transform: rotate(-90deg) scale(.7);
	}
	.myDialog{
		width: 40vw;
		position: absolute;
		background: white;
		top: 1vw;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		box-shadow: 2px 2px 5px #888888;
		border-radius: 1vw;
		font-size: 5vw;
	}
	.myDialog>div{
		width: 100%;
		border-bottom:.3vw solid #F1F1F1;		
		padding: 2vw 0;
	}
	.navBar-comp-subtitle{
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		flex-direction: column;
		background: white;
	}
	.actived{
		color: #32CFA2;
	}
	.options{
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		padding: 1vw 0;
		border-bottom: .1vw solid #F2F2F2;
	}
	.options-simple{
		width: 33vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: 4.2vw;
	}
	.optionsBorder{
		border-left:1px solid #CCCCCC;
		border-right:1px solid #CCCCCC;		
	}
	.optionsPos{
		position: absolute;
	}
	.options-select{
		width: 100vw;
	}
	.options-select-div{
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.options-select-options{
		width: 100vw;
		border-bottom:.3vw solid #F1F1F1;		
		padding: 2vw 0;
		font-size: 4vw;
	}
	.optionsShowRow{
		border-bottom: .3vw solid #F1F1F1;
		text-align: left;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 5vw;
	}
	.showRow-div{
		width: 20%;
		text-align: center;
		border-bottom: .3vw solid white;
	}
	.bottomCss{
		border-bottom: .3vw solid red;
	}
	.options-select-options-left{
		text-align: left;
		width: 20vw;
		height: 9vw;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 4vw;
	}
	.shadow{
		background: black;
		height:100vh;
		width: 100vw;
		opacity: .2;
	}
</style>