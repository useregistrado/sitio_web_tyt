<template>
    <div>
      <Header/>
      <h1>Gestion de Clientes</h1><br>
      <div class="container left">
        <button class="btn btn-primary" v-on:click="newClient()">Nuevo Cliente</button><br><br>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Tipo de documento</th>
              <th scope="col">Document</th>
              <th scope="col">Telefono</th>
              <th scope="col">Correo</th>
              <th scope="col">Correo de facturacion</th>
              <th scope="col">Nombre de usuario</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in CustomerList" :key="customer.customer_id" v-on:click= "edit(customer.customer_id)">
              <th scope="row">{{ customer.customer_id }}</th>
              <td>{{ customer.name }}</td>
              <td>{{ customer.document_type }}</td>
              <td>{{ customer.document }}</td>
              <td>{{ customer.phone_number }}</td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.billing_email }}</td>
              <td>{{ customer.username }}</td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
</template>

<script>
import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'AdminCustomer',
  data () {
    return {
      CustomerList: null,
      pagina: ''
    }
  },
  components: {
    Header
    // ooter
  },
  methods: {
    edit (id) {
      this.$router.push('/editCustomerAdmin/' + id)
    },
    newClient () {
      this.$router.push('/newCustomerAdmin/')
    }
  },
  mounted: function () {
    const direction = 'https://tyt-tecnologias.com.co/api/user'
    axios.get(direction).then(data => {
      this.CustomerList = data.data.body
      console.log(this.CustomertList)
    })
  }
}
</script>

<style scoped>
  .left {
    text-align:left
  }
</style>
