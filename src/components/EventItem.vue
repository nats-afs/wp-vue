<template>
  <div class="col s12 m3 l3 carousel-item">
    <div class="card small sticky-action hoverable">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="event.imgPath">
        <span class="card-title activator">{{event.title}}</span>
      </div>
      <div class="card-reveal" :class="{'blue': isPar}">
        <span class="card-title">{{event.title}}<i class="material-icons right">close</i></span>
        <p>{{event.smallDescription}}</p>
        <div class="card-action">
          <a :href="event.link">Ver mas ...</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['event','index'],
  data() {
    return {

    }
  },
  computed:{
    isPar(){
      return this.index % 2 ? true :false;
    }
  }
}

</script>
<style>


</style>
