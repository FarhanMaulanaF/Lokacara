<template>
  <b-container class="bv-example-row" style="margin: 0 0; max-width: 1500px;">
      <b-row>
        <!-- Untuk gambar balon udara -->
        <b-col class="balon-img"></b-col>
         <!--Balon udara  -->

         <!-- Untuk form register -->
        <b-col style>
          <div class="container-form">

            <div class="logo">
              <p>fiyoe.</p>
            </div>

              <form @submit.prevent="handleSubmit">
                <h1 class='title-login'>Register</h1>
                <hr style=" margin-bottom: 24px;">
                <label for="email">Email</label>
                <input v-model="form.email" required style=" margin-bottom: 16px;" type="email" class="email" id="email">

                <label for="email">Name</label>
                <input v-model="form.name" required style=" margin-bottom: 16px;" type="text" class="name" id="name">

                <label for="password">Password</label>
                <input v-model="form.pw" required style=" margin-bottom: 16px;" type="password" class="password" id="password">

                <label for="c-password">Confirm Password</label>
                <input v-model="form.pw_c" required style=" margin-bottom: 24px;" type="password" class="c-password" id="c-password">

                <b-button @click='handleSubmit' class='btn-login' variant="primary">Register</b-button>
              
                <hr class="btn-hr">
                <!-- <a class="btn-reg" href="./Register.Vue">Register</a> -->
                <router-link :to="{name: 'Login'}">
                  <b-button class="btn-reg" variant="outline-secondary">Login</b-button>
                </router-link>
            </form>
          </div>
        </b-col>

      </b-row>
    </b-container>
</template>

<script>
import axios from 'axios'

export default {
  name:'Register',
  data(){
    return{
      form:{
        email: '',
        name: '',
        pw: '',
        pw_c: ''
      }
    }
  },
  methods:{
    async handleSubmit(){
      await axios.post('login', {
        email: this.form.email,
        name: this.form.name,
        pw: this.form.pw,
        pw_c: this.form.pw_c
      });
      
      this.$router.push('/');
      // console.log(data);
    }
  }
}
</script>

<style scoped>
.balon-img{
  width: 50%;
  height: 833px;
  background: url('../assets/login.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.container-form{
  margin: 0 auto;
  max-width: 420px;;
}

.logo{
  margin-top: 3%;
}

.logo p{
  font-family: 'Palanquin', sans-serif;
  font-weight: bold;
  color: #0F84DE;
  font-size: 40px;
}

form{
  margin-top: 8%;
}

.title-login{
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #2C2C2C;
  margin-bottom: 24px;
}

label{
  width: 333px;
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
  font-size: 16px;
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
  color: #FDFDFC;
}

.btn-hr{
  width: 356px;
  height: 0px;
  border: 1px solid #D8DCE0;
  margin: 24px auto;
}

.btn-reg{
  width: 420px;
  height: 46px;
  align-items: center;
  padding: 12px 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
  color: #5D5F61;
}

.btn-reg:hover{
  color: #eee;
}

@media (max-width:992px) {
  .balon-img{
    display: none;
  }

  input{
  font-size: 14px;
  }

  .btn-reg{
      margin-bottom: 20%;
  }
}


</style>