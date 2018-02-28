// 引入axios
import axios from 'axios'

export default{
	// 获取轮播图图片
	homeGetSwipeImg(fn){
		axios.get('home/swipe/img').then(function(res){
    		fn(res.data.imgData);
    	})
	},

	// 获取列表数据
	friendGetList(fn){
		axios.get('friend/getList').then(function(res){
    		fn(res.data.data);
    	})
	},

	// 获取个人信息
	getPersonalInfo(fn){
		axios.get('personal/info').then(function(res){
    		fn(res.data.personalData);
    	})
	},

}