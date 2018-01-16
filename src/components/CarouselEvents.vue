<template>
  <div class="row valign-wrapper">
    <div class="col s12 events-content">
      <div class="row">
        <div class="carousel">
          <eventitem v-for="(event, index) in events" :index="index" :key="event.id" :event="event"></eventitem>
        </div>
      </div>
      <div class="events-navigation hide-on-small-only">
        <a @click="next" class="events-nav-left btn-floating btn-large waves-effect waves-light">
          <i class="material-icons">arrow_back</i>
        </a>
        <a @click="prev" class="events-nav-right btn-floating btn-large waves-effect waves-light">
          <i class="material-icons">arrow_forward</i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import eventitem from "./EventItem.vue";
  export default {
    props: ["events"],
    components: {
      eventitem
    },
    mounted: function () {
      var self = this;
      $(this.$el).carousel({
        fullWidth: true,
        dist: 0,
        shift: 0,
        padding: 20
      });
    },
    beforeDestroy: function () {
      $(this.$el).carousel("destroy");
    },
    methods: {
      next() {
        $(this.$el).carousel("next");
      },
      prev() {
        $(this.$el).carousel("prev");
      }
    }
  };
</script>
<style <style lang="scss" scoped>
  .valign-wrapper {
    height: 380px !important;
  }
</style>