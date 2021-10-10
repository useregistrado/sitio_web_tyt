<template>
    <div>
      <Header/>
      <h1>Gestion de planes</h1><br>
      <div class="container left">
        <button class="btn btn-primary" v-on:click="newPlan()">Nuevo Plan</button><br><br>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Megabytes</th>
              <th scope="col">Precio Base</th>
              <th scope="col">Precio de instalacion</th>
              <th scope="col">tipo de locacion</th>
              <th scope="col">tipo de servicio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="plan in ListaPlanes" :key="plan.plan_id" v-on:click= "edit(plan.plan_id)">
              <th scope="row">{{ plan.plan_id }}</th>
              <td>{{ plan.name }}</td>
              <td>{{ plan.megabytes }}</td>
              <td>{{ plan.basic_price }}</td>
              <td>{{ plan.install_price }}</td>
              <td>{{ plan.location_type }}</td>
              <td>{{ plan.service_type }}</td>
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
  name: 'AdminPlan',
  data () {
    return {
      ListaPlanes: null,
      pagina: ''
    }
  },
  components: {
    Header
    // ooter
  },
  methods: {
    edit (id) {
      this.$router.push('/editPlanAdmin/' + id)
    },
    newPlan () {
      this.$router.push('/newPlanAdmin/')
    }
  },
  mounted: function () {
    const direction = 'http://localhost/api/plan'
    axios.get(direction).then(data => {
      this.ListaPlanes = data.data.body
    })
  }
}
</script>

<style scoped>
  .left {
    text-align:left
  }
</style>
