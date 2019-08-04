<template lang="pug">
  .works-section__works-item-inner
    .works-section__work-img-block
      img(:src="getAbsoluteImgPath", alt="").works-section__work-img
      ul.works-section__tags-list
            li.works-section__tags-item(v-for="tag in tagsArray")
              p.works-section__tags-text {{tag}}
              button(type="button").works-section__tags-btn
    .works-section__work-content-block
      h3.works-section__work-content-title.edit-title {{work.title}}
      p.works-section__work-content-text {{work.description}}
      a.works-section__work-content-link {{work.link}}
      //- p.work-section__tegs {{work.techs}}
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
    ...mapActions('tooltipe', ['showTooltipe']),
    editWork() {
      try{
        this.SET_CURRENT_WORK(this.work.id);
        this.$emit("editWork");
      } catch(error) {
        this.showTooltipe({
          active: true,
          message: error.message
        })
      }
    },
    deleteCurrentWork() {
      try {
        this.deleteWork(this.work.id)
      } catch(error) {
        this.showTooltipe({
          active: true,
          message: error.message
        })
      }
    }
  },
  computed: {
    getAbsoluteImgPath() {
      var photo = this.work.photo
      const baseUrl = requests.defaults.baseURL;
      return `${baseUrl}/${photo}`;
    },
    tagsArray () {
      return this.work.techs.split(',');
    }
  }
}
</script>

<style lang="postcss">
.work-section__tegs {
  display: inline;
}
</style>
