<template lang="pug">
  .works-section__works-item-inner
    .works-section__work-img-block
      img(:src="getAbsoluteImgPath", alt="").works-section__work-img
    .works-section__work-content-block
      h3.works-section__work-content-title.edit-title {{work.title}}
      p.works-section__work-content-text {{work.description}}
      a.works-section__work-content-link {{work.link}}
      p.work-section__tegs {{work.techs}}
      .works-section__work-content-btn-block
        button(
          type="button"
          @click="editWork"
        ).edit-btn.edit-btns
          .works-section__work-edit-text Править
        button(
          type="button"
          @click="deleteCurrentWork()"
        ).del-btn.edit-btns
          .works-section__work-del-text Удалить
</template>

<script>

import {mapActions, mapMutations} from "vuex";
import requests  from "../requests.js";

export default {
  
  props: {
    work: Object
  },
  data() {
    return {
      photoUrl: ""
    }
  },
  methods: {
    ...mapActions('works', ['deleteWork']),
    ...mapMutations("works", ["SET_CURRENT_WORK"]),
    editWork() {
      this.SET_CURRENT_WORK(this.work.id);
      this.$emit("editWork");
    },
    deleteCurrentWork() {
      this.deleteWork(this.work.id)
    }
  },
  computed: {
    getAbsoluteImgPath() {
      var photo = this.work.photo
      const baseUrl = requests.defaults.baseURL;
      return `${baseUrl}/${photo}`;
    }
  }
}
</script>

<style lang="postcss">
.work-section__tegs {
  display: inline;
}
</style>
