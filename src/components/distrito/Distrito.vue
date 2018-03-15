<template>
  <div class="container ">
    <div class="row">
      <div class="col s2">
        <ul>
          <li><router-link to="/distrito/creacion"> Creacion Politica</router-link></li>
          <li><router-link to="/distrito/historia"> Historia</router-link></li>
          <li><router-link to="/distrito/turismo"> Turismo</router-link></li>
          <li><router-link to="/distrito/ecologia"> Ecologia</router-link></li>
        </ul>
      </div>
      <div class="col s10">
        <h2>Huachipa</h2>
        <div class="divider"></div>
        <span class="flow-text">Distrito Ecologico</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos reprehenderit fugit dicta voluptate. Asperiores ipsa consectetur magnam fugit optio laborum impedit? Fugiat provident recusandae reprehenderit cumque, similique odit. Labore, tempora.</p>
        <p>Quidem labore explicabo id inventore at libero suscipit, veritatis corporis nam nulla voluptatem, ad odio perspiciatis doloribus tempora? Voluptate sunt placeat in reprehenderit accusamus dignissimos illo quaerat quae numquam blanditiis!</p>
        <router-view></router-view>
      </div>
    </div>
  </div>
  </div>
</template>
