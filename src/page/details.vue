<template>
  <div>
        <div class="com-article">
               <div class="a-box">
                <div class="user">
                    <img :src="singleInfo.userIcon" alt=""/>
                    <div class="name">
                        <p :singleInfo="getArr">{{singleInfo.name}}</p>
                        <div class="tag">
                            <span >{{singleInfo.tag}}</span>
                        </div>
                        <time>{{singleInfo.data}}</time>
                    </div>
                </div>
                <div class="art-detail">
                    <p>{{singleInfo.detail}}</p>
                </div>
                <div class="detailPic">
                  <ul v-for="(detailImg,index) in singleInfo.imgGrounp" :key="index">
                    <li><img :src="detailImg.src" alt="" width="100%" height="100%" class="pic"></li>
                  </ul>
                </div>
               </div>
            </div>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import axios from 'axios';
import '../css/details.scss'
export default {
  data () {
    return {
      singleInfo:''
    }
  },
  methods: {
    ...mapActions([
      'commonConfig', 
      'fdGetList' ,
      'addList'
    ]),
  },
   computed:{
    ...mapGetters([
      'friendList',
      ]),
    getArr(){
      let id=this.$route.params.id;
      let count=this.$route.params.page;
      if (this.friendList!="") {
      this.singleInfo=this.friendList[id-count*10-'1'];
      }
    }
  },
  mounted(){

  },
  created(){
    this.commonConfig({
                isFooter:false,
                isBack:true,
                isShare:true,
                title:'文章详情'
            });
    if(this.friendList==""){
    this.fdGetList();
    }
  }
}
</script>

<style>

</style>
