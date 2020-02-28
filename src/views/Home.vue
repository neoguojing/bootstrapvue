<template>
  <div class="home">
    <NaveBar />
  </div>
</template>

<script>
// @ is an alias to /src
import { NaveBar,MenuItem } from '@/components/NavBar.vue'

export default { //导出模块
  name: 'Home',
  components: {
    NaveBar
  }
}
</script>
