<template>
  <article>
    <h4>Noticia por defecto</h4>
    <small>{{ $route.params.id }}</small>
    <small>16-01-2018</small>
    <img class="responsive-img" src="../assets/img/img1b.jpg" alt="">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, non? Quam ullam dolorem ipsum placeat neque enim. Quos nesciunt corporis, cum molestias eius dolorem harum quo! Consequuntur ab sequi consequatur!</p>
    <p>Voluptate natus culpa exercitationem et quis tenetur quaerat error enim reiciendis dolor vel repudiandae tempore amet nostrum ut repellendus, distinctio placeat, molestias cum odit! Impedit exercitationem hic officiis sed facilis.</p>
    <p>Optio quia voluptates nihil perferendis distinctio consequuntur, ipsum recusandae corrupti, harum ducimus dolorum. Modi officiis consectetur enim distinctio mollitia ipsa eius, eos nostrum quibusdam rerum expedita reprehenderit quae voluptatibus quaerat?</p>
    <p>Sunt voluptas ipsam necessitatibus libero est temporibus maxime deserunt mollitia delectus odit. Repellendus eos corrupti saepe possimus architecto optio laboriosam libero quod ab eius! Nesciunt earum explicabo nulla fuga dolores.</p>
    <p>Laudantium, suscipit ut rerum necessitatibus nostrum sed omnis beatae mollitia non iusto enim culpa, minima magni vel nisi, nihil consequatur iste praesentium temporibus quisquam expedita dolorum! Harum sunt maxime omnis.</p>
    <router-link to="/news/foo">/news/foo</router-link>
  </article>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  img{
    margin: 1em auto;
  }
</style>
