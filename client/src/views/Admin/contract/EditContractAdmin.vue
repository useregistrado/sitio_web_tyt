<template>
    <div>
      <Header/>
      <h3>Editar informacion del Contrato</h3>
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
                <v-selectize :options="optionsPlan" v-model="selectedPlan" key-by="contract_id" label="contract_id" :keys="['contract_id', 'contract_id']" placeholder="Seleccione un Plan"/>
            </div>

          </div>

          <div class="form-group">
            <button type="button" class="btn btn-primary" v-on:click="edit">Guardar</button>
            <button type="button" class="btn btn-dark margen" v-on:click="exit">Cancelar</button>
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
        contract_id: '',
        initial_date: '',
        address: '',
        additional_price: '',
        customer_id: '',
        plan_id: '',
        state: ''
      },
      optionsClient: [],
      selectedClient: null,
      optionsPlan: [],
      selectedPlan: null
    }
  },
  methods: {
    edit () {
      const send = {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
      console.log('---')
      console.log(this.form)
      axios.put('https://tyt-tecnologias.com.co/api/contract/', this.form, { headers: send })
        .then(data => {
          console.log(data)
          this.$router.push('/adminContract/')
        })
    },
    exit () {
      this.$router.push('/adminContract/')
    }
  },
  /* form: {
        contract_id: '',
        initial_date: '',
        address: '',
        additional_price: '',
        customer_id: '',
        plan_id: ''
      }
  **/
  mounted: function () {
    axios.get('https://tyt-tecnologias.com.co/api/user/')
      .then(data => {
      // this.optionsClient = data.data.body.map(info => info.username)
        this.optionsClient = data.data.body
        // console.log(data.data.body.map(info => info.customer_id))
      })
  },
  watch: {
    selectedClient: function (val) {
      axios.get('https://tyt-tecnologias.com.co/api/contract/')
        .then(data => {
          // console.log(data.data.body.filter(info => info.customer_id === val.customer_id))
          console.log('------')
          console.log(this.optionsPlan)

          this.optionsPlan = data.data.body.filter(info => (info.customer_id === val.customer_id & info.state === 1))
        })
    },
    selectedPlan: function (val) {
      this.form.contract_id = val.contract_id
      this.form.initial_date = val.initial_date.split('T')[0]
      this.form.address = val.address
      this.form.additional_price = val.additional_price
      this.form.customer_id = val.customer_id
      this.form.plan_id = val.plan_id
      this.form.state = false
      console.log(this.form)
    }
  }
  /*
  form: {
        contract_id: '',
        initial_date: '',
        address: '',
        additional_price: '',
        customer_id: '',
        plan_id: '',
        state: ''
      }
   */
}
</script>

<style scoped>
.left {
  text-align: left;
}
</style>
