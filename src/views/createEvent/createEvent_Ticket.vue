<template>
  <div>
    <!-- bagian navbar -->
    <NavbarLogo/>

    <!-- bagian isi -->
    <div class="container-ticket">
        <p class="ticket-title">Tickets</p>
        <hr style="border: 1px solid #5b6563; margin: 0 0 5% 0; max-width: 100%;">
        <form action="">
             <label style="margin-top: 2.3%;" for="input-form">Category Tickets Name</label>
             <b-form-input class="input-form" type="text"></b-form-input>
             
             <div class="row justify-content-start">
                 <div class="col-4">
                    <label for="input-form">Available Quantity</label>
                    <b-form-input class="input-form" type="text"></b-form-input>
                 </div>
                 
                 <div class="col-4">
                    <label for="input-form">Max Ticket </label>
                    <b-form-input class="input-form" type="text"></b-form-input>
                 </div>
             </div>

             <label style="margin-top: 2%;" for="input-form">Price</label>
             <b-form-input class="input-form" type="text"></b-form-input>

             <label style="margin-bot: 0;" for="input-form">Description Ticket</label>
             <b-col style="padding: 0; margin-bottom: 3%;">
                <b-form-textarea
                    id="textarea-default"
                    placeholder="Typing Here..."
                    rows="3"
                    class="form-type">
                </b-form-textarea>
              </b-col>

             <label class="label-date" for="input-form"> Sales Date and Time</label>
            <p class="desc-loc">Tell event-goers when your sales starts and ends so they can make plans to attend.</p>
        
            <div>
                <b-row>
                    <b-col class="w-50">
                        <!-- in event start -->
                        <p class="date-and-time-components mb-2 mt-3">Sales Starts</p>
                        <b-form-datepicker class="mb-2"></b-form-datepicker>
                        <!-- out event start -->

                        <!-- in event ends -->
                        <p class="date-and-time-components mb-2 mt-3">Sales Ends</p>
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
        </form>

        <hr class="hr-style" style="border: 1px solid #5b6563; margin: 5% 0 5%; max-width: 100%;">

        <div class="btn-bot">
            <router-link :to="{name: 'Details'}">
                <b-button class="btn-disc" variant="outline-secondary">Previous</b-button>  
            </router-link >
            <router-link :to="{name: 'Dashboard'}">
                <b-button class="btn-next" variant="primary">Create</b-button>
            </router-link>
        </div>

    </div>
  </div>
</template>

<script>
import NavbarLogo from '../../components/navbarLogo.vue'
export default {
  name: 'Ticket',

  components: {NavbarLogo},

  data() {
    return{
      text: '',
      value: ''
    };
  },
}
</script>

<style>
.container-ticket{
  max-width: 50%;
  margin: auto;
}

.ticket-title{
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

.quantity-cont{
    display: inline-block;
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
