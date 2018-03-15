<template>
  <div class="container">
    <div class="row">
      <div class="col s2">
        <ul>
          <li>
            <router-link to="/municipalidad/alcalde"> Alcalde</router-link>
          </li>
          <li>
            <router-link to="/municipalidad/teniente-alcalde"> Teniente Alcalde</router-link>
          </li>
          <li>
            <router-link to="/municipalidad/regidores"> Regidores</router-link>
          </li>
          <li>
            <router-link to="/municipalidad/funcionarios"> Funcionarios</router-link>
          </li>
          <li>
            <router-link to="/municipalidad/mision-vision"> Mision Vision</router-link>
          </li>
        </ul>
      </div>
      <div class="col s10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">

</style>

