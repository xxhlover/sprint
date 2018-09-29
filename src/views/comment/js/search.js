	import { compare, myfilter } from '@/utils/sort.js'
	export const search = {
		data() {
			return {
				//选中班级/小组/学生
				chooseOne: {},
				//排序
				sort: 0,
				//关键词筛选
				filterContent: '',
			}
		},
		computed: {
			sortFilter() {
				let arr = [];
				arr = myfilter(this.resultData, this.filterContent);
				if(this.sort == 0) {
					//首字母
					return arr.sort(compare('name'));
				} else if(this.sort == 1) {
					//总分数
					return arr.sort(compare('addScore', 'reduceScore'));
				} else if(this.sort == 2) {
					//表扬分数
					return arr.sort(compare('addScore'));
				} else {
					return arr.sort(compare('reduceScore'));
				}
			}
		},
		methods: {
			chooseFun(msg) {
				this.chooseOne = msg;
				this.$refs['showScore'].$emit('reset');
			},
			//排序
			changeSortFun(msg) {
				this.sort = msg;
			},
			//关键词
			searchResFun(val) {
				this.filterContent = val;
			},
			//点评排行榜内容切换
			changeStatus(msg) {
				this.rankName = msg;
			}
		}
	}