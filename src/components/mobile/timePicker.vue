<template>
	<div class="timePicker-comp">
		<van-popup v-model="dialogFormValue" position="bottom" :overlay="false">
			<div class="time">
				<div :class="[active==index?'time-choose actived':'time-choose normal']" v-for="(x,index) in times" @click="chooseTime(index)">
					<p style="font-size: 4vw;color: #CCCCCC;">{{x.name}}</p>
					<span>{{x.value}}</span>
				</div>
			</div>
  			<van-datetime-picker
  				v-model="currentDate"
				:formatter="formatter"
				type="date"
				@change="changeTime"
				@confirm = 'confirm'
			/>
</van-popup>
	</div>
</template>

<script>
	export default{
		created(){
			this.$on('show',()=>{
				this.dialogFormValue = true;
			})
			this.$on('hide',()=>{
				this.dialogFormValue = false;
			})
		},
		data(){
			return {
				currentDate:new Date(),
				active:0,
				dialogFormValue:false,
				times:[
					{
						name:'开始时间',
						value:new Date().getFullYear() + '-' +((new Date().getMonth() + 1)>=10?(new Date().getMonth() + 1):'0'+(new Date().getMonth() + 1))  + '-' + (new Date().getDate()>=10?new Date().getDate():'0'+new Date().getDate())
					},{
						name:'结束时间',
						value:new Date().getFullYear() + '-' +((new Date().getMonth() + 1)>=10?(new Date().getMonth() + 1):'0'+(new Date().getMonth() + 1))  + '-' + (new Date().getDate()>=10?new Date().getDate():'0'+new Date().getDate())
					},
				]
			}
		},
		methods:{
			formatter(type, value) {
		      if (type === 'year') {
		        return `${value}年`;
		      } else if (type === 'month') {
		        return `${value}月`
		      }else if(type==='day'){
		      	return `${value}日`
		      }
		      return value;
		    },
		    unformatter(arr){
		    	for(let i in arr){
		    		if(arr[i].indexOf('年')>-1){
		    			arr[i] = arr[i].substr(0,4)
		    		}else {
		    			arr[i] = arr[i].slice(0,2)
		    		}
		    	}
		    	return arr;
		    },
		    chooseTime(index){
		    	this.active = index;
		    },
		    changeTime(obj){
		    	let str = this.unformatter(obj.getValues())
		    	this.times[this.active].value = str.join('-')
		    	//TODO 结束时间比开始时间大的判断条件
		    },
		    confirm(){
		    	this.dialogFormValue = false;
					this.$emit('confirm');
		    	console.log(this.times[0].value,this.times[1].value)
		    }
		}
	}
</script>

<style scoped>
	.time{
			width: 100vw;
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-direction: row;
			font-size: 5vw;
		}
		.actived{
			border-bottom: .6vw solid #32CFA2;
		}
		.time-choose{
			width: 30vw;
		}
		.normal{
			border-bottom: .6vw solid white;
		}
</style>