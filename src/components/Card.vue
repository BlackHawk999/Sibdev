<template>
  <div :class="['card-view', { list: type === 'LIST' }]" @click="openVideo">
    <div class="card-img-wrapper">
      <img
        v-if="item.thumbnails.high"
        class="card__img"
        :src="item.thumbnails.high.url"
        alt=""
      />
      <div v-else class="no-img">
        <img src="@/assets/image/video.svg" alt="" />
      </div>
    </div>
    <div class="card-info">
      <h5 class="card-info__title">
        {{ item.title }}
      </h5>
      <p class="card-info__text">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    type: {
      type: String,
      default: "DASHBOARD", // LIST | DASHBOARD
    },
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openVideo() {
      window.open(`https://www.youtube.com/watch?v=${this.item.id}`, '_blank');
    }
  }
};
</script>

<style lang="scss" scoped>
.card-view {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &.list {
    flex-direction: row;

    .card-img-wrapper {
      width: 245px;
      height: 90px;
      margin-right: 20px;
    }

    .card-info {
      align-items: start;
    }
  }

  .card {
    &-img-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 130px;
      max-height: 130px;
      margin-bottom: 8px;
      border: 1px solid #7ec3f1;
      border-radius: 5px;
      overflow: hidden;

      .no-data {
        width: 40px;
        height: 40px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-info {
      display: flex;
      flex-direction: column;

      &__title {
        font-family: Rob;
        font-weight: 500;
        font-size: 14px;
        color: #272727;
        margin-bottom: 8px;
      }

      &__text {
        font-family: Rob;
        font-size: 14px;
        color: rgba(23, 23, 25, 0.3);
      }
    }
  }
}

@media screen and (max-width: 575.98px) {
  .card-view {
    &.list {
      .card-img-wrapper {
        height: 70px;
        margin-right: 15px;
      }

      .card-info__title {
        font-size: 10px;
      }

      .card-info__text {
        font-size: 10px;
      }
    }
  }
}
</style>
