<template lang="pug">
  nav.nav-section
    .container
      nav.nav
        ul.nav__list
          li.nav__item(v-for="tab in tabs")
            router-link(
              tag="button"
              :to="tab.href"
              ).nav__button {{tab.title}}
</template>

<script>

import VueRouter from "vue-router";

export default {
  data() {
    return {
      // isUserLogged: this.$store.getters["user/userIsLogged"],
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Отзывы", href: "/reviews" },
        { title: "Работы", href: "/works" }
      ]
    };
  },
};
</script>

<style lang="pcss">
@import url("../../../node_modules/normalize.css/normalize.css");
@import url("../../styles/mixins.pcss");
@import url("../../styles/layout/base.pcss");

.nav {
  color: #414c63;
}

.nav__list {
  display: flex;
  @include phones {
    justify-content: center;
  }
}

.nav__item {
  padding: 2.54%;
  border-bottom: solid 3px transparent;
  &:hover{
    font-weight: 600;
    color: #383bcf;
    border-bottom: solid 3px #383bcf;
  }
}

.nav__button {
  color: inherit;
  font-weight: inherit;
}

</style>