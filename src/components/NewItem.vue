<template>
  <div class="col s12">
    <div class="card sticky-action hoverable">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="newitem.imgPath">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{{newitem.title}}
          <i class="material-icons right">more_vert</i>
        </span>
        <p>
          <a :href="newitem.link">{{newitem.linkText}}</a>
        </p>
      </div>
      <div class="card-action">
        <a :href="newitem.actionLink1">{{newitem.actionLinkText1}}</a>
        <a :href="newitem.actionLink2">{{newitem.actionLinkText2}}</a>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{{newitem.title}}
          <i class="material-icons right">close</i>
        </span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['newitem'],
    data() {
      return {

      }
    }
  }

</script>
<style>
</style>