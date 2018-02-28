<template>
  <div class="com-homeuserinfo">
        <ul class="user-link" >
            <li class="user-icon">
                <router-link :to="{name:'personal'}"  class="link-box ">
                    <span class="txt">头像</span>
                    <img :src="personalInfo.userIcon">
                    
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'personal'}"  class="link-box">
                    <span class="txt">昵称</span>
                    <p>{{personalInfo.name}}</p>
                    
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'personal'}"  class="link-box">
                    <span class="txt">性别</span>
                    <p>{{personalInfo.sex}}</p>
                    
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'personal'}"  class="link-box">
                    <span class="txt">个人说明</span>
                    <p>无</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'personal'}"  class="link-box">
                    <span class="txt">城市</span>
                    <p>{{personalInfo.city}}</p>
                    
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import '../css/userinfo.scss'
import '../css/personal.scss'
export default {
  data () {
    return {

    }
  },
   computed:{
    ...mapGetters([
        'personalInfo', // 引入getters辅助函数
      ]),
  },
  methods: {
    ...mapActions([
      'commonConfig', 
      'getInfo'
    ]),
  },
  created(){
    this.commonConfig({
                isFooter:false,
                isBack:true,
                isShare:false,
                title:'用户信息'
            });
    if (this.personalInfo=="") {
    this.getInfo();
    }
  }
}
</script>

<style>

</style>
