<template>
  <div class="intro">
    <Searching :value="search" @openModal="openModal" @input="setSearch" />
    <List v-if="fullfilled" :items="videos" :search="search" />

    <Modal
      class="favs-modal"
      v-model="modalStatus"
      title="Сохранить запрос"
      @submit="addToFavs"
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
            <label class="favs__title"><span>* </span> Название</label>
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
import Searching from "@/components/intro/Searching";
import Modal from "@/components/Modal";
import List from "@/components/List";
import Range from "@/components/Range";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "intro",
  components: {
    Searching,
    List,
    Modal,
    Range
  },
  data() {
    return {
      modalStatus: false,
      form: {
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
    ...mapState({
      fullfilled: (state) => state.fullfilled,
      search: state => state.search
    }),
    ...mapGetters({
      videos: "videoList",
    }),
  },
  methods: {
    ...mapActions({
      createFav: "createFavorite",
    }),
    ...mapMutations({
      setSearch: "SET_SEARCH_VALUE"
    }),
    openModal() {
      this.form = {
        request: this.search,
        name: "",
        sort: "relevance",
        amount: 25,
      };

      this.modalStatus = true;
    },
    addToFavs() {
      this.createFav(this.form).then(() => {
        this.modalStatus = false;
      });
    },
  },
};
</script>

<style></style>
