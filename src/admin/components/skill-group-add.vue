<template lang="pug">
  form.about-section__form.about-section__form-add
    .about-section__skill-group.about-section__skill-group-add
      input(
        placeholder="Название новой группы" 
        v-model="createCategory.title"
        :disabled="groupFormIsBlocked? true : false"
        :class="{error:validation.hasError('createCategory.title')}"
      ).about-section__group-name-input.about-section__form-input.about-section__group-name-input-add
      div.error(v-if="validation.hasError('createCategory.title')") {{ validation.firstError('createCategory.title') }}
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
import {Validator} from 'simple-vue-validator';

export default {
  mixins:[require('simple-vue-validator').mixin],
  validators:{
    "createCategory.title": value =>{
      return Validator.value(value).required('Пожалуйста заполните поле!')
    }
  },
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
      isError: "true"
    }
  },
  methods: {
    ...mapActions('categories', ['addCategory']),
    ...mapActions('tooltipe', ['showTooltipe']),
    async addNewCategory() {
      this.groupFormIsBlocked = true;
      try {
        await this.addCategory(this.createCategory);
        this.createCategory.title = "";
        this.editCardModeOFalse();
      } catch(error) {
          this.showTooltipe({
          active: true,
          message: error.message
        })
      } finally {
        this.groupFormIsBlocked = false;
      }
    },
    editCardModeOFalse() {
      eventBus.$emit('falseMode', {
        flag: false
      })
    }
  },
}
</script>
