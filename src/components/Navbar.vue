<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-wrapper">
        <div class="navbar-items">
          <div class="navbar-items__img">
            <img src="@/assets/image/logo.png" alt="" />
          </div>
          <router-link
            class="navbar-items__text"
            exact-active-class="active"
            to="/"
          >
            <span>Поиск</span>
          </router-link>
          <router-link
            class="navbar-items__text"
            active-class="active"
            to="/favorities"
          >
            <span>Избранное</span>
          </router-link>
        </div>
        <button class="navbar__exit" @click="signOut">
          <span>Выйти</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "navbar",

  methods: {
    ...mapActions({
      logout: "logout",
    }),
    signOut() {
      this.logout();
      this.$router.push("/auth");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #ffffff;
  z-index: 100;

  &-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-items {
    display: flex;
    align-items: center;
    gap: 20px;

    &__img {
      width: 48px;
      height: 48px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &__text {
      font-family: Rob;
      font-size: 18px;
      color: rgba(39, 39, 39, 0.3);
      padding: 26px 0;
      text-decoration: none;

      &.active {
        color: #1390e5;
        border-bottom: 2px solid #1390e5;
      }
    }
  }

  &__exit {
    font-family: Rob;
    font-size: 18px;
    color: rgba(39, 39, 39, 0.3);
    background: transparent;
    padding: 26px 0;
    border: none;
    text-decoration: none;

    &.active {
      color: #1390e5;
      border-bottom: 2px solid #1390e5;
    }
  }
}

@media screen and (max-width: 575.98px) {
  .navbar {
    &-items {
      &__text {
        font-size: 14px;
      }
    }
    &__exit {
      font-size: 14px;
    }
  }
}
</style>
