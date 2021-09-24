<template>
  <b-container class="bv-example-row" style="margin: 0 0; max-width: 1500px;">
      <b-row>
        <!-- Untuk gambar balon udara -->
        <b-col class="balon-img"></b-col>
         <!--Balon udara  -->

         <!-- Untuk form login -->
        <b-col>
          <div class="container-form">
            <div class="logo">
              <img src="../assets/lokacara.png" alt="">
            </div>
              <form action="">
                <h1 class='title-login'>Forgot Password</h1>
                <hr style=" margin-bottom: 24px;">

                <label for="email">Email</label>
                <input v-model="form.email" required style=" margin-bottom: 16px;" type="email" class="email" id="email">
                
                <b-button @click="submit" class='btn-login' variant="primary">Send Password</b-button>

            </form>
          </div>
          
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
export default {
  data(){
    return{
      form:{
        email: '',
        pw: ''
      }
    }
  },
   methods:{
    submit(){
      console.log(this.form);
    },
  }
}

</script>

<style scoped>
.balon-img{
  width: 50%;
  height: 718px;
  background: url('../assets/login.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.container-form{
  margin: 0 auto;
  width: 420px;;
}

.logo{
  margin-top: 3%;
}

.logo img{
  max-width: 45%;
  padding-top: 10%;
}

form{
  margin-top: 35%;
}

.title-login{
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #2C2C2C;
  margin-bottom: 24px;
}

label{
  width: 43px;
  height: 22px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
  color: #585858;
  margin-bottom: 8px;
}

input{
  width: 420px;
  height: 48px;
  border: 1px solid #989B9D;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  padding-left: 2%;
  color: #585858;
}

.btn-login{
  width: 420px;
  height: 46px;
  align-items: center;
  padding: 12px 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
  color: #FDFDFC;
}


@media (max-width:992px) {
  .balon-img{
    display: none;
  }

  input{
  font-size: 14px;
  }
}


</style>