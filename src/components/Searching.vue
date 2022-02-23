<template>
  <div class="searching">
    <div class="searching-block">
      <div class="searching-block__title">
        <h3>Поиск видео</h3>
      </div>
      <Search />
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";

export default {
  name: "searching",
  components: {
    Search,
  },
};
</script>

<style lang="scss" scoped>
.searching{
  &-block{
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title{
      margin-bottom: 40px;
      h3{
        font-family: Rob;
        font-size: 36px;
        font-weight: 400;
        color: #000000;
        text-align: center;
      }
    }
  }
}
</style>
