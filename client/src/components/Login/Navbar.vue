<template>
  <div>
    <div class="navbar">
      <div class="navbar_l">
        <img src="@/assets/img/logo.png" alt="">
        <h2>T&T Tecnologias</h2>
      </div>
      <div class="navbar_r">
        <div class="btn-pay-div"><a href="" class="btn-pay">PAGAR</a></div>
        <div class="btn-opt"><a href="#">Servicios</a></div>
        <div class="btn-opt"><a href="#">Nosotros</a></div>
        <div class="btn-opt"><a href="#">Contacto</a></div>
        <div class="separator"></div>
        <div class="btn-opt"><router-link to="/login">Iniciar Sesión</router-link></div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
