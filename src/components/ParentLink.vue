<template>
  <li><a class="dropdown-button" :data-activates="link.ref" data-beloworigin="true"> {{link.name}}<i class="material-icons right">arrow_drop_down</i></a></li>
</template>
<script>
import rootlink from './RootLink.vue'
export default {
  components: {
    rootlink
  },
  props: ['link'],
  data() {
    return {

    }
  }
}

</script>
<style>


</style>
