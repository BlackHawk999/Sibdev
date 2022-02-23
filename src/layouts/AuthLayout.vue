<template>
  <div class="auth">
    <div class="auth-main-page">
      <Authorization />
    </div>
  </div>
</template>

<script>
import Authorization from "@/components/Authorization";

export default {
  name: "auth-layout",
  components: {
    Authorization,
  },
};
</script>

<style lang="scss" scoped>
.auth {
 &-main-page {
     display: flex;
     align-items: center;
     justify-content: center;
     padding-top: 100px;
 }
}
</style>
