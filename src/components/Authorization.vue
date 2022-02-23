<template>
  <div class="login">
    <div class="login__logo">
      <img src="@/assets/image/logo.png" alt="" />
    </div>
    <div class="login__title">
      <h3>Вход</h3>
    </div>
    <form @submit.prevent="submit" class="login-area">
      <label for="">
        Логин
        <input v-model="username" type="text" name="" id="" />
      </label>
      <label class="login-area__password" for="">
        Пароль
        <input type="password"  v-model="password" />
        <button class="login-area__button" @click="toggleShow">
          <svg
            v-if="showPassword === false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003L17.94 17.94ZM9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19L9.9 4.24002Z"
              stroke="#D1D1D1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1L23 23"
              stroke="#D1D1D1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-if="showPassword"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </label>
      <div class="login-submit">
        <button class="login-submit__button" type="submit">Войти</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "authorization",
  data() {
    return {
      showPassword: false,
      username: "",
      password: "",
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    ...mapActions({
      login: "login",
    }),
    async submit() {
      try {
        await this.login({
          username: this.username,
          password: this.password,
        }).then(() => {
          this.$router.push('/')
        });
      } catch (error) {
        console.log(error);
      }
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 500px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 85px 60px 85px;
  background: #ffffff;
  border: 1px solid rgba(39, 39, 39, 0.1);
  box-sizing: border-box;
  border-radius: 10px;

  &__logo {
    width: 88px;
    height: 88px;
    margin-bottom: 32px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    margin-bottom: 20px;

    h3 {
      font-family: Rob;
      font-weight: 500;
      font-size: 18px;
    }
  }

  &-area {
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
      display: flex;
      flex-direction: column;
      font-family: Rob;
      position: relative;

      &:not(:nth-child(2)) {
        margin-bottom: 20px;
      }
    }

    input {
      padding: 12px 15px;
      border: 1px solid rgba(23, 23, 25, 0.2);
      box-sizing: border-box;
      border-radius: 10px;
    }

    &__button {
      background: transparent;
      border: none;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translate(-50%, -25%);
    }

    .login-submit {
      display: flex;
      justify-content: center;

      &__button {
        width: 60%;
        color: #ffffff;
        padding: 14px 20px;
        margin-top: 50px;
        background: #1390e5;
        border-radius: 10px;
        border: none;
        cursor: pointer;
      }
    }
  }
}
</style>
