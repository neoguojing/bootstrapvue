<template>
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <i class="bi-bootstrap px-3"  style="font-size: 1.5rem;"></i>
      </a>
      <span class="text-muted">&copy; {{ text }}</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-twitter" style="font-size: 1.5rem;"></i></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-instagram" style="font-size: 1.5rem;"></i></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><i class="bi bi-facebook" style="font-size: 1.5rem;"></i></a></li>
    </ul>
  </footer>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
    name:"Footer",
    props:{
        text:{
            type: String,
            default :"2022 NEO , Inc"
        },
    }
}
</script>


<style scoped>
.bi {
  vertical-align: -.125em;
  fill: currentColor;
}
</style>