<template>
  <div class="main-layout">
    <div class="main-navbar">
      <Navbar />
    </div>
    <div class="main-page">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "main-layout",

  components: {
    Navbar,
  },
  beforeCreate() {
    if(!localStorage.getItem('token')) {
      this.$router.push('/auth')
    }
  }
};
</script>

<style lang="scss" scoped>
.main-layout {
  .main {
    &-page {
      padding-top: 100px;
      min-height: 100vh;
    }
  }
}
</style>
