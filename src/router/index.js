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
			component: resolve => require(['@/views/comment/details'], resolve),
		}, {
			path: 'desc',
			component: resolve => require(['@/views/comment/desc'], resolve)
		}]
	}, {
		path: '/setting',
		name: 'setting',
		component: resolve => require(['@/views/setting/index'], resolve),
		redirect: '/setting/category',
		children: [{
				path: 'category',
				component: resolve => require(['@/views/setting/child/category'], resolve)
			},
			//		{
			//			path:'classify',
			//			component:resolve=>require(['@/views/setting/child/classify'],resolve)
			//		},
			{
						path:'planManager',
						component:resolve=>require(['@/views/setting/child/plan'],resolve)
					},
			{
				path: 'weight',
				component: resolve => require(['@/views/setting/child/weight'], resolve)
			},
			{
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
		}, {
			path: 'desc',
			component: resolve => require(['@/views/mobile/desc'], resolve)
		}]
	}]

})