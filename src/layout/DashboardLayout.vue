<template>
    <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
        <side-bar :background-color="sidebarBackground" short-title="Logos" title="Logos">
            <template slot="links">
                <sidebar-item
                    :link="{
            name: 'Categories',
            icon: 'ni ni-tv-2 text-primary',
            path: '/'
          }"
                />
                <sidebar-item
                    v-for="category in categories"
                    :key="category.name"
                    :link="{id: category.id, type: 'category', name: category.name, icon: 'ni ni-tag text-blue', path: `/dashboard?cid=` + category.id}"
                />
            </template>
        </side-bar>
        <div class="main-content" :data="sidebarBackground">
            <dashboard-navbar></dashboard-navbar>

            <div @click="toggleSidebar">
                <fade-transition :duration="200" origin="center top" mode="out-in">
                    <!-- your content here -->
                    <router-view></router-view>
                </fade-transition>
                <content-footer v-if="!$route.meta.hideFooter"></content-footer>
            </div>
        </div>
    </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import { FadeTransition } from "vue2-transitions";
export default {
    components: {
        DashboardNavbar,
        ContentFooter,
        FadeTransition
    },
    data() {
        return {
            sidebarBackground: "vue",
            categories: []
        };
    },
    created: async function() {
        let result = await this.$service.$contentsservice.getCategories();
        if (result) {
            this.categories = result;
        }
    },
    methods: {
        loadCatagory(id) {
            console.log(`click load category id ${id}`);
        },
        toggleSidebar() {
            if (this.$sidebar.showSidebar) {
                this.$sidebar.displaySidebar(false);
            }
        }
    }
};
</script>
<style lang="scss">
</style>
