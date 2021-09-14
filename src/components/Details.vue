<template>
  <div>
    <!-- bagian navbar -->
    <b-navbar class="main-navbar" toggleable type="dark" >
      <b-navbar-brand class="text-navbar col-1" href="#">fiyoe.</b-navbar-brand>
    </b-navbar> 

    <!-- bagian isi -->
    <div>
      <br/>
      <div class="details-title col-6 offset-3">
        <!-- header ticket  -->
        <p>Details</p>
        <hr class="solid">
        <div class="form-input">

          <div class="main-event-image">
            <label class="mb-2 mt-3">Main Event Image</label>
            <p class="desc">This is the first image attendees will see at the top of your listing. Use a hiigh quality: 2160x1080px (2:1 ratio).</p>
            <form method="post" action="#" id="#">
              <div class="form-group files">
                <label class="mb-2 mt-3">Upload Your File </label>
                <input type="file" class="form-control" multiple="">
              </div>
            </form>

            <label class="description mb-2 mt-4">Description</label>
            <p class="desc">Add more details to your schedule, sponsor, or featured guest.</p>

            <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Typing here..."
            rows="3"
            max-rows="6"
            ></b-form-textarea>
          </div>
        </div>
        <hr class="solid mt-4 mb-4">
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
  name: 'Details',

  components: {
  },

  data() {
    return{
      text: '',
      value: '',
    };
  },
}
</script>

<style>
.details-title{
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
.main-event-image{
  color: #5D5F61;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
}
.desc{
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #717375;
}
hr.solid{
  border-top: 2px solid #999;
}
.files input {
  outline: 2px dashed #92b0b3;
  outline-offset: -10px;
  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
  transition: outline-offset .15s ease-in-out, background-color .15s linear;
  padding: 120px 0px 85px 35%;
  text-align: center !important;
  margin: 0;
  width: 100% !important;
}
.files input:focus{     
  outline: 2px dashed #92b0b3;  outline-offset: -10px;
  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
  transition: outline-offset .15s ease-in-out, background-color .15s linear; border:1px solid #92b0b3;
 }
.files{ position:relative}
.files:after {  pointer-events: none;
  position: absolute;
  top: 60px;
  left: 0;
  width: 50px;
  right: 0;
  height: 56px;
  content: "";
  background-image: url(https://image.flaticon.com/icons/png/128/109/109612.png);
  display: block;
  margin: 0 auto;
  background-size: 100%;
  background-repeat: no-repeat;
}
.color input{ background-color:#f1f1f1;}
.files:before {
  position: absolute;
  bottom: 10px;
  left: 0;  pointer-events: none;
  width: 100%;
  right: 0;
  height: 57px;
  content: " or drag it here. ";
  display: block;
  margin: 0 auto;
  color: #2ea591;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
}
</style>
