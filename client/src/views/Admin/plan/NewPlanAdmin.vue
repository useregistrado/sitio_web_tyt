<template>
    <div>
        <Header/>
        <div class="container">
            <h3>Nuevo plan</h3><br>
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
                    <b-form-select  v-model="selectedLocation" :options="options" size="sm" class="form-control"></b-form-select>
                    <label for="floatingInput">Tipo de localizacion</label>
                    </div>
                    <div class="col-md-4  mb-3">
                    <b-form-select  v-model="selectedService" :options="options2" size="sm" class="form-control"></b-form-select>
                    <label for="floatingInput">Tipo de servicio</label>
                    </div>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-primary" v-on:click="save()">Guardar</button>

                    <button type="button" class="btn btn-dark margen" v-on:click="exit()">Salir</button>
                </div>

            </form>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
export default {
  name: 'NewPlan',
  components: {
    Header,
    Footer
  },
  data: function () {
    return {
      selectedLocation: null,
      options: [
        { value: null, text: 'Seleccione un tipo' },
        { value: 'Rural', text: 'Rural' },
        { value: 'Urbano', text: 'Urbano' }
      ],
      selectedService: null,
      options2: [
        { value: null, text: 'Seleccione un tipo' },
        { value: 'Comercial', text: 'Comercial' },
        { value: 'Recidencial', text: 'Recidencial' }
      ],
      form: {
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
    save () {
      this.form.location_type = this.selectedLocation
      this.form.service_type = this.selectedService
      axios.post('http://localhost/api/plan/', this.form)
      this.$router.push('/adminPlan/')
    },
    exit () {
      this.$router.push('/adminPlan/')
    }

  }
}
</script>
