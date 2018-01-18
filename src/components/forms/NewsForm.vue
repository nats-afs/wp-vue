<template>
  <div class="container">
    <div class="row">
      <h1>Noticias</h1>
      <div class="divider"></div>
      <form @submit.prevent="saveNew" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="title" type="text" class="validate" v-model="noticia.title">
            <label for="title">Titulo de la noticia</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea" v-model="noticia.description"></textarea>
            <label for="textarea1">Descripcion</label>
          </div>
        </div>
        <div class="row">
           <button class="btn waves-effect waves-light" type="submit" name="action">GUARDAR
            <i class="material-icons right">save</i>
          </button>
        </div>
      </form>
    </div>  
  </div>
</template>
<script>
export default {
  data(){
    return{
      noticia:{
        title: null,
        description:null
      }
    }
  },
  methods:{
    saveNew(){
      var database = firebase.database();
      
      database.ref('news').push(this.noticia).then(()=>{
        console.info('Noticia guardada!!');
      });
    }
  }
}
</script>
<style lang="scss">

</style>
