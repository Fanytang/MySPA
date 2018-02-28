<template>
  <div id="app">
    <my-header :commonData = "getCommonConfig"></my-header>
    <transition name="slide-fade" mode="out-in" class="box">
    	<router-view></router-view>
    </transition>
    <my-footer v-show="getCommonConfig.isFooter"></my-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Footer from './components/footer'
import Header from './components/header'
import './css/app.scss'
import './css/style.scss'
export default {
  name: 'App',
  computed:{
  		...mapGetters([//mapGetters辅助函数
      'commonConfig',
      
    ]),
  getCommonConfig(){//从仓库获取的状态
  	return this.commonConfig;
	  }
  },
  components:{
  	myHeader:Header,
  	myFooter:Footer,
  },
}
</script>

<style>

</style>
