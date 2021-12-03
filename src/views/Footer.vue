<template>
<footer class="footer mt-auto py-3 bg-light">
  <div class="container">
    <p class="float-end"> <a href="#">Back to top</a></p>
    <p> 
       © {{ text }} 
      <a href="#">Privacy</a>
      " . "
      <a href="#">Terms</a>
    </p>
    <!-- <span class="text-muted">{{ text }}</span> -->
  </div>
</footer>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
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