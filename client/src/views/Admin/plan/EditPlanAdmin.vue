<template>
    <div>
      <Header/>
      <h3>Editar plan</h3>
      <br>
      <div class="container">

        <form action="" left>

          <div class="form-group left row g-3 ">
            <div class="col-md-4 mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.name">
              <label for="floatingInput">Nombre del plan</label>
            </div>
            <div class="col-md-4  mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.basic_price">
              <label for="floatingInput">Precio base</label>
            </div>
            <div class="col-md-4  mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.install_price">
              <label for="floatingInput">Precio de instalacion</label>
            </div>
          </div>

          <div class="form-group left row g-3 ">
            <div class="col-md-4 mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.megabytes">
              <label for="floatingInput">Cantidad de megas</label>
            </div>
            <div class="col-md-4  mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.location_type">
              <label for="floatingInput">Tipo de localizacion</label>
            </div>
            <div class="col-md-4  mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.service_type">
              <label for="floatingInput">Tipo de servicio</label>
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
        plan_id: '',
        name: '',
        megabytes: '',
        basic_price: '',
        install_price: '',
        location_type: '',
        service_type: ''
      }
    }
  },
  methods: {
    edit () {
      axios.put('http://localhost/api/plan/', this.form)
        .then(data => {
          console.log(data)
          this.$router.push('/adminPlan/')
        })
    },
    exit () {
      this.$router.push('/adminPlan/')
    },
    remove () {
      const send = {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
      axios.delete('http://localhost:3000/api/plan/' + this.form.plan_id, { headers: send })
        .then(() => {
          this.$router.push('/adminPlan/')
        })
    }
  },
  mounted: function () {
    this.form.plan_id = this.$route.params.PlanId
    axios.get('http://localhost:3000/api/plan/' + this.form.plan_id)
      .then(data => {
        this.form.plan_id = data.data.body[0].plan_id
        this.form.name = data.data.body[0].name
        this.form.megabytes = data.data.body[0].megabytes
        this.form.basic_price = data.data.body[0].basic_price
        this.form.install_price = data.data.body[0].install_price
        this.form.location_type = data.data.body[0].location_type
        this.form.service_type = data.data.body[0].service_type
        // this.form.token = localStorage.getItem('token')
        // console.log(this.form)
      })
  }
}
</script>

<style scoped>
.left {
  text-align: left;
}
</style>
