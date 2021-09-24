<template>
  <div>
    <!-- in bagian navbar -->
    <Navbar/>
    <!-- out bagian navbar -->

    <!-- in bagian isi -->
    <div>
      <br/>
      <!-- in basic info title -->
      <div class="basic-info-title col-6 offset-3">
        <p>Basic Info</p>
        <hr class="solid">

        <!-- in form input -->
        <div class="form-input">
          <!-- in event name -->
          <div class="event-name">
            <label class="mb-2 mt-3">Event name</label>
            <b-form-input v-model="text"></b-form-input>
          </div>
          <!-- out event name -->

          <!-- in organizer -->
          <div class="organizer">
            <label class="mb-2 mt-3">Organizer</label>
            <b-form-input v-model="text"></b-form-input>
          </div>
          <!-- out organizer -->

          <!-- in event category -->
          <div class="event-category">
            <label class="mb-2 mt-3">Event Category</label>
            <formselection/>
          </div>
          <!-- out event category -->

          <!-- in location -->
          <div class="location">
            <label class="mb-2 mt-3">Location</label>
            <p class="description">Help people in the area discover your event and let attendees know where to show up.</p>
            <!-- in button -->
            <div class="button">
              <b-button class="vanue" variant="outline-primary">Vanue</b-button>
              <b-button class="online-vanue" variant="outline-primary">Online Vanue</b-button>
            </div>
            <!-- out button -->
            <p class="location-vanue">Location Vanue</p>
            <b-form-input v-model="text"></b-form-input>
          </div>
          <!-- out location -->

          <!-- in date and time -->
          <div class="date-and-time">
            <label class="mb-2 mt-3">Date and Time</label>
            <p class="description">Tell event-goers when your event starts and ends so they can make plans to attend.</p>
            <!-- in row -->
            <div>
              <b-row>
                <b-col class="w-50">
                  <!-- in event start -->
                  <p class="date-and-time-components mb-2 mt-3">Event Starts</p>
                  <b-form-datepicker v-model="value" class="mb-2"></b-form-datepicker>
                  <!-- out event start -->

                  <!-- in event ends -->
                  <p class="date-and-time-components mb-2 mt-3">Event Ends</p>
                  <b-form-datepicker v-model="value" class="mb-2"></b-form-datepicker>
                  <!-- out event ends -->
                </b-col>
                <b-col class="w-50">
                  <!-- in start time -->
                  <p class="date-and-time-components mb-2 mt-3">Start Time</p>
                  <b-form-timepicker></b-form-timepicker>
                  <!-- out start time -->
                  
                  <!-- in end time -->
                  <p class="date-and-time-components mb-2 mt-3">End Time</p>
                  <b-form-timepicker></b-form-timepicker>
                  <!-- out end time -->
                </b-col>
              </b-row>
            </div>
            <!-- out row -->
          </div>
          <!-- out date and time -->

        </div>
        <!-- out form input -->
      <hr class="solid mt-4 mb-4">

      <!-- in tombol -->
      <div class="row">
        <div class="col-5">

        </div>
        <div class="col-7">
            <v-btn>
            <router-link style="text-decoration: none; color: inherit;"
            to="/">
                discard
            </router-link>
            </v-btn>
            <v-btn 
            class="next" 
            color="#419EE5" 
            elevation="0">
              <router-link
              style="text-decoration: none; color: inherit;"
              to="/detail">
                Next
              </router-link>
            </v-btn>
        </div>
      </div>
      <!-- out tombol -->
      
      </div>
      <!-- out basic info title -->
    </div>
    <!-- out bagian isi -->
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import formselection from '../components/form-selection.vue'

export default {
  name: 'Create-event',
  components: {Navbar,formselection},

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
.main-navbar {
  position: absolute;
  width: 100vw;
  height: 80px;
  left: 0px;
  top: 0px;
  background-color: #5D5F61;
}
.text-navbar {
  font-family: 'Palanquin Dark';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  position: absolute;
  width: 81px;
  height: 38px;
  left: 71px;
  top: 21px;
  color: #FDFDFC;
}
/* out styling navbar */

/* in kolom 6 offset 3 */
.basic-info-title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  width: 153px;
  height: 38px;
  left: 400px;
  top: 120px;
  color: #2C2C2C;
}
hr.solid {
  border-top: 2px solid #999;
}
label {
  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
  color: #5D5F61;
}
.description {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
}
.vanue {
  position: static;
  height: 44px;
  width: 162px;
  margin-right: 24px;
}
.online-vanue {
  position: static;
  height: 44px;
  width: 162px;
}
.location-vanue {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #585858;
  margin-top: 16px;
  margin-bottom: 8px;
}
.date-and-time-components {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
}
/* out kolom 6 offset 3 */
</style>
