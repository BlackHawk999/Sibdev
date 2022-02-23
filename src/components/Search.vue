<template>
  <div class="search">
    <div class="search-block">
      <input
        class="search-block__input"
        type="search"
        placeholder="Что хотите посмотреть?"
      />
      <button class="search-block__button">Найти</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  min-width: 650px;
  &-block {
    width: 100%;
    &__input {
      width: 80%;
      padding: 14px 15px;
      border: 1px solid #e1e1e1;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    &__button {
      width: 20%;
      color: #ffffff;
      background: #1390e5;
      padding: 14px 15px;
      border: 1px solid #1390e5;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      cursor: pointer;
    }
  }
}
</style>
