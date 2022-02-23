<template>
  <div id="app">
    <component :is="layout" />
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";

export default {
  name: "App",
  components: { MainLayout, AuthLayout },

  computed: {
    layout() {
      if (this.$route.meta.layout) {
        return this.$route.meta.layout + "-layout";
      }

      return "main-layout";
    },
  },
};
</script>

<style lang="scss">
#app {
  font-size: 16px;
}
</style>
