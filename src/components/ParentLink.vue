<template>
  <li><a class="dropdown-button" :data-activates="link.ref" data-beloworigin="true"><slot></slot> {{link.name}}<slot name="arrow"></slot></a></li>
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
