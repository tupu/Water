Page({
	data:{	 	 
	 cupIcon:"../assets/img/ico-cup1.jpg",	 
	 datas:[{"cishu":1,
	 	"shijian":"7:00第一杯水"},
	 	{"cishu":2,
	 	"shijian":"9:00第二杯水"},
	 	{"cishu":3,
	 	"shijian":"11:00第三杯水"},
	 	{"cishu":4,
	 	"shijian":"1:00第四杯水"},
	 	{"cishu":5,
	 	"shijian":"3:00第五杯水"},
	 	{"cishu":6,
	 	"shijian":"6:00第六杯水"},
	 	{"cishu":7,
	 	"shijian":"8:00第七杯水"},
	 	{"cishu":8,
	 	"shijian":"9:00第八杯水"
	 }]  
	},
	onLoad:function(options){	   
	},
	onReady:function(){
		
	},
	onShow:function(){
		
	},
	onHide:function(){
		
	},
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		
	},
	onReachBottom:function(){
		
	},
	//处理点击事件  
  clickContent:function(event){  
    console.log("===点击"+event.target.id);
    //跳转到指定页面
    wx.navigateTo({
     url:"../content/content?pageIndex="+event.target.id 
    });    
  }
})		