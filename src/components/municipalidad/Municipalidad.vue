<template>
  <div class="container">
      <ul>
          <li><router-link to="/municipalidad/alcalde"> Alcalde</router-link></li>
          <li><router-link to="/municipalidad/regidores"> Regidores</router-link></li>
          <li><router-link to="/municipalidad/funcionarios"> Funcionarios</router-link></li>
          <li><router-link to="/municipalidad/mision-vision"> Mision  Vision</router-link></li>
      </ul>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">

</style>

