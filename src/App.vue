<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
/* reset ================================ */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #f6faff;
  color: white;
  /* color: #6c7686; */
}

ul, li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

a {
  display: block;
  text-decoration: none;
  color: #2d3133;
  font-size: 14px;
}

a:hover {
  transition: all 0.3s ease;
}


h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

h1 {
  font-weight: 600;
}

/* Batas reset CSS */

/* Awal CSS  */


</style>
