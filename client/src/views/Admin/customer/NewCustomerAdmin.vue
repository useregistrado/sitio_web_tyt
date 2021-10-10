<template>
    <div>
      <Header/>
      <h3>Nuevo Cliente</h3>
      <br>
      <div class="container">

        <form action="" left>

          <div class="form-group left row g-3 ">
            <div class="col-md-4 mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.name">
              <label for="floatingInput">Nombre</label>
            </div>
            <div class="col-md-4  mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.document_type">
              <label for="floatingInput">Tipo de documento</label>
            </div>
            <div class="col-md-4  mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.document">
              <label for="floatingInput">Documento</label>
            </div>
          </div>

          <div class="form-group left row g-3 ">
            <div class="col-md-4 mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.phone_number">
              <label for="floatingInput">Telefono</label>
            </div>
            <div class="col-md-4  mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.email">
              <label for="floatingInput">Correo</label>
            </div>
            <div class="col-md-4  mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.billing_email">
              <label for="floatingInput">Correo de facturacion</label>
            </div>
          </div>
          <div class="form-group">
              <button type="button" class="btn btn-primary" v-on:click="save()">Guardar</button>
              <button type="button" class="btn btn-dark margen" v-on:click="exit()">Salir</button>
          </div>
        </form>
      </div>

    </div>
</template>
<script>
import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'NewCustomerAdmin',
  components: {
    Header
    // Footer
  },
  data: function () {
    return {
      form: {
        name: '',
        document_type: '',
        document: '',
        phone_number: '',
        email: '',
        billing_email: ''
      }
    }
  },
  methods: {
    save () {
      this.form.location_type = this.selectedLocation
      this.form.service_type = this.selectedService
      axios.post('http://localhost/api/user/', this.form)
      this.$router.push('/adminCustomer/')
    },
    exit () {
      this.$router.push('/adminCustomer/')
    }
  }
}
</script>

<style scoped>
.left {
  text-align: left;
}
</style>
