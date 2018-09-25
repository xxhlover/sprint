<template>
	<div class="searchBtn-comp">
		<div class="inp-div">
			<el-input :placeholder="placeholder" class="inp" v-model="searchVal">
				<el-button slot="append" icon="el-icon-search" @click="search_"></el-button>
			</el-input>
		</div>
		<el-select  v-model="value" placeholder="请选择" class="select"  @change="change">
		    <el-option
		      v-for="(x,index) in sorts"
		      :label="x.name"
		      :value="x.value"
		      >
		    </el-option>
		  </el-select>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				searchVal:'',
				value:'按首字母排序',
				sorts:[
					{
						name:'按首字母排序',
						value:0
					},{
						name:'按总分排序',
						value:1
					},{
						name:'按表扬分数排序',
						value:2
					},{
						name:'按警告分数排序',
						value:3
					}
				]
			}
		},
		props:{
			placeholder:{
				type:String,
				default:'请输入内容'
			}
		},
		methods:{
			change(msg){
				this.$emit('changeSort',msg)
			},
			search_(){
				this.$emit('search',this.searchVal)
			}
		}
	}
</script>

<style scoped>
	.searchBtn-comp{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		height: 60px;
	}
	.inp-div{
		width: 55%;
		border-radius: 10px;
		overflow: hidden;
		border:1px solid darkgrey;
	}
	.inp{
		width: 105%;
		border: 0px;
	}
	.select{
		width:40%;
		height: 40px;
	}
</style>