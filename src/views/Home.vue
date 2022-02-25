<template>
  <div class="home">
    <div class="container">
      <div class="home-wrapper">
        <Intro />
      </div>
    </div>
  </div>
</template>

<script>
import Intro from "@/components/intro/Intro";

export default {
  name: "Home",

  components: {
    Intro,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;

  &-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
}
</style>
