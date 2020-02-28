<template>
  <div class="home">
    <NNavBar isShowSearch="true" v-bind:menuList="menus"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NNavBar from '@/components/NNavBar.vue'

const menus = [
      {text:"vue",to:"/vue"},
      {text:"demo",to:"/demo"},
      {text:"about",to:"/about"}
]

export default { //导出模块
  name: 'Home',
  components: {
    NNavBar
  },
  data: function () {
    return menus
  }
}
</script>
