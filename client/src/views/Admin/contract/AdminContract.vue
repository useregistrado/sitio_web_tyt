<template>
    <div>
      <Header/>
      <h1>Gestion de Contratos</h1><br>
      <div class="container left">
        <button class="btn btn-primary" v-on:click="newContract()">Nuevo Contrato</button><br><br>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Fecha de inicio</th>
              <th scope="col">Direccion</th>
              <th scope="col">Precio adicional</th>
              <th scope="col">Cliente</th>
              <th scope="col">Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contract in ContractList" :key="contract.contract_id">
              <th scope="row">{{ contract.contract_id }}</th>
              <td>{{ contract.initial_date }}</td>
              <td>{{ contract.address }}</td>
              <td>{{ contract.additional_price}}</td>
              <td>{{ contract.customer_id }}</td>
              <td>{{ contract.plan_id }}</td>
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
  name: 'AdminContract',
  data () {
    return {
      ContractList: null,
      pagina: ''
    }
  },
  components: {
    Header
    // ooter
  },
  methods: {
    newContract () {
      this.$router.push('/newContractAdmin/')
    }
  },
  mounted: function () {
    const direction = 'https://tyt-tecnologias.com.co/api/contract'
    axios.get(direction).then(data => {
      this.ContractList = data.data.body
      console.log(this.ContracttList)
    })
  }
}
</script>

<style scoped>
  .left {
    text-align:left
  }
</style>
