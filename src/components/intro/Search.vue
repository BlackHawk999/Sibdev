<template>
  <div class="search">
    <div class="search-input-wrapper">
      <input
        :value="value"
        class="search__input"
        type="text"
        placeholder="Что хотите посмотреть?"
        @keydown.enter="find(value)"
        @input="$emit('input', $event.target.value)"
      />
      <button
        v-if="value"
        :class="[{ add: addfavs }, 'search__fav']"
        @click="added"
        @mouseenter="options = true"
        @mouseleave="options = false"
      >
        <div class="search-action">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8401 3.60999C20.3294 3.099 19.7229 2.69364 19.0555 2.41708C18.388 2.14052 17.6726 1.99817 16.9501 1.99817C16.2276 1.99817 15.5122 2.14052 14.8448 2.41708C14.1773 2.69364 13.5709 3.099 13.0601 3.60999L12.0001 4.66999L10.9401 3.60999C9.90843 2.5783 8.50915 1.9987 7.05012 1.9987C5.59109 1.9987 4.19181 2.5783 3.16012 3.60999C2.12843 4.64169 1.54883 6.04096 1.54883 7.49999C1.54883 8.95903 2.12843 10.3583 3.16012 11.39L4.22012 12.45L12.0001 20.23L19.7801 12.45L20.8401 11.39C21.3511 10.8792 21.7565 10.2728 22.033 9.60535C22.3096 8.93789 22.4519 8.22248 22.4519 7.49999C22.4519 6.77751 22.3096 6.0621 22.033 5.39464C21.7565 4.72718 21.3511 4.12075 20.8401 3.60999V3.60999Z"
              stroke="#1390E5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div v-if="options && addfavs" class="search-add" @click.stop>
            <p>
              Поиск сохранён в разделе <br />
              «Избранное»
            </p>
            <router-link
              class="search__link"
              exact-active-class="active"
              to="/favorities"
            >
              Перейти в избранное
            </router-link>
          </div>
        </div>
      </button>
    </div>
    <button class="search__button" :disabled="!value" @click="find(value)">
      Найти
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "search",
  data() {
    return {
      addfavs: false,
      options: false,
    };
  },
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      search: "searchItems",
    }),
    added() {
      this.$emit("openModal");
    },
    find(content) {
      if (!content) return;

      this.search({
        search: content,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;

  &__input {
    width: 100%;
    padding: 14px 15px;
    border: 1px solid #e1e1e1;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    outline: none;

    &:focus {
      border: 1px solid #1390e5;
      background: #eaf3fa;
    }
  }

  &__button {
    color: #ffffff;
    background: #1390e5;
    padding: 14px 40px;
    border: 1px solid #1390e5;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  &-input-wrapper {
    position: relative;
    flex: 1;
  }

  &__fav {
    position: absolute;
    transform: translate(-40px, 10px);
    background: transparent;
    border: none;
    cursor: pointer;

    svg {
      fill: #ffffff;
    }

    &.add {
      svg {
        fill: #c5e4f9;
      }
    }
  }

  &-action {
    position: relative;
  }

  &-add {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 200px;
    padding: 15px;
    background: #ffffff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    transform: translateX(-50%);
    flex-wrap: wrap;

    p {
      font-family: Rob;
      font-size: 16px;
      text-align: start;
      color: #272727;
      margin-bottom: 15px;
      opacity: 0.5;
    }
  }

  &__link {
    text-decoration: none;
    color: #1390e5;
  }
}

@media screen and (max-width: 767.98px) {
}

@media screen and (max-width: 575.98px) {
  .search {
    &__button {
      padding: 14px 25px;
    }
    &-add {
      p {
        font-size: 13px;
      }
    }
  }
}
</style>
