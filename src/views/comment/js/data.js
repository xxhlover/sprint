export const testData = {
	data() {
		return {
			groupPlans:[
				{
					name:'方案一',
				},{
					name:'方案二',
				},{
					name:'方案三',
				},{
					name:'方案四',
				}
			],
			btns:[
					{
						name:'概况',
					},{
						name:'班级详情',
					},{
						name:'小组详情',
					},{
						name:'学生详情',
					},
				],
			//details-scoreSum
			scoreClassify: [{
				desc: '使用教师数',
				colorStyle: 'color: #999E9F;',
				point: 45
			}, {
				desc: '总分数',
				colorStyle: 'color: #FFCC00;',
				point: 334
			}, {
				desc: '表扬分数',
				colorStyle: 'color: #00CC33;',
				point: 488
			}, {
				desc: '警告分数',
				colorStyle: 'color: red;',
				point: -154
			}, {
				desc: '学校平均分',
				colorStyle: 'color: #0099FF;',
				point: 80
			}, {
				desc: '全省排名',
				colorStyle: 'color: #FF9900;',
				point: 1
			}, ],
			//details-rank

			rankClass: {
				desc: '班级',
				arr: [{
					name: '二年级-1班',
					point: 100
				}, {
					name: '二年级-2班',
					point: 99
				}, {
					name: '二年级-3班',
					point: 10
				}, ]
			},
			rankTeacher: {
				desc: '教师',
				arr: [{
					name: '桥上',
					point: 100
				}, {
					name: '桥下',
					point: 99
				}, {
					name: '桥头',
					point: 10
				}, ]
			},
			//options-testData
			classOptions: [{
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
			/*模拟数据结构*/
			//show-search
			desc: '请输入班级名字',
			resultData: [{
				name: '3班',
				addScore: 15, //来自后端对该班级全体学生得分的统计
				reduceScore: 0, //来自后端对该班级全体学生减分的统计
				commentDesc: [{
					name: '红红',
					desc: '遵守纪律',
					time: '2018-1-2',
					getScore: 5
				}, {
					name: '蓝蓝',
					desc: '团队合作',
					time: '2018-1-2',
					getScore: 5
				}, {
					name: '绿绿',
					desc: '原谅她',
					time: '2018-1-2',
					getScore: 5
				}]
			}, {
				name: '2班',
				addScore: 19, //来自后端对该班级全体学生得分的统计
				reduceScore: -3, //来自后端对该班级全体学生减分的统计
				commentDesc: [{
					name: 'AA',
					desc: '举手答题',
					time: '2018-1-3',
					getScore: 5
				}, {
					name: 'CC',
					desc: '注意力集中',
					time: '2018-1-3',
					getScore: 5
				}, {
					name: 'BB',
					desc: '上课比比',
					time: '2018-1-6',
					getScore: -3
				}, {
					name: 'BB',
					desc: '上课比比',
					time: '2018-1-10',
					getScore: 4
				}, {
					name: 'BB',
					desc: '上课不BB',
					time: '2018-1-5',
					getScore: 5
				}]
			}, {
				name: '1班',
				addScore: 12, //来自后端对该班级全体学生得分的统计
				reduceScore: 0, //来自后端对该班级全体学生减分的统计
				commentDesc: [{
					name: '牛牛',
					desc: '举手答题',
					time: '2018-2-2',
					getScore: 4
				}, {
					name: '乐乐',
					desc: '注意力集中',
					time: '2018-2-2',
					getScore: 3
				}, {
					name: '天天',
					desc: '上课比比',
					time: '2018-2-2',
					getScore: 5
				}]
			}, ],
			//search-result
			resultRows: [{
				name: '班级名称',
				value: 'name'
			}]

		}
	}
}