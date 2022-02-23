<template>
  <div class="home">
    <div class="container">
      <div class="home-wrapper">
        <!-- <Searching /> -->
        <List />
      </div>
    </div>
  </div>
</template>

<script>
// import Searching from "@/components/Searching";
import List from "@/components/List";

export default {
  name: "Home",

  components: {
    // Searching,
    List,
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
