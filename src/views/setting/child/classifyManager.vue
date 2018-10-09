<template>
	<div class="classify-page">
		<el-button type="primary" @click="addClassify" size="small">+新增一级分类</el-button>
		 <el-tree
	      :data="data"
	      show-checkbox
	      node-key="id"
	      default-expand-all
	      :expand-on-click-node="false">
	      <span class="custom-tree-node" slot-scope="{ node, data }">
	        <span>{{ node.label }}</span>
	        <span>
	          <el-button
	          	v-if="node.level==1"
	            type="text"
	            size="mini"
	            @click="() => append(node,data)">
	            	添加
	          </el-button>
	          <el-button
	            type="text"
	            size="mini"
	            @click="() => edit(node,data)">
	            	编辑
	          </el-button>
	          <el-button
	            type="text"
	            size="mini"
	            @click="() => remove(node, data)">
	            	删除
	          </el-button>
	        </span>
	      </span>
	    </el-tree>
	    
	    <tree-dialog
	    	ref='treeDialog'
	    	@submit_="updateLabel"
	    	>
	    </tree-dialog>
	</div>
</template>

<script>
	import treeDialog from '@/components/setting/treeDialog'
	 export default {
    data() {
      return {
        data: [{
          id: 1,
          label: '德育',
          children: [{
            id: 11,
            label: '纪律',
          },{
            id: 12,
            label: '卫生',
          },{
            id: 13,
            label: '仪表',
          },]
        }, {
          id: 2,
          label: '智育',
          children: [{
            id: 21,
            label: '作业'
          }]
        }],
        chooseNode:{}
      };
    },
    methods:{
    	addClassify(){
    		let obj = {
    			id:'',
    			label:'新建一级分类',
    			children:[]
    		}
    		obj.id = this.data[this.data.length-1].id+1;
    		obj.children.push({
    			id:obj.id+''+(obj.children?obj.children.length+1:1),
    			label:'新建二级分类'
    		})
    		this.data.push(obj);
    	},
    	append(node,data) {
    		let id = node.data.children.length-1>=0?node.data.children[node.data.children.length-1].id:node.data.id+'0';
	        const newChild = { id: id-(-1), label: '新建二级分类', children: [] };
	        if (!data.children) {
	          this.$set(data, 'children', []);
	        }
	        data.children.push(newChild);	
	      },
		edit(node,data){
			this.$refs['treeDialog'].$emit('show',node.data);
			this.chooseNode = node.data;
			console.log(this.data)
		},
	    remove(node, data) {
	        const parent = node.parent;
	        const children = parent.data.children || parent.data;
	        const index = children.findIndex(d => d.id === data.id);
	        children.splice(index, 1);
	      },
	      updateLabel(val){
	      	this.chooseNode.label = val;
	      }
    },
    components:{
    	treeDialog
    }
  };
</script>

<style>
</style>