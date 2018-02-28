import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Home from '../page/home.vue'
import Friend from '../page/friend.vue'
import Personal from '../page/personal.vue'
import Details from '../page/details.vue'
import Userinfo from '../page/userinfo.vue'

Vue.use(Router);

const routes = 
	
		[
		//vueRouter路由配置规则
			{path:'/',redirect:({name:'home'})},// 设置默认路由
			{path:'/home',name:'home',component:Home},
			{path:'/friend',name:'friend',component:Friend},
			{path:'/friend/details/:id/:page',name:'details',component:Details},
			{path:'/personal',name:'personal',component:Personal},
			{path:'/personal/userinfo',name:'userinfo',component:Userinfo},
		];

const router = new Router({
	// mode:'history', 去除url中的/#/
	routes,
	linkActiveClass:'active',
})
//导出router
export default router;
