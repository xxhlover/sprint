export const  options = {
	data(){
		return {
			//options
			optionsData:{
					chooseSchool:'',
					chooseGrade:'',
					chooseClass:'',
					chooseSubject:'',
					chooseDate:'',
					disabled:true,
				}
		}
	},
	methods:{
		//筛选班级
				changeSchool(msg,index){
					console.log(msg,index)
					switch (index){
						case 0:
							this.optionsData.chooseSchool = msg;	
							break;
						case 1:
							this.optionsData.chooseGrade = msg;
							break;
						case 2:
							this.optionsData.chooseClass = msg;
							break;
					}
				},
				//筛选学科
				changeSubject(msg){
					this.optionsData.chooseSubject = msg;
				},
				//筛选日期
				changeDate(msg){
					this.optionsData.chooseDatet = msg;
					if(msg=='选择日期'){
						this.optionsData.disabled = false;
					}else{
						this.optionsData.disabled = true;
					}
				},
				//提交筛选
				submit(){
					console.log(this.optionsData)
				},
	}
}
