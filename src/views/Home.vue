<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Button text="my button" size="mid" color="danger"/>
    <Accordion/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Button from '@/components/Button.vue'
import Accordion from '@/components/Accordion.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Button,
    Accordion
  }
}
</script>
