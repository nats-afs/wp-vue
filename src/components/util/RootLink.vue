<template>
  <li>
    <router-link :to="link.path"><slot></slot> {{link.name}}</router-link>
  </li>  
</template>

<script>
export default {

	props:['link']

  // data () {
  //   return {
  //   	name:'Distrito',
  //   	icon:'fa fa-fw fa-institution',
  //   	link:'distrito.html'
  //   }
  // }
}
</script>

<style>
</style>