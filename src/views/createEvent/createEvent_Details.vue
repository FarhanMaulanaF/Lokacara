<template>
  <div>
    <!-- bagian navbar -->
    <NavbarLogo/>
    <!-- bagian isi -->
    <div class="container-detail">
        <p class="details-title">Details</p>
        <hr style="border: 1px solid #5b6563; margin: 0 0 5% 0; max-width: 100%;">
        <form action="">
            <label for="input-form">Main Event Image</label>
            <p class="main-desc" style="margin: 0;">This is the first image attendees will see at the top of your </p>
            <p class="main-desc" style="margin: 0;">listing. Use a hiigh quality: 2160x1080px (2:1 ratio).</p> 
            <input type="file" class="form-control form-file" multiple="">

            <label class="mb-2 mt-3">Description</label>
            <p class="main-desc" style="margin: 0;">Add more details to your event like your schedule, sponsors, or</p>
            <p class="main-desc" style="margin: 0;">featured guests.</p>
             <b-col style="padding: 0;">
                <b-form-textarea
                    id="textarea-default"
                    placeholder="Typing Here..."
                    rows="5"
                    class="form-type">
                </b-form-textarea>
            </b-col>

            <hr class="hr-style" style="border: 1px solid #5b6563; margin: 15% 0 5%; max-width: 100%;">

            <div class="btn-bot">
                <router-link :to="{name: 'Create-Event'}">
                    <b-button class="btn-disc" variant="outline-secondary">Previous</b-button>  
                </router-link >
                <router-link :to="{name: 'Ticket'}">
                    <b-button class="btn-next" variant="primary">Next</b-button>
                </router-link>
            </div>
        </form>
    </div>


  </div>
</template>

<script>
import NavbarLogo from '../../components/navbarLogo.vue'
export default {
  name: 'Detail',

  components: {NavbarLogo},

  data() {
    return{
      text: '',
      value: '',
    };
  },
}
</script>

<style scoped>
.container-detail{
  max-width: 50%;
  margin: auto;
}

.details-title{
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

.main-desc{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #717375;
}

.form-control.form-file{
    width: 440px;
    height: 154px;
    background-color: #D8DCE0;
    border: 2px dashed #D8DCE0;
    box-sizing: border-box;
    border-radius: 5px;
    opacity: .5;
    background-image: url('../../assets/img.svg');
    margin-top: 2%;
}

.form-type{
    padding: 0;
    margin-top: 2%;
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
