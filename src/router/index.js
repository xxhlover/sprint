import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'index',
		component: resolve => require(['@/views/index'], resolve),
	}, {
		path: '/comment',
		name: 'comment',
		component: resolve => require(['@/views/comment/index'], resolve),
		redirect: '/comment/details',
		children: [{
			path: 'details',
			name:'commentDetails',
			component: resolve => require(['@/views/comment/details'], resolve),
		}, {
			path: 'desc',
			name:'commentDesc',
			component: resolve => require(['@/views/comment/desc'], resolve)
		}]
	}, {
		path: '/setting',
		name: 'setting',
		component: resolve => require(['@/views/setting/index'], resolve),
		redirect: '/setting/categoryManager',
		children: [{
				path: 'categoryManager',
				component: resolve => require(['@/views/setting/child/categoryManager'], resolve)
			},{
				path: 'classifyManager',
				component: resolve => require(['@/views/setting/child/classifyManager'], resolve)
			},{
						path:'planManager',
						component:resolve=>require(['@/views/setting/child/planManager'],resolve)
			},{
				path: 'functionManager',
				component: resolve => require(['@/views/setting/child/functionManager'], resolve)
			}, {
				path: 'dataManager',
				component: resolve => require(['@/views/setting/child/dataManager'], resolve)
			}, {
				path: 'userManager',
				component: resolve => require(['@/views/setting/child/userManager'], resolve)
			},
		]
	}, {
		path: '/mobile',
		name: 'mobile',
		component: resolve => require(['@/views/mobile/index'], resolve),
		redirect: '/mobile/details',
		children: [{
			path: 'details',
			component: resolve => require(['@/views/mobile/details'], resolve),
			meta: {keepAlive: true}
		}, {
			path: 'desc',
			component: resolve => require(['@/views/mobile/desc'], resolve),
			meta: {keepAlive: true}
		}]
	}]

})