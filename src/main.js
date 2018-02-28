// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入axios
import axios from 'axios'
// axios拦截器拦截
axios.interceptors.request.use(function(config){
	Indicator.open({
	text: '加载中...',
  	spinnerType: 'fading-circle'
	});
	return config;

});
axios.interceptors.response.use(function(config){
	Indicator.close()
	return config;
})

// 引入mockjs 模拟数据
import './server/mock'

// 引入mint-ui开始
import 'mint-ui/lib/style.css'
import Header from 'mint-ui/lib/header'
import Button from 'mint-ui/lib/button'
import Swipe from 'mint-ui/lib/swipe'
import SwipeItem from 'mint-ui/lib/swipe-item'
import Loadmore  from 'mint-ui/lib/loadmore'
import Indicator from 'mint-ui/lib/indicator'
import Lazyload  from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Loadmore.name, Loadmore);
Vue.use(Lazyload);
// 引入mint-ui结束

// 引入H-ui
import './css/1.0.8/iconfont.css'

// 引入VuePreview
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 引入通用配置
import './config/rem.js'
import './css/base/base.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
