<template>
  <div>
      <Navbar/>
      <div class="top-event">
          <h1 class="title-event">Event List</h1>
          <div class="home-event">
            <span class="home-text">Home </span><span>/ Event List</span>
          </div>
      </div>
      <hr>
      <Search/>
      <TabEv/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Search from '../components/search.vue'
import TabEv from '../components/table-event.vue'

export default {
  name: 'Dashboard',
  components: {Navbar,Search,TabEv}
}
</script>

<style>
.top-event{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.5% 0 0 3%;
}

.title-event{
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    margin-left: 2%;
}

.home-event{
    margin-right: 5%;
    cursor: pointer;
}

.home-text{
    color:#419EE5;
}

hr{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}

</style>