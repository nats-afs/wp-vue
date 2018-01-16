<template>
  <div class="col s12 m8 l8 news-content">
    <div class="row">
      <div class="carousel">
        <newitem v-for="newitem in news" :newitem="newitem" :key="newitem.id" class=" m6 l4 carousel-item"></newitem>
      </div>
    </div>
    <div class="news-navigation hide-on-small-only">
      <a @click="next" class="news-nav-left btn-floating btn-large waves-effect waves-light">
        <i class="material-icons">arrow_back</i>
      </a>
      <a @click="prev" class="news-nav-right btn-floating btn-large waves-effect waves-light">
        <i class="material-icons">arrow_forward</i>
      </a>
    </div>
  </div>
</template>
<script>
  import newitem from "./NewItem.vue";
  export default {
    components: {
      newitem
    },
    props: ['news'],
    data() {
      return {};
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
      $(this.$el).carousel('destroy');
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

<style lang="scss" scoped>
  .news-content {
    height: inherit !important;
  }
</style>