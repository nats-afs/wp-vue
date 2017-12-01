<template>
  <div class="row">
    <div class="col s4">
      <a :href="place.link"><img :src="place.imgPath" alt="" class="responsive-img"></a>
    </div>
    <div class="col s8">
      <h5>{{place.name}}</h5>
      <p>{{place.address}}</p><span>{{place.schedule}}</span>
    </div>
  </div>
</template>
<script>
export default {
	props:['place']
}

</script>
<style>


</style>
