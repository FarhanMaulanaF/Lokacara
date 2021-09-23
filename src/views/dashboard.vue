<template>
  <div>
    <Navbar/>
    <!-- in content -->
      <div class="dashboard my-2 mx-5">
        <!-- <v-container class="my-5"> -->
          <label>Dashboard</label> 
          <!-- in divider -->
          <v-divider></v-divider>
          <!-- out divider -->

          <!-- in notification card -->
          <div class="mt-2 mb-5">
            <v-card class="notification-block" flat color="#F6F3E0" width="100vw" height="48px">
              <p class="alert"><v-icon>mdi-information</v-icon> Message/ Alert/ Notification</p>
            </v-card>
          </div>
          <!-- out notification card -->

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
        <!-- </v-container> -->
      </div>
  <!-- out content -->
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Dashboard',
  components: {Navbar},

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