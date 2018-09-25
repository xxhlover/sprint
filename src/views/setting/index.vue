<template>
	<div>
		<el-container style="height: 98vh; border: 1px solid #eee">
			<el-container>
				<el-aside width="230px" style="border-right: 1px solid gainsboro;">
					<el-menu>
						<!--无子路由-->
						<el-menu-item :index="menu.name" v-for="(menu,index) in menuList" v-if="!menu.children" :key="index" @click="go(menu.url)">
							<span slot="title">{{menu.menu}}</span>
						</el-menu-item>
						<!--有子路由-->
						<el-submenu :index="menu.name" v-else>
							<template slot="title">
								<span>{{menu.menu}}</span>
							</template>
							<el-menu-item-group>
								<el-menu-item :index="child.name" @click="go(child.url)"  v-for="(child,index) in menu.children" :key="index">{{child.menu}}</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main>
					<router-view>
					</router-view>
				</el-main>
			</el-container>

			<!--<el-footer>Footer</el-footer>-->
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menuList: [{
					"menu": "点评类型管理",
					"name": "1",
					"url": "/setting/category"
				}, {
					"menu": "点评分类管理",
					"name": "2",
					"url": "/"
				}, {
					"menu": "计分方案管理",
					"name": "3",
					"url": "/setting/planManager"
				}, {
					"menu": "权限管理",
					"name": "4",
					"children": [{
						"menu": "功能权限管理",
						"name": "4-1",
						"url": "/setting/functionManager"
					}, {
						"menu": "数据权限管理",
						"name": "4-2",
						"url": "/setting/dataManager"
					}, {
						"menu": "用户管理",
						"name": "4-3",
						"url": "/setting/userManager"
					}]
				}]
			}
		},
		methods: {
			go(options){
				this.$router.push({path:options});
			}
		}
	}
</script>

<style>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
	
	.el-aside {
		color: #333;
	}
</style>