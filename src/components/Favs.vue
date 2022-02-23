<template>
  <div class="favs">
    <div class="favs-top">
      <div class="favs-top__title">
        <h5>Избранное</h5>
      </div>
      <div class="favs-top__texts">
        <p v-for="item in 8" :key="item">видео</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.favs {
  &-top {
    display: flex;
    flex-direction: column;

    &__title {
      margin-bottom: 40px;
      h5 {
        font-family: Rob;
        font-weight: 400;
        font-size: 28px;
        color: #000000;
      }
    }

    &__texts {
      background: #ffffff;
      border-radius: 7px;
      p {
        padding: 14px 20px;
        font-family: Rob;
        font-weight: 500;
        font-size: 16px;
        color: #000000;
        &:not(:last-child) {
          border-bottom: 1px solid #f1f1f1;
        }
      }
    }
  }
}
</style>
