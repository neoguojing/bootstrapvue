<template>
<footer class="footer mt-auto py-3 bg-light">
  <div class="container">
    <span class="text-muted">{{ text }}</span>
  </div>
</footer>
</template>
<script>

export default {
    name:"Footer",
    props:{
        text:{
            type: String,
            default :"2022 NEO Inc"
        },
    }
}
</script>


<style scoped>
.container {
  width: auto;
  max-width: 680px;
  padding: 0 15px;
}
</style>