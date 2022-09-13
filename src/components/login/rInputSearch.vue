<template>
	<view class="bd">
		<view class="input-box">
				<u-input @focus="ifocus" @input="ichange" v-model="val" :placeholder="placeholder" :border="true" :clearable="false" @blur="blur"  />
			<button class="btn" v-if="isBtn" type="primary" size="mini">搜索</button>
		</view>
		<scroll-view :class="{'search-list':true,'acive-list':isShowList}" :scroll-y="true" @scrolltolower="scrolltolower">
			<text class="search-item" v-for="(item,index) in dataArr" @click="selItem(item)" :key="index">{{listContent(item)}}</text>
		</scroll-view>
		<!-- 查询不到药品显示		 -->
		<view :class="{'search-list':true,'acive-list':isSearchList}">
			<view class="search-item" >{{noListContent}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"rInputSearch",
		data() {
			return {
				val:'',
				dataArr:[],
				selectedVal:{},
				isShowList:false,
				isSearchList:false,
			};
		},
		methods:{
			//加载更多
			scrolltolower(){
				this.$emit("loadMore",this.val)
			},
			blur(){
				const that=this
				setTimeout((res)=>{
					that.dataArr=[]
				},100)
				
			},
			ifocus(){
				if(this.val){
					this.getNetInfo()
				}
			},
			//输入框内容改变
			ichange(){
				if(this.val==""){
					this.dataArr=[]
					return
				}
				this.$u.debounce(()=>{
					this.getNetInfo()
				},500)
			},
			//选择下拉选项,选中的这一项
			selItem(item){
				this.selectedVal=item
				this.dataArr=[]
				this.val=item.bsTongym
				this.$emit('getVal',item)
			},
			//输入框内容改变时发送时间监听,返回输入框内容
			getNetInfo(){
				if(this.val){
					this.$emit('netRequest',this.val)
				}
				
			}
		},
		
		watch:{
			valProp(){
				this.val=this.valProp
			},
			dataArrProp(){
				if(this.dataArrProp.length==0){
					this.dataArr=[]
					this.isSearchList=true
				}else{
					this.dataArr=this.dataArrProp
					this.isSearchList=false
				}
				
			},
			dataArr(){
				if(this.dataArr.length>0){
					this.$nextTick(()=>{
						this.isShowList=true
					})
				
				}else{
					this.isShowList=false
				}
			},
			val(){
				if(!this.val){
					this.isSearchList=false
				}
			},
			dataMore(){
				this.dataArr.push(...this.dataMore)
			}
		},
		
		computed:{
			listContent(){
				return function(item){
					const arr=[]
					this.arrKey.keys.forEach(key=>{
						arr.push(item[key])
					})
					
					return arr.join(this.arrKey.splitMark)
				}
			}
		},
	
		props:{
			isBtn:{
				type:Boolean,
				default:true
			},
			//列表显示内容的key
			arrKey:{
				type:Object,
				default:function(){
					return {
						splitMark:"-",
						keys:['bsTongym','specification','manufacturer']
					}
				}
			},
			valProp:{
				type:String,
				default:''
			},
			dataArrProp:{
				type:Array,
				default:function(){
					return []
				}
			},
			noListContent:{
				type:String,
				default:"没有找到该药品"
			},
			placeholder:{
				type:String,
				default:"请输入药品名称"
			},
			//加载等多
			dataMore:{
				type:Array,
			}

		}
	}
</script>

<style scoped lang="scss">
.bd{
	position: relative;
	.search-list{
		position: absolute;
		width: 100%;
		overflow: auto;
		transition: height 0.4s ease-out, opacity 0.2s ease-in, visibility 0.2s ease-in;
		height: 0;
		visibility: 0;
		opacity: 0;
		background-color: white;
		z-index: 666;
	}
	.acive-list{
		opacity: 1;
		visibility: 1;
		height: auto;
		max-height: 400px;
	}
}

.input-box{
	width: 100%;
	display: flex;
	align-items: center;
	.btn{
		margin-left: 5px;
	}
}

.search-list{
	border: 1px solid #c3c3c3 ;
	border-radius: 10rpx;
	
	box-sizing: border-box;
	.search-item{
		display: block;
		background-color: white;
		border-bottom: 1px solid #c3c3c3 ;
		// box-sizing: border-box;
		padding: 10rpx 16rpx;
		font-size: 14px;
		color: #535353;
	}
	.search-item:last-child{
		border-bottom: 0px solid #c3c3c3 ;
	}
}
</style>