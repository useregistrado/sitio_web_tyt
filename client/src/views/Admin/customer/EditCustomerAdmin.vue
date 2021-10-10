<template>
    <div>
      <Header/>
      <h3>Editar informacion de cliente</h3>
      <br>
      <div class="container">

        <form action="" left>
          <div class="form-group left row g-3 ">
            <div class="col-md-4 mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.username">
              <label for="floatingInput">Nombre de usuario</label>
            </div>
          </div>

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
            <button type="button" class="btn btn-primary" v-on:click="edit">Editar</button>
            <button type="button" class="btn btn-danger margen " v-on:click="remove">Eliminar</button>
            <button type="button" class="btn btn-dark margen" v-on:click="exit">Salir</button>
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
  name: 'EditPlanAdmin',
  components: {
    Header
    // Footer
  },
  data: function () {
    return {
      form: {
        customer_id: '',
        name: '',
        document_type: '',
        document: '',
        phone_number: '',
        email: '',
        billing_email: '',
        username: ''
      }
    }
  },
  methods: {
    edit () {
      const send = {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
      axios.put('http://localhost/api/user/', this.form, { headers: send })
        .then(data => {
          console.log(data)
          this.$router.push('/adminCustomer/')
        })
    },
    exit () {
      this.$router.push('/adminCustomer/')
    },
    remove () {
      const send = {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
      axios.delete('http://localhost:3000/api/user/' + this.form.customer_id, { headers: send })
        .then(() => {
          this.$router.push('/adminCustomer/')
        })
    }
  },
  mounted: function () {
    this.form.customer_id = this.$route.params.CustomerId
    axios.get('http://localhost:3000/api/user/' + this.form.customer_id)
      .then(data => {
        console.log(data)
        this.form.customer_id = data.data.body[0].customer_id
        this.form.name = data.data.body[0].name
        this.form.document_type = data.data.body[0].document_type
        this.form.document = data.data.body[0].document
        this.form.phone_number = data.data.body[0].phone_number
        this.form.email = data.data.body[0].email
        this.form.billing_email = data.data.body[0].billing_email
        this.form.username = data.data.body[0].username
        // this.form.token = localStorage.getItem('token')
      })
  }
}
</script>

<style scoped>
.left {
  text-align: left;
}
</style>
