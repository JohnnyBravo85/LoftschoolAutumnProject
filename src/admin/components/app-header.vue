<template lang="pug">
  header.header-admin-section
    .container
      .header-admin
        .header-admin__avatar
          img(src="../../images/content/avatar.jpg").header-admin__img
        .header-admin__owner-panel
          .header-admin__full-name Дмитрий Семёнов
          .header-admin__title Панель администрирования
          router-link(
              tag="button"
              to="/login"
              ).header-admin__logout Выйти
</template>

<style lang="pcss">
@import url("../../../node_modules/normalize.css/normalize.css");
@import url("../../styles/mixins.pcss");
@import url("../../styles/layout/base.pcss");

.header-admin-section {
  padding: 17.5px 0;
  color: #fff;
  background-image: linear-gradient(to right, #3e3e59, #454573);
}

.header-admin {
  display: flex;
  align-items: center;
}

.header-admin__avatar {
  margin-right: 1.75%;
  width: 44px;
  height: 44px;
}

.header-admin__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.header-admin__owner-panel {
  width: 100%;
  display: flex;
  align-items: center;

  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}

.header-admin__full-name {
  margin-right: 28px;
  font-size: 18px;
  font-weight: 600;
}

.header-admin__title {
  flex: 1;
  font-size: 14px;
  opacity: 0.5;

  @include phones {
    display: none;
  }
}

.header-admin__logout {
  color: inherit;
  opacity: 0.7;
}

</style>
