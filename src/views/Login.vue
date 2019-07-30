<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                   
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                      
                        </div>
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="model.email">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Password"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.password">
                            </base-input>

                            <base-checkbox class="custom-control-alternative">
                                <span class="text-muted">Remember me</span>
                            </base-checkbox>
                            <div class="text-center">
                                <base-button type="primary" v-on:click="login" class="my-4">Sign in</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6">
                        <a href="#" class="text-light"><small>Forgot password?</small></a>
                    </div>
                    <div class="col-6 text-right">
                        <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
  import { LoginService } from '../service/login.service';
  export default {
    name: 'login',
    data() {
      return {
        model: {
          email: 'admin@admin.com',
          password: 'admin'
        },
        loginService: null
      }
    },
    created () {
      this.loginService = new LoginService();
    },
    methods: {
      login: function() {
        if(this.model.email && this.model.password) {
            this.loginService.login(this.model.email, this.model.password)
            .then((result) => {
              if(result) {
                this.$router.push('dashboard');
              }
            })
        } 
         
      }
    }
  }
</script>
<style>
</style>
