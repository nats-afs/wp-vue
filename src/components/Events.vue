<template>
  <section id="events">
    <div class="container events-wrapper">
      <h1 class="center-align">{{title}}</h1>
      <carouselevents :events="events"></carouselevents>
      <div class="container">
        <div class="center-align">
          <a :href="moreLink" class="waves-effect btn-flat">{{moreText}} <i class="material-icons">more_horiz</i></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import carouselevents from "./CarouselEvents.vue";
export default {
  components: {
    carouselevents
  },
  data() {
    return {
      title: "Events",
      events: [
        {
          imgPath: "/src/assets/img/office.jpg",
          title: "Evento 1",
          smallDescription:
            "Here is some more information about this product that is only revealed once clicked on.",
          link: "#"
        },
        {
          imgPath: "/src/assets/img/office.jpg",
          title: "Evento 2",
          smallDescription:
            "Here is some more information about this product that is only revealed once clicked on.",
          link: "#"
        },
        {
          imgPath: "/src/assets/img/office.jpg",
          title: "Evento 3",
          smallDescription:
            "Here is some more information about this product that is only revealed once clicked on.",
          link: "#"
        },
        {
          imgPath: "/src/assets/img/office.jpg",
          title: "Evento 4",
          smallDescription:
            "Here is some more information about this product that is only revealed once clicked on.",
          link: "#"
        },
        {
          imgPath: "/src/assets/img/office.jpg",
          title: "Evento 5",
          smallDescription:
            "Here is some more information about this product that is only revealed once clicked on.",
          link: "#"
        },
        {
          imgPath: "/src/assets/img/office.jpg",
          title: "Evento 6",
          smallDescription:
            "Here is some more information about this product that is only revealed once clicked on.",
          link: "#"
        },
        {
          imgPath: "/src/assets/img/office.jpg",
          title: "Evento 7",
          smallDescription:
            "Here is some more information about this product that is only revealed once clicked on.",
          link: "#"
        },
        {
          imgPath: "/src/assets/img/office.jpg",
          title: "Evento 7",
          smallDescription:
            "Here is some more information about this product that is only revealed once clicked on.",
          link: "#"
        }
      ],
      moreText: "Ver mas",
      moreLink: "#"
    };
  }
};
</script>
<style <style lang="scss" scoped>

</style>
