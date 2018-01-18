<template>
  <div class="container">
    <div class="row">
      <h1>Noticias</h1>
      <div class="divider"></div>
      <form @submit.prevent="saveNew" class="col s12">
        <div class="row">
          <div class="col s8">
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
          </div>
          <div class="col s4">
            <div class="file-field input-field">
              <div class="btn">
                <span>Imagen</span>
                <input type="file" name="filename" accept="image/jpeg, image/png" @change="previewImage">
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text">
              </div>
            </div>
            <div class="img-wrapper">
              <img :src="noticia.image" alt="" class="responsive-img">
            </div>
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
  data() {
    return {
      noticia: {
        title: null,
        description: null,
        image: null
      }
    };
  },
  methods: {
    saveNew() {
      var database = firebase.database();

      database
        .ref("news")
        .push(this.noticia)
        .then(() => {
          console.info("Noticia guardada!!");
        });
    },
    previewImage: function(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.noticia.image = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    }
  }
};
</script>
<style lang="scss">
  .img-wrapper{
    border: 2px solid rgb(126, 121, 121);
    &>img{
      height: 200px;
    }
  }
</style>
