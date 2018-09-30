<template>
	<div class="searchClass">
		<div style="white-space: nowrap;" v-if="showDesc">
			班级:
		</div>
		 <el-select
		 	style="margin: 0 5px;"
		 	v-model="x.value" 
		 	:placeholder="x.placeholder" @change="changeSchool(index)" v-for="(x,index) in chooseData" :disabled='index>disable' resize="horizontal">
		    <el-option
		      v-for="(item,index) in x.options"
		      :label="item.name"
		      :value="item.name">
		    </el-option>
		  </el-select>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				disable:0,
			}
		},
		props:{
			chooseData:{
				type:[Object,Array]
			},
			showDesc:{
				type:Boolean,
				default:true
			}
		},
		methods:{
			changeSchool(index){
				if(index==0){
					this.disable=0;
					this.chooseData[1].value=''
					this.chooseData[2].value=''
				}
				this.disable++;
				this.$emit('changeSchool_',this.chooseData[index].value,index);
			},
		}
	}
</script>

<style scoped>
	.searchClass{
		display: flex;
		align-items: center;
		width: 100%;
	}
</style>