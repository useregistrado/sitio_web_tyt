<template>
  <div id="app">
    <Navbar/>
    <slider/>
    <services/>
    <contact/>
    <mision/>
    <footer2/>
  </div>
</template>

<script>
import Navbar from '@/components/Login/Navbar.vue'
import slider from '@/components/Login/slider.vue'
import services from '@/components/Login/services.vue'
import contact from '@/components/Login/contact.vue'
import mision from '@/components/Login/mision.vue'
import footer2 from '@/components/Login/footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    slider,
    services,
    contact,
    mision,
    footer2
  }
}
</script>
