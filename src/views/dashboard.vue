<template>
  <div>
    <Navbar/>
    <!-- in content -->
      <div class="top-event">
          <!-- in title event -->
          <h1 class="title-event">Dashboard</h1>
          <!-- out title event -->

          <!-- in home event -->
          <div class="home-event">
            <span class="home-text">Home </span><span>/ Event List</span>
          </div>
          <!-- out-home event -->
      </div>
      <!-- out content -->
      <!-- in hr -->
      <hr/>
      <!-- out hr -->
      <Notification/>
      <!-- in card on dahsboard -->
      <v-container>
        <v-layout row wrap>
          <v-flex
            class="justify-center"
            style="height: 155px"
            xs12 sm6 md3 lg4 
            v-for="boxes in cards"
            :key="boxes.value"> 
              <v-card color="#007BFF" class="text-xs-center ma-3" height="124px" width="345px">
                <v-card-text style="color: #fff">
                  <div class="value-title">
                    <v-flex>
                      <v-row>
                        <v-col cols="8" class="white--text">
                        <!-- in value and title -->
                          <div class="value-title">
                            <div class="value">{{ boxes.value }}</div>
                            <div class="title">{{ boxes.title }}</div>
                          </div>
                          <!-- out value and title -->
                        </v-col>
                        <v-col cols="4">
                          <div class="icon">
                            <v-icon size="70">{{boxes.icon}}</v-icon> 
                          </div>
                        </v-col>
                      </v-row>
                    </v-flex>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <!-- out card on dashboard -->
      </div>
  <!-- out content -->
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Notification from '../components/notification-block.vue'

export default {
  name: 'dashboard',
  components: {Navbar, Notification},

  data() {
    return{
      cards: [
        {value: '4', title: 'Active Event', icon: 'mdi-calendar-today'},
        {value: '12', title: 'Draf Event', icon: 'mdi-file'},
        {value: 'Rp500.000', title: 'Total Transaction', icon: 'mdi-swap-horizontal'},
        {value: '4', title: 'Total Tickets Sold', icon: 'mdi-ticket-outline'},
        {value: '4', title: 'Total Sales', icon: 'mdi-trending-up'},
      ]
    }
  }
}
</script>
<style>
/* all label */
label {
  font-weight: bold;
  font-size: 32px;
}
/* styling top content */
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
  width: 100vw;
}
/* notification bar */

.alert {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
}
/* cards styling */
v-card-text {
  color: white;
}
.value {
  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 110%;
}
.title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 140%;
}
</style>