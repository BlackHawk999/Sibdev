<template>
  <div class="favorities">
    <div class="container">
      <Favs />
    </div>
  </div>
</template>

<script>
import Favs from "@/components/Favs";

export default {
  name: "Favorities",
  components: {
    Favs,
  },
};
</script>

<style lang="scss" scoped>
.favorities {
}
</style>
