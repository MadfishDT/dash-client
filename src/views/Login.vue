<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                        </div>
                        <pulse-loader v-if="isloaderVisible == true" loading="loading" :color="loader.color" :size="loader.size"></pulse-loader>
                        <div v-if="isLogined" >
                            <h2 class="text-center">Logined: {{userName}}</h2>
                            <div class="text-center">
                                <base-button type="dark" v-on:click="logout" class="my-4">Sign out</base-button>
                            </div>
                        </div>
                        <form role="form" v-if="isLogined == false">
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
                                <base-button type="dark" v-on:click="login" class="my-4">Sign in</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3" v-if="!isLogined">
                    <div class="col-6">
                        <a href="#" class="text-dark"><small>Forgot password?</small></a>
                    </div>
                    <div class="col-6 text-right">
                        <router-link to="/register" class="text-dark"><small>Register</small></router-link>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

    export default {
        name: 'login',
        data() {
            return {
                model: {
                    email: 'user@user.com',
                    password: 'user'
                },
                loader: {
                    color: '#cc181e',
                    color1: '#5bc0de',
                    size: '45px',
                },
                isloaderVisible: false,
                isLogined: false,
                userName: ''
            }
        },
        components: {
            PulseLoader
        },
        created: async function() {
            let result = await this.$service.$loginservice.getAuthenticated();
            if(result) {
                this.isLogined = true;
                this.userName = result.user_name;
            }
        },
        methods: {
            login: async function() {
                this.isloaderVisible = true;
                if(this.model.email && this.model.password) {
                    let result = await this.$service.$loginservice.login(this.model.email, this.model.password);
                    if(result) {
                        this.$router.push('Agreement');
                    } else {
                        await this.$swal('Login Fail');
                    }
                }
                this.isloaderVisible = false; 
            },
            logout: async function () {
                this.isloaderVisible = true;
                const result = await this.$service.$loginservice.logout();
                if(result) {
                    await this.$swal('Logout');
                    this.isLogined = false;
                } else {
                    await this.$swal('Logout Fail');
                }
                this.isloaderVisible = false;
               
            }
        }
    }
</script>
<style>
</style>
