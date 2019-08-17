<template>
    <div class="main-content bg-default">
        <!-- Navbar -->
        <base-nav class="navbar-top navbar-horizontal navbar-dark"
                  containerClasses="px-4 container"
                  expand>
            <router-link slot="brand" class="navbar-brand" to="/">
            </router-link>

            <template v-slot="{closeMenu}">
                <!-- Collapse header -->
                <div class="navbar-collapse-header d-md-none">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <router-link to="/">
                            </router-link>
                        </div>
                        <div class="col-6 collapse-close">
                            <button type="button"
                                    @click="closeMenu"
                                    class="navbar-toggler"
                                    aria-label="Toggle sidenav">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Navbar items -->
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link nav-link-icon" to="/dashboard">
                            <i class="ni ni-planet"></i>
                            <span class="nav-link-inner--text">Dashboard</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-link-icon" to="/register">
                            <i class="ni ni-circle-08"></i>
                            <span class="nav-link-inner--text">Register</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-link-icon" to="/login">
                            <i class="ni ni-key-25"></i>
                            <span class="nav-link-inner--text">Login</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-link-icon" to="/Admin">
                            <i class="ni ni-key-25"></i>
                            <span class="nav-link-inner--text">Admin Login</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-link-icon" to="/profile">
                            <i class="ni ni-single-02"></i>
                            <span class="nav-link-inner--text">Profile</span>
                        </router-link>
                    </li>
                </ul>
            </template>
        </base-nav>
        <!-- Header -->
        <div class="header bg-gradient-light py-7 py-lg-8">
            <div class="container">
                <div class="header-body text-center mb-7">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-6">
                            <h1 class="text-white">Management</h1>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Page content -->
        <div class="container mt--8 pb-5">
            <slide-y-up-transition mode="out-in" origin="center top">
                <router-view></router-view>
            </slide-y-up-transition>
        </div>
        <footer class="py-5">
            <div class="container">
                <div class="row align-items-center justify-content-xl-between">
                    <div class="col-xl-6">
                        <div class="copyright text-center text-xl-left text-muted">
                            &copy; {{year}} <a href="https://www.google.com" class="font-weight-bold ml-1"
                                               target="_blank">Admin Corporation</a>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <ul class="nav nav-footer justify-content-center justify-content-xl-end">
                            <li class="nav-item">
                                <a href="http://www.gov.kr/portal/main" class="nav-link" target="_blank">About
                                    Us</a>
                            </li>
                            <li class="nav-item">
                                <a href="http://www.gov.kr/portal/main" class="nav-link" target="_blank">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a href="https://opensource.org/licenses/MIT"
                                   class="nav-link" target="_blank">MIT License</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
  import { SlideYUpTransition } from 'vue2-transitions'

  export default {
    name: 'auth-layout',
    components: {
      SlideYUpTransition
    },
    data() {
      return {
        year: new Date().getFullYear(),
        showMenu: false
      }
    }
  }
</script>
<style>
</style>
