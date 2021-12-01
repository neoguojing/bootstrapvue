<template>
  <div class="home">
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
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'
import Accordion from '@/components/Accordion.vue'
import Card from '@/components/Card.vue'
import Carousel from '@/components/Carousel.vue'
import Collapse from '@/components/Collapse.vue'
import Modal from '../components/Modal.vue'
import Dropdown from '../components/Dropdown.vue'
import Offcanvas from '../components/Offcanvas.vue'
export default {
  name: 'Home',
  components: {
    Button,
    Accordion,
    Card,
    Carousel,
    Collapse,
    Modal,
    Dropdown,
    Offcanvas
  }
}

    Card</script>
