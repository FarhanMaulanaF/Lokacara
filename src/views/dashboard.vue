<template>
  <div>
    <Navbar/>
      <div class="dashboard">
        <h3>Dashboard</h3>
        <v-container class="my-5">
          <v-layout row>
            <v-flex></v-flex>
          </v-layout>
        </v-container>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Dashboard',
  components: {Navbar}
}
</script>

<style>

</style>