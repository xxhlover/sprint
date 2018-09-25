<template>
	<div class="data-list">
		<el-table :data="data" 
			border style="width: 100%;" height="500" @selection-change="handleSelectionChange">
			<el-table-column v-if="selection" type="selection" width="55" header-align="center">
			</el-table-column>
			<el-table-column :prop="x.value" :label="x.name" v-for="x in rows" header-align="center">
			</el-table-column>
			<el-table-column fixed="right" label="操作" :width='width' header-align="center">
				<template slot-scope="scope">
					<!--<el-button v-if="access" :type="scope.row.access==0?'success':'info'" size="small" :class="[scope.row.access==0?'el-icon-check':'el-icon-close']" @click="changeAccess(scope.row)">
						{{scope.row.access==0?'允许':'禁止'}}
					</el-button>-->
					<el-button v-if="choose" type="success" size="small" icon="el-icon-sort" @click="choose_(scope.row)">选择</el-button>
					<el-button type="primary" v-if="edit" size="small" icon="el-icon-edit" @click="edit_(scope.row)" >编辑</el-button>
					<el-button  v-if="del" type="danger" size="small" icon="el-icon-delete" @click="delete_(scope.row)">删除</el-button>
					<el-button v-if="status" :type="scope.row.status==0?'success':'info'" size="small" :class="[scope.row.status==0?'el-icon-check':'el-icon-close']" @click="changeStatus(scope.row)">
						{{scope.row.status==0?'恢复':'冻结'}}
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-button v-if="select" type="danger" size="small" class="el-icon-delete" style="margin-top: 15px;" @click="multiDelete_">多选删除</el-button>
		<el-button v-if="select&&multi" type="success" size="small" class="el-icon-check" style="margin-top: 15px;" @click="multiOpen_">多选恢复</el-button>
		<el-button v-if="select&&multi" type="info" size="small" class="el-icon-close" style="margin-top: 15px;" @click="multiClose_">多选冻结</el-button>
		
	</div>
</template>
<script>
	export default {
		data() {
			return {
				select:false,
				chooseSum :[],
			}
		},
		props: {
			data: {
				type: [Object, Array]
			},
			rows:{
				type:[Object,Array]
			},
			selection:{
				type:Boolean,
				default:true
			},
			multi:{
				type:Boolean,
				default:false
			},
			del:{
				type:Boolean,
				default:true
			},
			edit:{
				type:Boolean,
				default:false
			},
			access:{
				type:Boolean,
				default:false
			},
			status:{
				type:Boolean,
				default:false
			},
			choose:{
				type:Boolean,
				default:false
			},
			width:{
				type:Number,
				default:300
			},
			size:{
				type:String,
				default:'small'
			}
		},
		methods: {
			//选中与取消
			handleSelectionChange(val){
				this.chooseSum = val;
				if(this.chooseSum.length>1){
					this.select = true;
				}else{
					this.select = false;
				}
			},
			//改变启用状态
			changeAccess(options) {
				this.$emit('changeAccess', options);
			},
			changeStatus(options){
				this.$emit('changeStatus', options);
			},
			//删除
			delete_(options) {
				this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$emit('deleteInfo', options);
				}).catch(() => {
					
				})
			},
			//选择
			choose_(options){
//				this.$confirm('此操作将同步该条信息, 是否同步?', '提示', {
//					confirmButtonText: '确定',
//					cancelButtonText: '取消',
//					type: 'warning'
//				}).then(() => {
//					this.$emit('syncInfo', options);
//				}).catch(() => {
//					
//				})
				this.$emit('chooseInfo', options);
			},
			//编辑
			edit_(options){
				this.$emit('editInfo', options);
			},
			multiDelete_(){
				this.$confirm('此操作将永久删除多个权限, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$emit('deleteAuth',this.chooseSum);
				}).catch(() => {
				})
			},
			multiSync_(){
				this.$confirm('此操作将同步多个消息, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$emit('syncInfo',this.chooseSum);
				}).catch(() => {
				})
			},
			multiOpen_(){
				this.$confirm('此操作将开启多个权限, 请确认?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$emit('openMultiAuth',this.chooseSum);
				}).catch(() => {
				})
			},
			multiClose_(){
				this.$confirm('此操作将关闭多个权限, 请确认?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$emit('closeMultiAuth',this.chooseSum);
				}).catch(() => {
				})
			}
		},
	}
</script>
<style scoped="scoped">
	.data-list {
		width: 100%;
		font-size: 22px;
	}
	
	.el-icon-delete{
		margin-left: 0!important;
	}
</style>