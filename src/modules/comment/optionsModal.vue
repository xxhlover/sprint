<template>
	<div class="searchModal">
		<choose-class
			:chooseData="chooseData"
			@changeSchool_="changeSchool_"
		></choose-class>	
		<choose-subject 
			@changeSubject_="changeSubject_"
			>
		</choose-subject>
		<choose-date
			:disabled="disabled"
			@changeDate_="changeDate_"
			@submit_="submit_"
			>
		</choose-date>
	</div>
</template>

<script>
	import chooseClass from '@/components/comment/desc/options/class'
	import chooseSubject from '@/components/comment/desc/options/subject'
	import chooseDate from '@/components/comment/desc/options/date'
	export default{
		props:{
			chooseData:{
				type:[Object,Array]
			},
			disabled:{
				type:Boolean,
				default:true
			},
			grade:{
				type:[Object,Array]
			},
			classes:{
				type:[Object,Array]
			}
		},
		methods:{
			changeSchool_(msg,index){
				this.$emit('changeSchool',msg,index);
			},
			changeSubject_(msg){
				this.$emit('changeSubject',msg);
			},
			changeDate_(msg){
				this.$emit('changeDate',msg);
			},
			submit_(){
				this.$emit('submit');
			}
		},
		components:{
			chooseClass,
			chooseSubject,
			chooseDate
		}
	}
</script>

<style scoped>
	.searchModal{
		align-self: flex-start;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
</style>