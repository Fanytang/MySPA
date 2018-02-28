<template>
  <div class="com-home">
        <div class="user-info clearfix">
            <router-link  :to="{name: 'userinfo'}"   class="link-box clearfix" >
                <img :src="personalInfo.userIcon">
                <p>{{personalInfo.name}}</p>
               <span class="Hui-iconfont Hui-iconfont-arrow2-right icon-right"></span>
            </router-link>
        </div>

        <div class="user-link">
            <ul>
                <li>
                    <router-link to="friend"  class="link-box">

                        <span class="Hui-iconfont Hui-iconfont-tuku"></span>
                        <span class="txt">图片</span>
                        <span class="Hui-iconfont Hui-iconfont-arrow2-right icon-right"></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="home"  class="link-box">

                        <span class="Hui-iconfont Hui-iconfont-2code"></span>
                        <span class="txt">二维码</span>
                        <span class="Hui-iconfont Hui-iconfont-arrow2-right icon-right"></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="home"  class="link-box">

                        <span class="Hui-iconfont Hui-iconfont-hongbao"></span>
                        <span  class="txt">钱包</span>
                        <span class="Hui-iconfont Hui-iconfont-arrow2-right icon-right"></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="home"  class="link-box">

                        <span class="Hui-iconfont Hui-iconfont-cang2-selected"></span>
                        <span  class="txt">收藏</span>
                        <span class="Hui-iconfont Hui-iconfont-arrow2-right icon-right"></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="home"  class="link-box">

                        <span class="Hui-iconfont Hui-iconfont-xiaoxi1"></span>
                        <span  class="txt">消息</span>
                        <span class="Hui-iconfont Hui-iconfont-arrow2-right icon-right "></span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import '../css/personal.scss'
export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapActions([
      'commonConfig', 
      'getInfo',

    ]),
  },
  computed:{
    ...mapGetters([
      'personalInfo',
      ]),

  },
  created(){
    this.commonConfig({
                isFooter:true,
                isBack:false,
                isShare:false,
                title:'个人中心'
            });
    if (this.personalInfo=="") {
      this.getInfo();
    }
  }
}
</script>

<style>

</style>
