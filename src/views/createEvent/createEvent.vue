<template>
  <div>
    <!-- in bagian navbar -->
    <NavbarLogo/>
    <!-- out bagian navbar -->

    <!-- in bagian isi -->
    <div class="container-form">
      <p class="basic-title">Basic Info</p>
      <hr class="hr-style">
      <form action="">
        <label for="input-form">Event Name</label>
        <b-form-input class="input-form" type="text"></b-form-input>

        <label for="input-form">Organizer</label>
        <b-form-input class="input-form" type="text"></b-form-input>

        <label for="input-form">Event Category</label>
        <formselection/>
        
        <label for="input-form">Location</label>
        <p class="desc-loc">Help people in the area discover your event and let attendees know where to show up.</p>
        <div class="cont-btn-loc">
          <b-button class="btn-venue btn-loc" variant="primary">Venue</b-button>
          <b-button class="btn-online btn-loc" variant="outline-primary">Online Venue</b-button>
        </div>
        <label class="loc-ven" for="input-form">Location Venue</label>
        <b-form-input class="input-form ven" type="text"></b-form-input>
        <span class="np">Note: </span> <span>Penyelenggaraan event offline hanya tersedia untuk lokasi di</span><span class="np"> Pulau Jawa.</span>

        <label class="label-date" for="input-form">Date and Time</label>
        <p class="desc-loc">Tell event-goers when your event starts and ends so they can make plans to attend.</p>
    
        <div>
            <b-row>
              <b-col class="w-50">
                <!-- in event start -->
                <p class="date-and-time-components mb-2 mt-3">Event Starts</p>
                <b-form-datepicker class="mb-2"></b-form-datepicker>
                <!-- out event start -->

                <!-- in event ends -->
                <p class="date-and-time-components mb-2 mt-3">Event Ends</p>
                <b-form-datepicker class="mb-2"></b-form-datepicker>
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
          <hr class="hr-style" style="border: 1px solid #5b6563; margin: 5% 0 5%; max-width: 100%;">
      </form>

      <div class="btn-bot">
        <router-link :to="{name: 'Dashboard'}">
          <b-button class="btn-disc" variant="outline-secondary">Discard</b-button>  
        </router-link >
        <router-link :to="{name: 'Details'}">
          <b-button class="btn-next" variant="primary">Next</b-button>
        </router-link>
      </div>

    </div>
    <!-- out bagian isi -->

  </div>
</template>

<script>
import NavbarLogo from '../../components/navbarLogo.vue'
import formselection from '../../components/form-selection.vue'

export default {
  name: 'Create-event',
  components: {NavbarLogo,formselection},

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

.hr-style{
  border: 1px solid #5b6563;
  margin: 0 0 5% 0; 
  max-width: 100%;
}

.basic-title{
  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #2C2C2C;
  margin-top: 4%;
}

label{
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #5D5F61;
  margin-bottom: 1%;
}

.input-form{
  margin-bottom: 3%;
}

.cont-btn-loc{
  margin: 3% 0 2.5%;
}

.btn-venue.btn-loc{
  color:#fff;
  display: inline-block;
  width: 20%;
  padding: 10px 25px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
}

.desc-loc{
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #717375;
}

.btn-online.btn-loc{
  margin-left: 3.2%;
  color: #419EE5;
  display: inline-block;
  width: 20%;
  padding: 10px 25px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
}

.btn-online.btn-loc:hover{
  color: #fff;
}


.input-form.ven{
  margin-bottom: 0;
}

.loc-ven{
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #585858;
}

.np{
  font-style: normal;
  font-weight: bold;
  color: #5D5F61;
}

span{
  font-size: 12px;
  margin-bottom: 3%;
}

.label-date{
  display: block;
  margin-top: 3%;
}

.date-and-time-components {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
}

.btn-bot{
  display: flex;
  justify-content: end;
  margin-bottom: 50px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
}

.btn-disc{
  color: #5D5F61;
  margin-right: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
}

.btn-disc:hover{
  color: #fff;
}

.btn-next{
  width: 300px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
}

</style>
