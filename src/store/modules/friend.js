import api from '../../api/api'
import * as myMutations from '../mutations'

const state ={
	friend:{
		list:[],
		count:'0',
	}

};

const getters = {
	friendList:state=>state.friend.list, //返回列表数据
	getCount:state=>state.friend.count //返回列表数据
};
const actions = {
	fdGetList({commit}){ // 获取列表信息
		api.friendGetList(function(res){
			commit(myMutations.FRIEND_GET_LIST,{res});
		})
	},
	fdUpdated({commit}){ // 更新列表信息
		api.friendGetList(function(res){
			commit(myMutations.FRIEND_UPDATED_LIST,{res});
		})
	},
	addList({commit}){ // 获取更多信息
		api.friendGetList(function(res){
			commit(myMutations.FRIEND_ADD_LIST,{res});
		})
	},

};
const mutations = { 
	[myMutations.FRIEND_GET_LIST](state,{res}) { 
	//获取列表信息
	//将list详情放入state仓库中
		state.friend.list=res;
		state.friend.list.forEach((ele)=>{
			ele.imgGrounp.forEach((e)=>{
				e.w=375;
				e.h=375;
			})
		});
	},
	[myMutations.FRIEND_UPDATED_LIST](state,{res}) { 
	//更新列表信息
	//将list详情放入state仓库中
		state.friend.list='';
		state.friend.list=res;
		state.friend.count=++state.friend.count;
		// 设置vue-preview中的w和h
		state.friend.list.forEach((ele)=>{
			ele.imgGrounp.forEach((e)=>{
				e.w=375;
				e.h=375;
			})
		});
	},
	[myMutations.FRIEND_ADD_LIST](state,{res}) { //将list详情放入state仓库中
		state.friend.list=state.friend.list.concat(res);
				// 设置vue-preview中的w和h
		state.friend.list.forEach((ele)=>{
			ele.imgGrounp.forEach((e)=>{
				e.w=375;
				e.h=375;
			})
		});
	}
};

export default{
	state,
	getters,
	actions,
	mutations
}