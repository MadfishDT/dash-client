<template>
  <footer class="footer px-4">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
      </div>
      <div class="col-lg-6">
        <ul class="nav nav-footer justify-content-center justify-content-lg-end">
          <li class="nav-item">
            <a href="http://www.gov.kr/portal/main" class="nav-link" target="_blank">About Us</a>
          </li>
          <li class="nav-item">
            <a href="http://www.gov.kr/portal/main" class="nav-link" target="_blank">Blog</a>
          </li>
          <li class="nav-item">
            <a href="https://opensource.org/licenses/MIT" class="nav-link" target="_blank">License</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
