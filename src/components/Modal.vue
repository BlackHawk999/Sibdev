<template>
  <div class="popup" :class="{ show: value }">
    <div class="popup-overlay" @click="$emit('input', false)"></div>
    <div class="popup-wrapper" :class="size">
      <div class="popup-header">
        <slot name="header-name">
          <h2 v-if="title" class="popup-header__title">
            {{ title }}
          </h2>
        </slot>
      </div>
      <div class="popup-body">
        <slot name="body"></slot>
      </div>
      <div class="popup-footer">
        <slot name="footer">
          <div class="popup-footer-wrapper">
            <button
              class="popup-footer__btn cancel"
              @click="$emit('input', false)"
            >
              Не сохранять
            </button>
            <button
              v-if="type === 'create'"
              class="popup-footer__btn submit"
              @click="$emit('submit', false)"
            >
              Сохранить
            </button>
            <button
              v-if="type === 'edit'"
              class="popup-footer__btn submit"
              @click="$emit('update', false)"
            >
              Изменить
            </button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "md",
    },
    type: {
      type: String,
      default: "create"
    }
  },
};
</script>

<style lang="scss">
.popup {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  opacity: 0;
  transition: all 0.5s;
  padding: 20px;

  &.show {
    opacity: 1;
    z-index: 10000;

    .popup {
      &-overlay {
        opacity: 1;
      }

      &-wrapper {
        transform: translateY(0%);
      }
    }
  }

  &-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba($color: #fafafa, $alpha: 0.75);
  }

  &-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 30px;
    background: #ffffff;
    border-radius: 10px;
    z-index: 1001;
    max-height: 80vh;
    transform: translateY(-70%);
    transition: all 0.5s;

    &.sm {
      width: 440px;
    }

    &.md {
      width: 550px;
    }

    &.lg {
      width: 880px;
      padding: 35px;
    }
  }

  &-header {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 35px 10px 0;
    min-height: 30px;

    &__title {
      font-family: Rob;
      font-weight: 500;
      font-size: 18px;
      color: #000000;
    }
  }

  &-body {
    display: flex;
    overflow: hidden auto;
    min-height: 100%;
    padding: 10px 0;
  }

  &-footer {
    padding: 10px 0 0;

    &-wrapper {
      display: flex;
      gap: 24px;
    }

    &__btn {
      flex: 1;
      padding: 14px 20px;
      font-size: 20px;
      border: 1px solid #1390e5;
      border-radius: 10px;
      cursor: pointer;

      &.cancel {
        background: #fff;
        color: #1390e5;
      }

      &.submit {
        background: #1390e5;
        color: #fff;
      }
    }
  }
}

@media screen and (max-width:575.98px) {
  .popup {
    &-footer {
      &__btn {
        font-size: 13px;
        padding: 12px 15px;
      }
    }
  }
}
</style>
