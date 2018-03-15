<template>
  <div class="">
    <h1>Regidores</h1>
    <div class="divider"></div>
    <div class="content">
      <div v-for="i in 4" :key=i class="row">
        <div class="col s4">
          <img src="../../assets/img/funcionario.jpg" alt="" class="responsive-img">
        </div>
        <div class="col s8">
          <h4>Regidor {{i}}</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis inventore non tempora! Aspernatur fugiat consequuntur tempore dolor sequi eum sint dolore veritatis quasi mollitia suscipit recusandae, excepturi ducimus explicabo odit!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis inventore non tempora! Aspernatur fugiat consequuntur tempore dolor sequi eum sint dolore veritatis quasi mollitia suscipit recusandae, excepturi ducimus explicabo odit!</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.content{
  margin: 3em 0;
  .row{
    margin: 3em 0;
  }
}
</style>
