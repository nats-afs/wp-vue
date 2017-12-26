<template>
  <section id="events">
    <div class="container events-wrapper">
      <h1 class="center-align">{{title}}</h1>
      <div class="row valign-wrapper">
        <div class="col s12 events-content">
          <div class="row">
            <eventitem v-for="(event, index) in events" :index="index" :key="event.id" :event="event"></eventitem>
          </div>
          <div class="events-navigation hide-on-small-only">
            <a class="events-nav-left btn-floating btn-large waves-effect waves-light"><i class="material-icons">arrow_back</i></a>
            <a class="events-nav-right btn-floating btn-large waves-effect waves-light"><i class="material-icons">arrow_forward</i></a>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="center-align">
          <a :href="moreLink" class="waves-effect btn-flat pulse">{{moreText}} <i class="material-icons">more_horiz</i></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import eventitem from './EventItem.vue'
export default {
  components: {
    eventitem
  },
  data() {
    return {
      title: 'Events',
      events: [
        { imgPath: '/src/assets/img/office.jpg', title: 'Evento 1', smallDescription: 'Here is some more information about this product that is only revealed once clicked on.', link: '#' },
        { imgPath: '/src/assets/img/office.jpg', title: 'Evento 2', smallDescription: 'Here is some more information about this product that is only revealed once clicked on.', link: '#' },
        { imgPath: '/src/assets/img/office.jpg', title: 'Evento 3', smallDescription: 'Here is some more information about this product that is only revealed once clicked on.', link: '#' },
        { imgPath: '/src/assets/img/office.jpg', title: 'Evento 4', smallDescription: 'Here is some more information about this product that is only revealed once clicked on.', link: '#' }
      ],
      moreText:'Ver mas',
      moreLink:'#'
    }
  }
}

</script>
<style>


</style>
