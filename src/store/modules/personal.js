import api from '../../api/api'
import * as myMutations from '../mutations'

const state ={
	personal:{
		info:[]
	}

};

const getters = {
	personalInfo:state=>state.personal.info //返回个人数据
};
const actions = {
	getInfo({commit}){
		api.getPersonalInfo(function(res){
			commit(myMutations.PERSONAL_INFO,{res});
		})
	}

};
const mutations = {
	[myMutations.PERSONAL_INFO](state,{res}) { //将个人信息放入state仓库中
		state.personal.info=res;
	}
};

export default{
	state,
	getters,
	actions,
	mutations
}