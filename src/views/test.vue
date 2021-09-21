<template>
  <div>
      <h1>Test</h1>
      <h3 v-if="user">Hi, {{user.name}}</h3>
      <h3 v-if="!user">You fired</h3>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Test',
    data(){
        return {
            user: null
        }
    },
    async created(){
        const response = await axios.get('user');
        this.user = response.data;
    }
}
</script>

<style>

</style>