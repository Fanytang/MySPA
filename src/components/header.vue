<template>
  <div>
    <mt-header fixed :title="commonData.title" style="height:50px">
      <mt-button @click="goBack" icon="back" slot="left" v-show="commonData.isBack">返回</mt-button>
      <mt-button slot="right" v-show="commonData.isShare">分享</mt-button>
    </mt-header>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  props:{
        commonData:{
          type:Object
        }
      },
  methods:{
    goBack(){
      history.go(-1);
    }
  }
}
</script>

<style>
/*.my-header{
  height: 50px;
}*/
</style>
