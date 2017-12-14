<template>
  <div class="col s12 m3">
    <div class="card small sticky-action hoverable">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="event.imgPath">
        <span class="card-title activator">{{event.title}}</span>
      </div>
      <div class="card-reveal blue">
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
  props:['event'],
  data() {
    return {

    }
  }
}

</script>
<style>


</style>
