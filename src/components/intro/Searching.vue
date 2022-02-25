<template>
  <div :class="['searching', { 'searching--filled': fullfilled }]">
    <div class="searching-title">
      <h3>Поиск видео</h3>
    </div>
    <Search class="searching-form" :value="value" @input="$emit('input', $event)" @openModal="$emit('openModal')" />
  </div>
</template>

<script>
import Search from "@/components/intro/Search";
import { mapState } from "vuex";

export default {
  name: "searching",
  components: {
    Search,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      fullfilled: state => state.fullfilled
    })
  },
};
</script>

<style lang="scss">
.searching {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;

  &--filled {
    justify-content: flex-start;
    align-items: start;
    height: auto;

    .searching-title {
      text-align: start;
      margin-bottom: 12px;
    }

    .searching-form {
      max-width: 650px;
    }
  }

  &-title {
    margin-bottom: 40px;

    h3 {
      font-family: Rob;
      font-size: 36px;
      font-weight: 400;
      color: #000000;
      text-align: center;
    }
  }
}
</style>
