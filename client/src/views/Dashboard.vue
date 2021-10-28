<template>
    <div>
      <Header/>
      <div class="container">
        <h3> Pagina principal del administrador</h3>
      </div>

      <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
