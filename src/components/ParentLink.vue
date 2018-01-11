<template>
  <li>
    <a :data-activates="link.ref" data-beloworigin="true" class="dropdown-button"><slot></slot> {{link.name}}<slot name="arrow"></slot></a>
    <ul :id="link.ref"  class="dropdown-content">
      <rootlink v-for="link in link.children" :link="link" :key="link.id"></rootlink>
    </ul>
  </li>
</template>
<script>
import rootlink from './RootLink.vue'
export default {
  components: {
    rootlink
  },
  props: ["link"],
  data() {
    return {};
  }
};
</script>
<style>

</style>
