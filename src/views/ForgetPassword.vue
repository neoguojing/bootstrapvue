<template>
  <div class="home">
    <Navbar>
      <NavDropdown/>
    </Navbar>
    <Button text="my button" size="mid" color="danger"/>
    <Accordion/>
    <Card/>
    <Offcanvas/>
    <Dropdown/>
    <Collapse>
    Collapse
    </Collapse>
    <Modal>
      This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
    </Modal>
     <Carousel/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Button from '@/components/Button.vue'
import Accordion from '@/components/Accordion.vue'
import Card from '@/components/Card.vue'
import Carousel from '@/components/Carousel.vue'
import Collapse from '@/components/Collapse.vue'
import Modal from '../components/Modal.vue'
import Navbar from '../components/Navbar.vue'
import Dropdown from '../components/Dropdown.vue'
import NavDropdown from '../components/NavDropdown.vue'
import Offcanvas from '../components/Offcanvas.vue'
export default {
  name: 'ForgetPassword',
  components: {
    HelloWorld,
    Button,
    Accordion,
    Card,
    Carousel,
    Collapse,
    Modal,
    Navbar,
    Dropdown,
    NavDropdown,
    Offcanvas
  }
}

    Card</script>
