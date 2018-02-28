<template>
  <div class="com-list" ref="ele" >
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="isAutoFill" ref="Loadmore">
      <ul >
        <li class="list-li" v-for="(listinfo,key) in friendList">
          <div class="user">
            <img v-lazy="listinfo.userIcon" alt=""/>
            <div class="name">
              <p>{{listinfo.name}}</p>
              <div class="tag">
                <span >{{listinfo.tag}}</span>
              </div>
            </div>
            <router-link :to="{  name: 'details', params:{id:listinfo.articleId,page:getCount}}" class="btn-d btn-s" >详情</router-link>
          </div>

          <div class="detail">
            <router-link :to="{  name: 'details', params:{id:listinfo.articleId,page:getCount}}"><p>{{listinfo.detail}}</p></router-link>
            <ul :class="['clearfix','img-box',{r3:listinfo.imgGrounp.length>1?true:false}]">
              <li v-for="(picGroup,index) in listinfo.imgGrounp" :key="index" :imgGrp="listinfo.imgGrounp">
                <img class="preview-img" v-lazy="picGroup.src" @click="$preview.open(index, listinfo.imgGrounp)">
              </li>
            </ul>
          </div>
        </li>

      </ul>
    </mt-loadmore>
</div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import '../css/friend.scss';
export default {
  data () {
    return {
      allLoaded:false,
      isAutoFill:false,
      clientHeight: document.documentElement.clientHeight,
    }
  },
  methods: {
    ...mapActions([
      'commonConfig',
      'fdGetList' ,
      'addList',
      'fdUpdated'

    ]),
    // 下拉刷新
    loadTop(){
      this.fdUpdated();
      this.$refs.Loadmore.onTopLoaded();
    },
    // 上拉加载更多
    loadBottom(){
      this.$refs.Loadmore.onBottomLoaded();
      this.addList();
    },
  },
  computed:{
    ...mapGetters([
      'friendList',
      'getCount'
      ]),
  },
  created(){
    this.commonConfig({ // 初始化状态
                isFooter:true,
                isBack:false,
                isShare:false,
                title:'朋友圈'
            });
    if(this.friendList==""){
    this.fdGetList();
    }
  },
  mounted:function(){
     // 通过onresize监听浏览器尺寸变化从而用ref改变容器的高度
      let vm=this;
      let doc = document.documentElement;
      this.$refs.ele.style.height = (this.clientHeight-100)+'px';
      window.onresize = function() {
        let changeScreenHeight = document.documentElement.clientHeight;
        vm.$refs.ele.style.height = (changeScreenHeight-100)+'px';
      };
  },
}
</script>

<style>

</style>
