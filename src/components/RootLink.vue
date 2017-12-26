<template>
	<!-- <li><a :href="link.path"><i :class="link.icon"></i> {{link.name}}</a></li> -->
	<li><a :href="link.path"><slot></slot> {{link.name}}</a></li>
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