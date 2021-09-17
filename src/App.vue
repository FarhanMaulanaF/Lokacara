<template>
<!-- in wrapper -->
<div class="wrapper">
  <div class="body-overlay"></div>

  <!-- ----------------------------- side bar ----------------------------- -->
  <!-- in navigation-drwaer -->
  <v-navigation-drawer
   color="#5D5F61"
   height="100vh"
   width="320px"
   dark> 
   <!-- in logo-lokacara -->
    <ul>
      <li>
        <img 
        src="@/components/logo-lokacara.svg"
        height="32px"
        width="165.94px">
      </li>
    </ul>
    <!-- out logo lokacara -->

    <v-divider light></v-divider>

    <!-- in list-navigation -->
    <ul class="list navigation">
      <li>
        <a href="#" class="dashboard"><img src="@/components/logo-dashboard.svg"><span>Dashboard</span></a>
      </li>
      <li>
        <a href="#" class="event-list"><img src="@/components/logo-eventList.svg"><span>Event List</span></a>
      </li>
    </ul>
    <!-- out list-navigation -->

    <v-divider></v-divider>
  </v-navigation-drawer>
  <!-- out navigation-drawer -->

  <!-- ----------------------------- page content ----------------------------- -->

  <!-- in content -->
  <div class="contect">
    <!-- in top-navbar -->
    <div class="top-navbar">
      <nav class="navbar" navbar-expand-lg>
        <button type="button" id="sidebar-collapse" class="d-xl-block d-lg-block d-md-none d-none">
          
        </button>
      </nav>
    </div>
    <!-- out top-navbar -->
  </div>
  <!-- out content -->
</div>
<!-- out wrapper -->


</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
</style>