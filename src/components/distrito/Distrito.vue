<template>
  <div class="container">
      <h1>Huachipa</h1>
      <div class="diveder"></div>
      <p>Distrito Ecologico</p>
      <div class="divider"></div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos reprehenderit fugit dicta voluptate. Asperiores ipsa consectetur magnam fugit optio laborum impedit? Fugiat provident recusandae reprehenderit cumque, similique odit. Labore, tempora.</p>
      <p>Quidem labore explicabo id inventore at libero suscipit, veritatis corporis nam nulla voluptatem, ad odio perspiciatis doloribus tempora? Voluptate sunt placeat in reprehenderit accusamus dignissimos illo quaerat quae numquam blanditiis!</p>
      <ul>
        <li><router-link to="/distrito/creacion"> Creacion Politica</router-link></li>
        <li><router-link to="/distrito/historia"> Historia</router-link></li>
        <li><router-link to="/distrito/turismo"> Turismo</router-link></li>
        <li><router-link to="/distrito/ecologia"> Ecologia</router-link></li>
      </ul>
      <router-view></router-view>
  </div>
</template>
