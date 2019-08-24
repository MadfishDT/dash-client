<template>
  <div class="main-content bg-white">
    <FadeTransition :duration="200" origin="center" mode="out-in">
            <router-view></router-view>
     </FadeTransition>
  </div>
</template>
<script>
import { FadeTransition } from 'vue2-transitions';
export default {
  components: {
    FadeTransition
  }
};
</script>
<style></style>
