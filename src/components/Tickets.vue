<template>
  <div>
    <!-- bagian navbar -->
    <b-navbar class="main-navbar" toggleable type="dark" >
      <b-navbar-brand class="text-navbar col-1" href="#">fiyoe.</b-navbar-brand>
    </b-navbar> 

    <!-- bagian isi -->
    <div>
      <br/>
      <div class="ticket-title col-6 offset-3">
        <!-- header ticket  -->
        <p>Tickets</p>
        <hr class="solid">
        
        <div class="form-input">
          <div class="category-tickets-name">
            <label class="mb-2 mt-3">Category Tickets Name</label>
            <b-form-input v-model="text"></b-form-input>
          </div>

          <div class="available-quantity">
            <label class="mb-2 mt-3">Available Quantity</label>
            <b-form-input v-model="text"></b-form-input>
          </div>

          <div class="price">
            <label class="mb-2 mt-3">Price</label>
            <b-form-input v-model="text"></b-form-input>
          </div>

          <div class="description-tickets">
            <label class="mb-2 mt-3">Description Tickets</label>
            <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Typing here..."
            rows="3"
            max-rows="6"
            ></b-form-textarea>
          </div>

          <div class="sales-dates-and-time">
            <label class="mb-2 mt-3">Sales Date and Time</label>
            <p class="description-sales-dates-and-times">Tell event-goers when your sales starts and ends so they can make plans to attend.</p>
            
            <!-- sales dates and time -->
            <b-row>
              <b-col class="w-50">
                <label class="mb-2 mt-3">Sales Starts</label>
                <b-form-datepicker id="sales-starts" v-model="value" class="mb-2"></b-form-datepicker>
                <!-- <p>Value: '{{ value }}'</p> -->

                <label class="mb-2 mt-3">Sales Ends</label>
                <b-form-datepicker id="sales-starts" v-model="value" class="mb-2"></b-form-datepicker>
                <!-- <p>Value: '{{ value }}'</p> -->
              </b-col>
              <b-col class="w-50"> 
                <label class="mb-2 mt-3">Start Time</label>
                <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
                <!-- <div class="mt-2">Value: '{{ value }}'</div> -->

                <label class="mb-2 mt-3">End Time</label>
                <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
                <!-- <div class="mt-2">Value: '{{ value }}'</div> -->
              </b-col>
              <hr class="solid mt-4 mb-4">
            </b-row>
          </div>
        </div>
        <div class="row">
            <div class="col-5">        
                <!-- <b-button></b-button>     -->
            </div>
            <div class="col-7">
                <b-button id="previous" class="mr-1" variant="outline-primary">Previous</b-button>
                <b-button class="create" variant="primary">Create</b-button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tickets',

  components: {
  },

  data() {
    return{
      text: '',
      value: ''
    };
  },
}
</script>

<style>
.create{
    color: #419EE5;
    width: 15vw;
    height: 46px;
}
#previous{
    width: 10vw;
    height: 46px;
} 
.description-sales-dates-and-times{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
}
label {
  color: #5D5F61;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
}
hr.solid{
  border-top: 2px solid #999;
}
.ticket-title{
  color: #2C2C2C;
  width: 117px;
  height: 38px;
  left: 400px;
  top: 120px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  text-align: left;
}
.text-navbar{
  font-family: 'Palanquin Dark';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  position: absolute;
  width: 81px;
  height: 38px;
  left: 70px;
  top: 21px;
  color: #FDFDFC;
}
.main-navbar{
  position: absolute;
  width: 100vw;
  height: 80px;
  left: 0px;
  top: 0px;
  background-color: #5D5F61;
}
</style>
