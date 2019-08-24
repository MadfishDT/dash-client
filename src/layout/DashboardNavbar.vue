<template>
    <base-nav class="navbar-top navbar-dark"
              id="navbar-main"
              :show-toggle-button="false"
              expand>
        <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div class="form-group mb-0">
             
            </div>
        </form>
    </base-nav>
</template>
<script>
  export default {
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchQuery: '',
        userName: '',
        profileImage: 'img/theme/noone.png'
      };
    },
    created: function () {
    
      
    },
    methods: {
        setUserInfo(user) {
            this.userName = user.user_name;
            console.log(`user.photo url is: ${user.photo}`);
            let imageUrl = this.$service.$loginservice.getImageUrl(user.photo);
            console.log(`image url is: ${imageUrl}`);
            if(imageUrl) {
                this.profileImage = imageUrl;
            }
        },
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      }
    }
  };
</script>
