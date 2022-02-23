<template>
  <div :class="['card-view', { list: type === 'LIST' }]">
    <div class="card-img-wrapper">
      <img
        v-if="false"
        class="card__img"
        src="https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662__340.jpg"
        alt=""
      />
      <div v-else class="no-img">
        <img src="@/assets/image/video.svg" alt="" />
      </div>
    </div>
    <div class="card-info">
      <h5 class="card-info__title">
        Как кормить кошку натуралкой | Перечень полезных для кош...
      </h5>
      <p class="card-info__text">
        Ветеринария и Кормление соб... 786 тыс. просмотров
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
  },
};
</script>

<style lang="scss" scoped>
.card-view {
  display: flex;
  flex-direction: column;

  &.list {
    flex-direction: row;

    .card-img-wrapper {
      min-width: 160px;
      min-height: 80px;
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
</style>
