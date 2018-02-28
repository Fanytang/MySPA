import api from '../../api/api'
import * as myMutations from '../mutations'

const state ={
	home:{
		swipeImg:[]
	}

};

const getters = {
	homeSwipeImg:state=>state.home.swipeImg //返回轮播图片数据
};
const actions = {
	homeGetImg({commit}){
		api.homeGetSwipeImg(function(res){
			commit(myMutations.HOME_GET_SWIPE_IMG,{res});
		})
	}

};
const mutations = {
	[myMutations.HOME_GET_SWIPE_IMG](state,{res}) { //将图片数据放入state仓库中
		state.home.swipeImg=res;
	}
};

export default{
	state,
	getters,
	actions,
	mutations
}