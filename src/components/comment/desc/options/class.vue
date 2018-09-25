<template>
	<div class="searchClass">
		<div style="width:60px">
			班级
		</div>
		 <el-select
		 	style="margin: 0 5px;"
		 	v-model="x.value" 
		 	:placeholder="x.placeholder" @change="changeSchool(index)" v-for="(x,index) in chooseData" :disabled='index>disable'>
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
		justify-content: flex-start;
		align-items: center;
		width: 60%;
	}
</style>