<template>
    <div class="header">
        <b-navbar toggleable="md" type="dark" variant="info">
            <b-container>
                <b-navbar-brand>Navbar</b-navbar-brand>
            </b-container>
            <b-navbar-nav class="ml-auto">
                <b-nav-item>
                    <b-button variant="outline-primary" :to="{name: 'Dashboard'}">Inicio</b-button>
                </b-nav-item>
                <b-nav-item-dropdown text="Clientes" right>
                    <b-dropdown-item :to="{name: 'AdminCustomer'}" href="#">Listar Clientes</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown  text="Planes" right>
                    <b-dropdown-item :to="{name: 'AdminPlan'}" href="#">Listar planes</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Contratos" right>
                    <b-dropdown-item :to="{name: 'AdminContract'}" href="#">Listar Contratos</b-dropdown-item>
                    <b-dropdown-item :to="{name: 'EditContractAdmin'}" href="#">Cancelar Contrato</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Facturas" right>
                    <b-dropdown-item :to="{name: 'AdminPlan'}" href="#">Listar Facturas</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-container>
                    <b-nav-item-dropdown text="| Usuario Admin" activate right>
                        <b-dropdown-item :to="{ name: 'Home' }" >Cerrar Secion</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-container>
            </b-navbar-nav>

        </b-navbar>
    </div>
</template>

<style scoped>
    .header{
        margin-bottom: 20px;
    }
</style>

<script>
export default {
  name: 'Header'
}
</script>
