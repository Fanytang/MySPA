<template>
  <div class="footer">
  	<div>
          <router-link to="/home"><span class="Hui-iconfont Hui-iconfont-home2"></span><p>首页</p>
          </router-link>
          <router-link to="/friend" ><span class="Hui-iconfont Hui-iconfont-share-pengyouquan"></span><p>朋友</p>
          </router-link>
          <router-link to="/personal" > <span class="Hui-iconfont Hui-iconfont-user2"></span><p>个人</p>
          </router-link>
  	</div>
  </div>
</template>

<script scoped>
import '../css/footer.scss'
export default {
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
