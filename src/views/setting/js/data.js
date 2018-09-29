export const testData={
	data(){
		return{
			//计分方案管理
			addTabs:[
				{
					name:'我的计分方案'
				},{
					name:'班级计分方案'
				},
			],
			planData:[
				{
					planName:'test',
					lvNum:3,
					updateTime:'2018-8-2 15:49:00',
				}
			],
			plan_rowsDataList:[
				{
					name:'方案名称',
					value:'planName'
				},{
					name:'等级个数',
					value:'lvNum'
				},{
					name:'更新时间',
					value:'updateTime'
				},
			],
			planChooseData:[{
				classNum:2,
				className:'二班',
				master:'桥下',
				grade:'三年级',
				level:'青铜'
			}],
			planChooseRows:[
				{
					name:'班级号',
					value:'classNum'
				},{
					name:'班级名称',
					value:'className'
				},{
					name:'班主任',
					value:'master'
				},{
					name:'年级',
					value:'grade'
				},{
					name:'学段',
					value:'level'
				},
			],
				//新建小组得分方案
				groupArr:[
					{
						name:'测试A方案',
						ratio:1,
						isEdit:false,
						students:[
							{
								name:'测试1'
							},{
								name:'测试1'
							},{
								name:'测试1'
							}
						]
					},{
						name:'测试B方案',
						ratio:2,
						isEdit:false,
						students:[
							{
								name:'测试2'
							},{
								name:'测试2'
							},{
								name:'测试2'
							},{
								name:'测试2'
							},{
								name:'测试2'
							},{
								name:'测试2'
							},{
								name:'测试2'
							},{
								name:'测试2'
							},{
								name:'测试2'
							}
						]
					},{
						name:'测试C方案',
						ratio:3,
						isEdit:false,
						students:[
							{
								name:'测试3'
							}
						]
					},{
						name:'测试D方案',
						ratio:4,
						isEdit:false,
						students:[]
					}
				],
			
			
			//用户管理
			userData:[
				{
					userName:'username',
					name:'桥上',
					funcRole:'教师',
					dataRole:'教师',
					updateTime:'2018-8-2 15:49:00',
					status:'正常'
				}
			],
			user_rowsDataList:[
				{
					name:'登录账号',
					value:'userName'
				},{
					name:'用户姓名',
					value:'name'
				},{
					name:'所属功能角色',
					value:'funcRole'
				},{
					name:'所属数据角色',
					value:'dataRole'
				},{
					name:'更新时间',
					value:'updateTime'
				},{
					name:'状态',
					value:'status'
				},
			],
			user_rowsData:[
				{
					label:'选择用户',
					name:'chooseRole',
					type:'radioBtn',
					child:[
						{
							name:'学生角色',
							value:'0'
						},{
							name:'教师',
							value:'1'
						},{
							name:'管理者角色',
							value:'2'
						},{
							name:'家长',
							value:'3'
						},
					]
				},{
					label:'用户账号',
					name:'userName',
					type:'disable'
				},{
					label:'用户姓名',
					name:'name',
					type:'disable'
				},{
					label:'关联功能角色',
					name:'funcRole',
					type:'choose',
					child:[
						{
							name:'学生',
							value:0
						},{
							name:'教师',
							value:1
						},{
							name:'管理者',
							value:2
						}
					]
				},{
					label:'关联数据角色',
					name:'dataRole',
					type:'choose',
					child:[
						{
							name:'教师',
							value:1
						},{
							name:'管理者',
							value:2
						},{
							name:'班长',
							value:3
						},{
							name:'学习委员',
							value:4
						},{
							name:'劳动委员',
							value:5
						},{
							name:'纪律委员',
							value:6
						},
					]
				},
			],
			user_rules:{
				userName:[
					{required: true,
						message: '请选择用户',
						trigger: 'blur'}
				],
				funcRole:[
					{required: true,
						message: '请关联功能角色',
						trigger: 'blur'}
				]
			},
				//用户管理--chooseDialog
				chooseStudentRows:[
					{
						name:'角色名称',
						value:'role'
					},{
						name:'学生姓名',
						value:'name'
					},{
						name:'学生账号',
						value:'userName'
					},{
						name:'班级名称',
						value:'className'
					}
				],
				chooseStudentData:[
					{
						role:'班长',
						name:'桥上',
						userName:'test',
						className:'二年级1班'
					}
				],
				chooseTeacherRows:[
					{
						name:'学科',
						value:'subject'
					},{
						name:'教师姓名',
						value:'name'
					},{
						name:'教师账号',
						value:'userName'
					},{
						name:'班主任',
						value:'isLeader'
					}
				],
				chooseTeacherData:[
					{
						subject:'数学',
						name:'桥上',
						userName:'test',
						isLeader:'是'
					}
				],
				chooseMasterRows:[
					{
						name:'角色名称',
						value:'role'
					},{
						name:'用户姓名',
						value:'name'
					},{
						name:'登录账号',
						value:'userName'
					}
				],
				chooseMasterData:[
					{
						role:'年级组长',
						name:'桥上',
						userName:'admin'
					}
				],
				//筛选条件
				classOptions:[{
					placeholder: '选择学历水平',
					value: '',
					options: [{
						name: '小学'
					}, {
						name: '初中'
					}, {
						name: '高中'
					}]
				}, {
					placeholder: '选择年级',
					value: '',
					options: [{
						name: '2018级',
					}, {
						name: '2017级',
					}, {
						name: '2016级',
					}, {
						name: '2015级',
					}]
				}, {
					placeholder: '选择班级',
					value: '',
					options: [{
						name: '1班'
					}, {
						name: '2班'
					}, {
						name: '3班'
					}, {
						name: '4班'
					}, ]
				}],
				
				
			//权重
//			weightData:[
//				{
//					name:'7年级德育教育',
//					obj:'小学/中学-2018年级/中学-2017年级',
//					updateTime:'2018-8-2 15:49:00'
//				}
//			],
//			weight_rowsDataList:[
//				{
//					name:'方案名称',
//					value:'name'
//				},{
//					name:'对象',
//					value:'obj'
//				},{
//					name:'更新时间',
//					value:'updateTime'
//				}
//			],
//			weight_rowsData:[
//				{
//					label:'方案名称',
//					name:'name',
//					type:'input'
//				},{
//					label:'对象',
//					name:'obj',
//					type:'input'
//				}
//			],
//			weight_rules:{
//				name:[
//					{required: true,
//						message: '请输入方案名称',
//						trigger: 'blur'}
//				],
//				obj:[
//					{required: true,
//						message: '请输入对象',
//						trigger: 'blur'}
//				],
//			},
			//功能角色模拟数据
			functionData:[
				{
					name:'测试角色',
					desc:'测试描述',
					updateTime:'2018-8-2 15:49:00',
					guanlian:0
				}
			],
			function_rowsDataList:[
				{
					name:'角色名称',
					value:'name'
				},{
					name:'角色描述',
					value:'desc'
				},{
					name:'更新时间',
					value:'updateTime'
				}
			],
			function_rowsData:[
				{
					placeholder:'请输入少于10个汉字',
					label:'角色名称',
					name:'name',
					type:'input'
				},{
					placeholder:'请输入少于50个汉字',
					label:'角色描述',
					name:'desc',
					type:'input'
				},{
					label:'是否关联全部功能',
					name:'guanlian',
					type:'radio',
					child:[
						{
							name:'是',
							value:1
						},{
							name:'否',
							value:0
						},
					]
				},{
					label:'功能权限授权信息',
					name:'authInfo',
					type:'check',
					child:[
						{
							name:'首页',
						},{
							name:'点评统计',
						},
						{
							name:'设置',
						},{
							name:'编辑点评类型',
						},{
							name:'编辑点评分类',
						},{
							name:'编辑计分方案',
						},{
							name:'权限管理',
						}
					]
				}
			],
			function_rules:{
				name:[
					{required: true,
						message: '请输入角色名称',
						trigger: 'blur'}
				],
				desc:[
					{required: true,
						message: '请输入角色描述',
						trigger: 'blur'}
				],
				guanlian:[
				{required: true,
						message: '请选择关联',
						trigger: 'blur'}
				]
			},
	}
	}
}
