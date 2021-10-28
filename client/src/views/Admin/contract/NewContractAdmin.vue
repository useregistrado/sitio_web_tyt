<template>
    <div>
      <Header/>
      <h3>Nuevo Contrato</h3>
      <br>
      <div class="container">

        <form action="" left>
          <div class="form-group left row g-3 ">
          </div>

          <div class="form-group left row g-3 ">
            <div class="col-md-4  mb-3">
                <v-selectize :options="optionsClient" v-model="selectedClient" key-by="customer_id" label="username" :keys="['customer_id', 'username']" placeholder="Seleccione un cliente"/>
            </div>

            <div class="col-md-4  mb-3">
                <v-selectize :options="optionsPlan" v-model="selectedPlan" key-by="plan_id" label="name" :keys="['plan_id', 'name']" placeholder="Seleccione un Plan"/>
            </div>

            <div class="col-md-4 mb-3">
              <input type="date" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.initial_date">
              <label for="floatingInput">Fecha de inicio</label>
            </div>

            <div class="col-md-4 mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="Direccion"  v-model="form.address">
              <label for="floatingInput">Direccion</label>
            </div>
            <div class="col-md-4  mb-3">
              <input type="number" class="form-control" id="floatingInput" placeholder="Precio"  v-model="form.additional_price">
              <label for="floatingInput">Precio adicional</label>
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
import VSelectize from '@isneezy/vue-selectize'

export default {
  name: 'NewContractAdmin',
  components: {
    VSelectize,
    Header
    // Footer
  },
  data: function () {
    return {
      form: {
        initial_date: '',
        address: '',
        additional_price: '',
        customer_id: '',
        plan_id: ''
      },
      optionsClient: [],
      selectedClient: null,
      optionsPlan: [],
      selectedPlan: null
    }
  },
  methods: {
    save () {
      this.form.customer_id = this.selectedClient.customer_id
      this.form.plan_id = this.selectedPlan.plan_id
      axios.post('https://tyt-tecnologias.com.co/api/contract/', this.form)
      this.$router.push('/adminContract/')
    },
    exit () {
      this.$router.push('/adminContract/')
    }
  },
  mounted: function () {
    axios.get('https://tyt-tecnologias.com.co/api/user/')
      .then(data => {
        // this.optionsClient = data.data.body.map(info => info.username)
        this.optionsClient = data.data.body
        console.log(data.data.body.map(info => info.customer_id))
      })
    axios.get('https://tyt-tecnologias.com.co/api/plan/')
      .then(data => {
        // this.optionsPlan = data.data.body.map(info => info.name)
        this.optionsPlan = data.data.body
        console.log(data.data.body.map(info => info.plan_id))
      })
  }
}
</script>

<style scoped>
.left {
  text-align: left;
}
</style>
