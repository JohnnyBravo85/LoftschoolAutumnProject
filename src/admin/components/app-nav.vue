<template lang="pug">
  nav.nav-section
    .container
      nav.nav
        ul.nav__list
          li.nav__item
            router-link(
              tag="button"
              to="/"
              ).nav__button Обо мне
          li.nav__item
            router-link(
              tag="button"
              to="/works"
              ).nav__button Работы
          li.nav__item
            router-link(
              tag="button"
              to="/reviews"
              ).nav__button Отзывы
</template>

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