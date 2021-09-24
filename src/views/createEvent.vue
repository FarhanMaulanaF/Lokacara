<template>
  <div>
    <!-- in bagian navbar -->
    <Navbar/>
    <!-- out bagian navbar -->

    <!-- in bagian isi -->
    <div class="container-form">
      <p class="basic-title">Basic Info</p>
      <form action="">
        
      </form>
    </div>
    <!-- out bagian isi -->

  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
// import formselection from '../components/form-selection.vue'

export default {
  name: 'Create-event',
  components: {Navbar},

  data() {
    return {
      text: '',
      value: '',
    };
  },
}
</script>

<style scoped>
/* in styling navbar */
.container-form{
  max-width: 50%;
  margin: auto;
}

.basic-title{
  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #2C2C2C;
  margin-top: 4%;
}


</style>
