<template>
  <div class="favs">
    <div class="favs-top">
      <div class="favs-top__title">
        <h5>Избранное</h5>
      </div>
      <div class="favs-top-wrapper">
        <div
          class="favs-top-element"
          v-for="(favorite, idx) in favorites"
          :key="idx"
          @click="open(favorite)"
        >
          <p>
            {{ favorite.name }}
          </p>
          <div class="favs-top-buttons">
            <button
              class="favs-top__button favs-top__button--change"
              @click.stop="edit(favorite)"
            >
              Изменить
            </button>
            <button
              class="favs-top__button favs-top__button--delete"
              @click.stop="remove(favorite.id)"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>

    <Modal
      class="favs-modal"
      v-model="modalStatus"
      title="Сохранить запрос"
      type="edit"
      @update="update"
    >
      <template #body>
        <form class="favs-change">
          <div class="favs-info">
            <label class="favs__title"> Запрос </label>
            <input
              v-model="form.request"
              class="favs__input"
              type="text"
              placeholder="название запроса"
              disabled
            />
          </div>
          <div class="favs-info">
            <label class="favs__title"><span>* </span>Название</label>
            <input
              v-model="form.name"
              class="favs__input"
              type="text"
              placeholder="Укажите название"
              required
            />
          </div>
          <div class="favs-info">
            <span class="favs__title"> Сортировать по </span>
            <select v-model="form.sort" class="favs__select">
              <option
                v-for="option in options"
                :key="option.key"
                :value="option.key"
              >
                {{ option.value }}
              </option>
            </select>
          </div>
          <div class="favs-info">
            <label class="favs__title"> Максимальное количество </label>
            <Range v-model="form.amount" />
          </div>
        </form>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import Range from "@/components/Range";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Favs",
  components: {
    Modal,
    Range,
  },
  data() {
    return {
      modalStatus: false,
      form: {
        id: null,
        request: "",
        name: "",
        sort: "relevance",
        amount: 25,
      },
      options: [
        { key: "date", value: "По дате загрузки" },
        { key: "rating", value: "По рейтингу" },
        { key: "relevance", value: "По релевантности" },
        { key: "viewCount", value: "По числу просмотров" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      favorites: "favsList",
    }),
  },
  methods: {
    ...mapActions({
      updateFav: "updateFavorite",
      getFavList: "getFavorites",
      deleteFav: "deleteFavorite",
      search: "searchItems",
    }),
    ...mapMutations({
      setSearch: "SET_SEARCH_VALUE",
    }),
    edit(input) {
      this.form = input;
      this.modalStatus = true;
    },
    async update() {
      await this.updateFav(this.form);
      await this.getFavList();

      this.modalStatus = false;
    },

    remove(id) {
      this.deleteFav(id).then(() => {
        this.getFavList();
      });
    },

    open({ request, sort, amount }) {
      this.search({
        search: request,
        sort,
        amount,
      }).then(() => {
        this.$router.push({
          path: "/",
        });
        this.setSearch(request);
      });
    },
  },
  beforeMount() {
    this.getFavList();
  },
};
</script>

<style lang="scss" scoped>
.favs {
  &-top {
    display: flex;
    flex-direction: column;

    &__title {
      margin-bottom: 40px;

      h5 {
        font-family: Rob;
        font-weight: 400;
        font-size: 28px;
        color: #000000;
      }
    }

    &-element {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 13px 20px;
      background: #ffffff;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        transform: scale(1.01) translateY(-5px);
        box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.2);
      }

      &:first-child {
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
      }

      &:last-child {
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
      }

      &:not(:last-child) {
        border-bottom: 1px solid #f1f1f1;
      }

      p {
        font-family: Rob;
        font-weight: 500;
        font-size: 16px;
        color: #000000;
      }
    }

    &-buttons {
      display: flex;
      gap: 30px;
    }

    &__button {
      font-family: Rob;
      font-size: 14px;
      background: transparent;
      border: none;
      cursor: pointer;

      &--change {
        color: #1390e5;
      }

      &--delete {
        color: #f00000;
      }
    }
  }
}
</style>
