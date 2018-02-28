//引入mutations
import * as myMutations from '../mutations'
// 通用配置，header/footer等显示
const state={

	title:'',//顶部显示的标题
	isFooter:true,//是否显示底部导航栏
	isShare:false,//是否显示分享框
	isBack:false,//是否显示返回按钮

};
const actions = {
	commonConfig({commit},settings){
		commit(myMutations.COMMON_CONFIG,settings);
	}
};

const getters = {
	commonConfig:state=>state, //获取当前仓库数据state
};

const mutations = {
	//根据页面不同改变state的值
	[myMutations.COMMON_CONFIG](state,settings){
		state = Object.assign(state,settings);
	},
}
export default {
	state,
	actions,
	getters,
	mutations
}