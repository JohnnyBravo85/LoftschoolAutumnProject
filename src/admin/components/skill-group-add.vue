<template lang="pug">
  form.about-section__form.about-section__form-add
    .about-section__skill-group.about-section__skill-group-add
      input(
        placeholder="Название новой группы" 
        v-model="createCategory.title"
        :disabled="groupFormIsBlocked? true : false"
      ).about-section__group-name-input.about-section__form-input.about-section__group-name-input-add
      .about-section__confirm-del
        button(
          type="button" 
          @click="addNewCategory"
        ).about-section__confirm
        button(
          type="button"
          @click="editCardModeOFalse"
        ).about-section__del
</template>

<script>

import { mapActions } from 'vuex';
import { eventBus } from '../main';

export default {
  
  props: {
    categories: Array,
    category: Object,
    editCardModeOn: Boolean
  },
  data () {
    return {
      createCategory: {
        title: ''
      },
      groupFormIsBlocked: false,
    }
  },
  methods: {
    ...mapActions('categories', ['addCategory']),
    async addNewCategory() {
      this.groupFormIsBlocked = true;
      try {
        await this.addCategory(this.createCategory);
        this.createCategory.title = "";
        this.editCardModeOFalse();
      } catch(error) {
          console.log(error.message)
      } finally {
        this.groupFormIsBlocked = false;
      }
    },
    editCardModeOFalse() {
      eventBus.$emit('falseMode', {
        flag: false
      })
    }
  }
}
</script>
