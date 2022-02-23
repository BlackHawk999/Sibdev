<template>
  <div class="cards">
    <div class="cards-change">
      <p class="cards__title">Видео по запросу «чем кормить кота»</p>
      <div class="cards-button-wrapper">
        <button
          :class="['cards__button', { active: type === 'DASHBOARD' }]"
          @click="changeView('DASHBOARD')"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
              <path
                d="M10 5H5V10H10V5Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 5H14V10H19V5Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 14H14V19H19V14Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 14H5V19H10V14Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
          </svg>
        </button>
        <button
          :class="['cards__button', { active: type === 'LIST' }]"
          @click="changeView('LIST')"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
              <path
                d="M8 6H21"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 12H21"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 18H21"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 6H3.01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 12H3.01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 18H3.01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
          </svg>
        </button>
      </div>
    </div>
    <div :class="['cards-wrapper', { list: type === 'LIST' }]">
      <Card v-for="item in 12" :key="item" :type="type" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "list",
  components: {
    Card,
  },

  data() {
    return {
      type: "LIST", // LIST | DASHBOARD
    };
  },

  methods: {
    changeView(dashboard) {
      this.type = dashboard;
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-direction: column;

  &-change {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &-button-wrapper {
    display: flex;
    gap: 20px;
  }

  &__button {
    background: transparent;
    border: none;
    cursor: pointer;

    svg path {
      stroke: #bbbbbb;
    }

    &.active {
      svg path {
        stroke: #000;
      }
    }
  }

  &-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    &.list {
      grid-template-columns: 1fr;
    }
  }
}
</style>
