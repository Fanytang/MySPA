<template>
  <div class="index">
        <mt-swipe :auto="4000" class="slideTo" :show-indicators="false">
          <mt-swipe-item v-for="(itemimg,index) in homeSwipeImg" :key="index"><img :src="itemimg.img" alt="" width="100%" height="100%" class="lunb1"></mt-swipe-item>
        </mt-swipe>
        <div class="center">
          <a href="https://fanytang.github.io/vue-dati" class="list"><span class="Hui-iconfont Hui-iconfont-android"></span><p>答题</p></a>
          <router-link :to="name='friend'" class="list"><span class="Hui-iconfont Hui-iconfont-share-pengyouquan"></span><p>朋友圈</p></router-link>
          <a href="https://fanytang.github.io/birdGame" class="list"><span class="Hui-iconfont Hui-iconfont-fabu"></span><p>游戏</p></a>
        </div>
        <div class="center">
          <a href="https://fanytang.github.io/JD.Mobile" class="list"><span class="Hui-iconfont Hui-iconfont-dianpu"></span><p>购物</p></a>
          <a href="https://github.com/Fanytang" class="list"><span class="Hui-iconfont Hui-iconfont-github"></span><p>GitHub</p></a>
          <router-link :to="name='home'" class="list"><span class="Hui-iconfont Hui-iconfont-gengduo2"></span><p>更多</p></router-link>
        </div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import '../css/homepage.scss'

export default {
  data () {
    return {
      
    }
  },
  computed:{
    ...mapGetters([
        'homeSwipeImg', // 引入getters辅助函数
      ]),
  },
  methods: {
    ...mapActions([
      'commonConfig', 
      'homeGetImg'
    ]),
    
  },
  created(){
    // 改变公共状态
    this.commonConfig({
                isFooter:true,
                isBack:false,
                isShare:false,
                title:'我的首页'
            });
    if (this.homeSwipeImg=="") {
        this.homeGetImg();
    }
  }
}
</script>

<style>

</style>
