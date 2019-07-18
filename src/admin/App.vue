<template lang="pug">
  .maincontent
    section.about
      header.header-admin-section
        .container
          .header-admin
            .header-admin__avatar
              img(src="../images/content/avatar.jpg").header-admin__img
            .header-admin__owner-panel
              .header-admin__full-name Дмитрий Семёнов
              .header-admin__title Панель администрирования
              .header-admin__logout Выйти
      nav.nav-section
        .container
          nav.nav
            ul.nav__list
              li.nav__item Обо мне
              li.nav__item Работы
              li.nav__item Отзывы
      section.about-section.page-section
        .container
          .about-section__main-block
            .about-section__title-and-add-form
              h2.about-section__title.admin-title Блок «Обо мне»
              .about-section__add-forms
                button(type="button").about-section__add-form-btn +
                p.about-section__add-form Добавить группу
            .about-section__forms
              form.about-section__form.about-section__form-add
                .about-section__skill-group.about-section__skill-group-add
                  input(value="Название новой группы").about-section__group-name-input.about-section__form-input.about-section__group-name-input-add
                  .about-section__confirm-del
                    button(type="button").about-section__confirm
                    button(type="button").about-section__del
                .about-section__add-skill
                  input(value="Новый навык").about-section__skill-name-input-add.about-section__form-input-add
                  input(value="100").about-section__skill-value-input-add.about-section__form-input-add
                  input(value="%" readonly="readonly").about-section__skill-persent-input-add.about-section__form-input-add
                  button(type="button").about-section__add-skill-btn +
              form.about-section__form
                .about-section__skill-group
                  input(value="Workflow").about-section__group-name-input.about-section__form-input
                  .about-section__confirm-del
                    button(type="button").about-section__confirm
                    button(type="button").about-section__del
                .about-section__skills
                  ul.about-section__skills-list
                    li.about-section__skills-item
                      input(value="GIT").about-section__skill-name-input.about-section__form-input
                      input(value="80").about-section__skill-value-input.about-section__form-input
                      input(value="%" readonly="readonly").about-section__skill-persent-input.about-section__form-input
                      .about-section__write-erase
                        button(type="button").about-section__write
                        button(type="button").about-section__erase
                    li.about-section__skills-item
                      input(value="Terminal").about-section__skill-name-input.about-section__form-input
                      input(value="30").about-section__skill-value-input.about-section__form-input
                      input(value="%" readonly="readonly").about-section__skill-persent-input.about-section__form-input
                      .about-section__write-erase
                        button(type="button").about-section__write
                        button(type="button").about-section__erase
                    li.about-section__skills-item
                      input(value="Gulp").about-section__skill-name-input.about-section__form-input
                      input(value="80").about-section__skill-value-input.about-section__form-input
                      input(value="%" readonly="readonly").about-section__skill-persent-input.about-section__form-input
                      .about-section__write-erase
                        button(type="button").about-section__write
                        button(type="button").about-section__erase
                    li.about-section__skills-item
                      input(value="Webpack").about-section__skill-name-input.about-section__form-input
                      input(value="25").about-section__skill-value-input.about-section__form-input
                      input(value="%" readonly="readonly").about-section__skill-persent-input.about-section__form-input
                      .about-section__write-erase
                        button(type="button").about-section__write
                        button(type="button").about-section__erase
                .about-section__add-skill
                  input(value="Новый навык").about-section__skill-name-input-add.about-section__form-input-add
                  input(value="100").about-section__skill-value-input-add.about-section__form-input-add
                  input(value="%" readonly="readonly").about-section__skill-persent-input-add.about-section__form-input-add
                  button(type="button").about-section__add-skill-btn +
              form.about-section__form
                .about-section__skill-group
                  input(value="Frontend").about-section__group-name-input.about-section__form-input
                  .about-section__confirm-del
                    button(type="button").about-section__confirm
                    button(type="button").about-section__del
                .about-section__skills
                  ul.about-section__skills-list
                    li.about-section__skills-item
                      input(value="HTML5").about-section__skill-name-input.about-section__form-input
                      input(value="90").about-section__skill-value-input.about-section__form-input
                      input(value="%" readonly="readonly").about-section__skill-persent-input.about-section__form-input
                      .about-section__write-erase
                        button(type="button").about-section__write
                        button(type="button").about-section__erase
                    li.about-section__skills-item
                      input(value="CSS3").about-section__skill-name-input.about-section__form-input
                      input(value="70").about-section__skill-value-input.about-section__form-input
                      input(value="%" readonly="readonly").about-section__skill-persent-input.about-section__form-input
                      .about-section__write-erase
                        button(type="button").about-section__write
                        button(type="button").about-section__erase
                    li.about-section__skills-item
                      input(value="JavaScript").about-section__skill-name-input.about-section__form-input
                      input(value="30").about-section__skill-value-input.about-section__form-input
                      input(value="%" readonly="readonly").about-section__skill-persent-input.about-section__form-input
                      .about-section__write-erase
                        button(type="button").about-section__write
                        button(type="button").about-section__erase
                    li.about-section__skills-item
                      input(value="Jquery и Vue.js").about-section__skill-name-input.about-section__form-input
                      input(value="15").about-section__skill-value-input.about-section__form-input
                      input(value="%" readonly="readonly").about-section__skill-persent-input.about-section__form-input
                      .about-section__write-erase
                        button(type="button").about-section__write
                        button(type="button").about-section__erase
                .about-section__add-skill
                  input(value="Новый навык").about-section__skill-name-input-add.about-section__form-input-add
                  input(value="100").about-section__skill-value-input-add.about-section__form-input-add
                  input(value="%" readonly="readonly").about-section__skill-persent-input-add.about-section__form-input-add
                  button(type="button").about-section__add-skill-btn +
      section.works-section.page-section
        .container
          .works-section__main-block
            h2.works-section__title.admin-title Блок «Работы»
            .works-section__edit-form
              h3.works-section__form-title.edit-title Редактирование работы
              .works-section__edit-work
                .works-section__load
                  p.works-section__load-text Перетащите или загрузите для загрузки изображения
                  button(type="submit").works-section__load-btn ЗАГРУЗИТЬ
                p.work-section__change-preview Изменить превью
                .works-section__edit-work-data
                  form.works-section__edit-work-form
                    label.works-section__name-label.works-section__label
                      h3.works-section__name-title.works-section__work-title Название
                      input(value="Дизайн сайта для авто салона Porsche").works-section__name-input.works-section__input
                    label.works-section__link-label.works-section__label
                      h3.works-section__link-title.works-section__work-title Ссылка
                      input(value="https://www.yandex.ru").works-section__link-input.works-section__input
                    label.works-section__description-label.works-section__label
                      h3.works-section__description-title.works-section__work-title Описание
                      textarea(placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей").works-section__description-textarea
                    label.works-section__tag-label.works-section__label
                      h3.works-section__tag-title.works-section__work-title Добавление тэга
                      input(value="Jquery, Vue.js, HTML5").works-section__tag-input.works-section__input
                    ul.works-section__tags-list
                      li.works-section__tags-item
                        p.works-section__tags-text HTML
                        button(type="button").works-section__tags-btn
                      li.works-section__tags-item
                        p.works-section__tags-text CSS
                        button(type="button").works-section__tags-btn
                      li.works-section__tags-item
                        p.works-section__tags-text Javascript
                        button(type="button").works-section__tags-btn
              .works-section__btn-block
                button(type="submit").works-section__cansel-btn Отмена
                button(type="submit").works-section__confirm-btn Сохранить
          ul.works-section__works-list
            li.works-section__works-item.works-section__works-item--add
              button(type="button").works-section__add-work-btn +
              p.works-section__add-work-text Добавить работу
            li.works-section__works-item
              .works-section__work-img-block
                img(src="./../images/content/1.jpg").works-section__work-img
              .works-section__work-content-block
                h3.works-section__work-content-title.edit-title Сайт школы образования
                p.works-section__work-content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a.works-section__work-content-link http://loftschool.ru
                .works-section__work-content-btn-block
                  button(type="button").edit-btn.edit-btns
                    .works-section__work-edit-text Править
                  button(type="button").del-btn.edit-btns
                    .works-section__work-del-text Удалить
            li.works-section__works-item
              .works-section__work-img-block
                img(src="./../images/content/2.jpg").works-section__work-img
              .works-section__work-content-block
                h3.works-section__work-content-title.edit-title Сайт школы образования
                p.works-section__work-content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a.works-section__work-content-link http://loftschool.ru
                .works-section__work-content-btn-block
                  button(type="button").edit-btn.edit-btns
                    .works-section__work-edit-text Править
                  button(type="button").del-btn.edit-btns
                    .works-section__work-del-text Удалить
            li.works-section__works-item
              .works-section__work-img-block
                img(src="./../images/content/3.jpg").works-section__work-img
              .works-section__work-content-block
                h3.works-section__work-content-title.edit-title Сайт школы образования
                p.works-section__work-content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a.works-section__work-content-link http://loftschool.ru
                .works-section__work-content-btn-block
                  button(type="button").edit-btn.edit-btns
                    .works-section__work-edit-text Править
                  button(type="button").del-btn.edit-btns
                    .works-section__work-del-text Удалить
            li.works-section__works-item
              .works-section__work-img-block
                img(src="./../images/content/4.jpg").works-section__work-img
              .works-section__work-content-block
                h3.works-section__work-content-title.edit-title Сайт школы образования
                p.works-section__work-content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a.works-section__work-content-link http://loftschool.ru
                .works-section__work-content-btn-block
                  button(type="button").edit-btn.edit-btns
                    .works-section__work-edit-text Править
                  button(type="button").del-btn.edit-btns
                    .works-section__work-del-text Удалить
      section.reviews-section.page-section
        .container
          .reviews-section__main-block
            h2.reviews-section__title.admin-title Блок «Отзывы»
            .reviews-section__edit-form
              h3.reviews-section__form-title.edit-title Новый отзыв
              .reviews-section__add-block
                .reviews-section__add-photo-block
                  button(type="button").reviews-section__add-photo
                  p.reviews-section__photo-text Добавить фото
                form.reviews-section__add-form-data-block
                  .reviews-section__add-data-row
                    label.reviews-section__label-name.reviews-section__label
                      h3.reviews-section__title-name.reviews-section__label-title Имя автора
                      input(value="Ковальчук Дмитрий").reviews-section__input-name.reviews-section__input
                    label.reviews-section__label-dignity.reviews-section__label
                      h3.reviews-section__title-dignity.reviews-section__label-title Титул автора
                      input(value="Основатель LoftSchool").reviews-section__input-dignity.reviews-section__input
                  .reviews-section__add-data-textarea
                    h3.reviews-section__title-review.reviews-section__label-title Отзыв
                    textarea(placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!").reviews-section__textarea-review
              .reviews-section__btn-block
                button(type="submit").reviews-section__cansel-btn Отмена
                button(type="submit").reviews-section__confirm-btn Сохранить
          .reviews-section__reviews-list
            li.reviews-section__review-item.reviews-section__review-item--add
              button(type="button").reviews-section__add-review-btn +
              p.reviews-section__add-review-text Добавить работу
            li.reviews-section__review-item
              .reviews-section__review-photo-block
                .reviews-section__photo
                  img(src="./../images/content/vova.jpg", alt="").reviews-section__photo-img
                .reviews-section__review-text-block
                  .reviews-section__review-hero-title.edit-title Владимир Сабанцев
                  .reviews-section__review-hero-stuff Преподаватель
              p.reviews-section__review-comment Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
              .reviews-section__review-content-btn-block
                  button(type="button").edit-btn.edit-btns
                    .reviews-section__work-edit-text Править
                  button(type="button").del-btn.edit-btns
                    .reviews-section__work-del-text Удалить
            li.reviews-section__review-item
              .reviews-section__review-photo-block
                .reviews-section__photo
                  img(src="./../images/content/dima.jpg", alt="").reviews-section__photo-img
                .reviews-section__review-text-block
                  .reviews-section__review-hero-title.edit-title Ковальчук Дмитрий
                  .reviews-section__review-hero-stuff Основатель Loftschool
              p.reviews-section__review-comment Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .reviews-section__review-content-btn-block
                  button(type="button").edit-btn.edit-btns
                    .reviews-section__work-edit-text Править
                  button(type="button").del-btn.edit-btns
                    .reviews-section__work-del-text Удалить
            li.reviews-section__review-item
              .reviews-section__review-photo-block
                .reviews-section__photo
                  img(src="./../images/content/vova.jpg", alt="").reviews-section__photo-img
                .reviews-section__review-text-block
                  .reviews-section__review-hero-title.edit-title Владимир Сабанцев
                  .reviews-section__review-hero-stuff Преподаватель
              p.reviews-section__review-comment Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
              .reviews-section__review-content-btn-block
                  button(type="button").edit-btn.edit-btns
                    .reviews-section__work-edit-text Править
                  button(type="button").del-btn.edit-btns
                    .reviews-section__work-del-text Удалить
            li.reviews-section__review-item
              .reviews-section__review-photo-block
                .reviews-section__photo
                  img(src="./../images/content/dima.jpg", alt="").reviews-section__photo-img
                .reviews-section__review-text-block
                  .reviews-section__review-hero-title.edit-title Ковальчук Дмитрий
                  .reviews-section__review-hero-stuff Основатель Loftschool
              p.reviews-section__review-comment Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .reviews-section__review-content-btn-block
                  button(type="button").edit-btn.edit-btns
                    .reviews-section__work-edit-text Править
                  button(type="button").del-btn.edit-btns
                    .reviews-section__work-del-text Удалить
                  
                  

</template>

<style lang="pcss">
@import url("../../node_modules/normalize.css/normalize.css");
@import url('../styles/mixins.pcss');
@import url('../styles/layout/base.pcss');

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
  opacity: 0.7;
}

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
  &:hover{
    font-weight: 600;
    color: #383bcf;
    border-bottom: solid 3px #383bcf;
  }
}

.page-section {
  padding: 5.25% 0;
  color: #414c63;
  background-image: linear-gradient(to top, rgba(255,255,255,0.7), rgba(255,255,255,0.85)), url('../images/content/train-bridge.jpg');
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
}

.about-section__main-block {
  color: #414c63;
}

.about-section__title-and-add-form {
  margin-bottom: 5.27%;
  display: flex;
  align-items: center;

  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}

.admin-title {
  font-size: 21px;
  font-weight: bold;
}

.about-section__title {
  margin-right: 5.26%;

  @include phones {
    margin-right: 0;
    margin-bottom: 5.5%;
  }
}

.about-section__add-forms {
  display: flex;

  @include phones {
    margin-bottom: 5.5%;
  }
}

.about-section__add-form-btn {
  margin-right: 13px;
  width: 21px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background-image: linear-gradient(to right, #006aed, #3f35cb);
}

.about-section__add-form {
  color: #383bcf;
  font-weight: 600;
}

.about-section__forms {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px 32px;

  @include phones {
    grid-template-columns: 1fr;
  }
}

.about-section__form {
  padding: 5.05%;
  height: 440px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #fff;
}

.about-section__form-add {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.about-section__skill-group {
  padding-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}

.about-section__form-input {
  height: 30px;
  border: none;
  outline: none;
}

.about-section__group-name-input {
  width: 55%;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #000;
}

.about-section__group-name-input-add {
  color: rgba(65, 76, 99, 0.51);
}

.about-section__confirm-del {
  display: flex;
}

.about-section__confirm {
  margin-right: 19px;
}

.about-section__confirm {
  width: 15px;
  height: 12px;
  background: svg-load("tick.svg", fill=#00d70a) no-repeat;
  background-size: contain;
}

.about-section__del {
  width: 14px;
  height: 12px;
  background: svg-load("cross.svg", fill=#bf2929) no-repeat;
  background-size: contain;
}

.about-section__skills {
  padding-top: 30px;
  margin-bottom: 13.05%;
}

.about-section__skills-item {
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  &:last-child{
    margin-bottom: 0;
  }
}

.about-section__skill-name-input {
  width: 55%;
  flex: 1;
}

.about-section__skill-value-input {
  width: 10%
}

.about-section__skill-persent-input {
  width: 10%;
  color: rgba(65, 76, 99, 0.7);
}

.about-section__write-erase {
  display: flex;
}

.about-section__write {
  margin-right: 22px;
  width: 14px;
  height: 14px;
  background: svg-load("pencil.svg", fill=rgba(0, 0, 0, 0.3)) no-repeat;
  background-size: contain;
}

.about-section__erase {
  width: 12px;
  height: 15px;
  background: svg-load("trash.svg", fill=rgba(0, 0, 0, 0.3)) no-repeat;
  background-size: contain;
}

.about-section__add-skill {
  display: flex;
  justify-content: flex-end;
  color: #414c63;
}

.about-section__form-input-add {
  outline: none;
  border: none;
  border-bottom: 1px solid #1f232d;
}

.about-section__skill-name-input-add {
  margin-right: 10px;
  padding-left: 10px;
  width: 38%;
  color: rgba(55, 62, 66, 0.5);
  @include tablets {
    width: 54%;
  }
}

.about-section__skill-value-input-add {
  width: 10%;
  text-align: center;
  @include tablets {
    width: 14%;
  }
}

.about-section__skill-persent-input-add {
  margin-right: 30px;
  width: 5%;
  text-align: left;
  color: rgba(65, 76, 99, 0.7);
  @include tablets {
    width: 9%;
    margin-right: 5px;
  }
}

.about-section__add-skill-btn {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  background-image: linear-gradient(to right, #006aed, #3f35cb);
}

.works-section__main-block {
  margin-bottom: 50px;
}

.works-section__title {
  margin-bottom: 5.26%;
}

.works-section__edit-form {
  padding: 2.64% 1.76%;
  background: #fff;
}

.edit-title {
  padding-bottom: 2.64% 0;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}

.works-section__form-title {
  margin-bottom: 4.39%;
}

.works-section__edit-work {
  display: flex;
  margin-bottom: 3.63%;

  @include tablets {
    flex-direction: column;
    align-items: center;
  }
}

.works-section__load {
  padding-top: 7.73%;
  padding-bottom: 5.91%;
  margin-right: 25px;
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  background-color: #dee4ed;
  border: dashed 1px #a1a1a1;

  @include tablets {
    width: 75%;
    margin-right: 0;
    margin-bottom: 4%;
    align-self: center;
  }

  @include phones {
    width: 95%;
  }
}

.works-section__load-text {
  margin-bottom: 25px;
  width: 45%;
  font-weight: 600;
  text-align: center;
  line-height: 2.12;
  opacity: 0.5;
}

.works-section__load-btn {
  padding: 19px 45px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-image: linear-gradient(to right, #006aed, #3f35cb);
}

.work-section__change-preview {
  display: none;

  @include tablets {
    display: block;
    color: #383bcf;
    font-weight: bold;
    margin-bottom: 4%;
  }
}

.works-section__edit-work-data {
  width: 48%;

  @include tablets {
    width: 75%;
  }
  
  @include phones {
    width: 95%;
  }
}

.works-section__edit-work-form {
  display: flex;
  flex-direction: column;
}

.works-section__label {
  margin-bottom: 30px;
  border-bottom: 1px solid #000;
}

.works-section__work-title {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
}

.works-section__input {
  width: 100%;
  margin-bottom: 18px;
  border: none;
  outline: none;
}

.works-section__description-label {
  border: none;
}

.works-section__description-textarea {
  margin-bottom: 18px;
  padding: 20px;
  padding-right: 20%;
  width: 100%;
  height: 146px;
  resize: none;
  border: 1px solid rgba(65, 76, 99, 0.5);
}

.works-section__tags-list {
  display: flex;
}

.works-section__tags-item {
  margin-right: 9px;
  padding: 1.55% 3.75%;
  display: flex;
  align-items: center;
  border-radius: 14.9px;
  background-color: #f4f4f4;
}

.works-section__tags-text {
  margin-right: 9px;
  font-size: 13px;
  font-weight: 600;
  opacity: 0.7;
}

.works-section__tags-btn {
  width: 11px;
  height: 11px;
  background: svg-load("cross.svg", fill=#414c63) no-repeat;
  background-size: contain;
}

.works-section__btn-block {
  display: flex;
  justify-content: flex-end;

  @include tablets {
    justify-content: center;
  }
}

.works-section__cansel-btn {
  margin-right: 60px;
  font-weight: 600;
  color: #383bcf;
}

.works-section__confirm-btn {
  padding: 24px 40px;
  color: #fff;
  border-radius: 30px;
  background-image: linear-gradient(to right, #006aed, #3f35cb);
}

.works-section__works-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  
  @include tablets {
    grid-template-columns: 1fr 1fr;
  }

  @include phones {
    grid-template-columns: 1fr;
  }
}

.works-section__works-item--add {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #006aed, #3f35cb);

  @include phones {
    padding: 7%;
    flex-direction: row;
    justify-content: flex-start;
  }
}

.works-section__add-work-btn {
  margin-bottom: 30px;
  width: 200px;
  height: 200px;
  font-size: 72px;
  font-weight: 300;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;

  @include phones {
    width: 50px;
    height: 50px;
    margin-bottom: 0;
    font-size: 24px;
  }
}

.works-section__add-work-text {
  width: 44%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 1.67;
  color: #fff;

  @include phones {
    width: 100%;
  }
}

.works-section__works-item {
  background-color: #fff;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
}

.works-section__work-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.works-section__work-content-block {
  padding: 11.13% 9.45%;
}

.works-section__work-content-title {
  margin-bottom: 8.94%;
  border-bottom: none;
}

.works-section__work-content-text {
  margin-bottom: 10.31%;
  font-weight: 600;
  line-height: 1.88;
  color: rgba(65, 76, 99, 0.7);
}

.works-section__work-content-link {
  margin-bottom: 15.45%;
  display: block;
  font-weight: 600;
  color: #383bcf;
}

.works-section__work-content-btn-block {
  display: flex;
  justify-content: space-between;
}

.edit-btns {
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
}

.edit-btn {
  position: relative;
  &::after {
    content: "";
    width: 17px;
    height: 17px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: -17px;
    display: block;
    background: svg-load("pencil.svg", fill=#383bcf) no-repeat;
    background-size: contain;
  }
}

.del-btn {
  position: relative;
  &::after {
    content: "";
    width: 14px;
    height: 14px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: -10px;
    display: block;
    background: svg-load("trash.svg", fill=#c92e2e) no-repeat;
    background-size: contain;
  }
}

.reviews-section__title {
  margin-bottom: 5.26%;
}

.reviews-section__edit-form {
  padding: 2.63% 1.75%;
  padding-bottom: 4.38%;
  margin-bottom: 30px;
  background-color: #fff;
}

.reviews-section__form-title {
  padding-bottom: 2.63%;
  margin-bottom: 4.39%;
}

.reviews-section__add-block {
  padding-right: 18.25%;
  display: flex;

  @include tablets {
    padding-right: 0;
  }

  @include phones {
    flex-direction: column;
    align-items: center;
  }
}

.reviews-section__add-photo-block {
  margin-right: 30px;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include phones {
    width: 100%;
    margin-right: 0;
    margin-bottom: 30px;
  }
}

.reviews-section__add-photo {
  margin-bottom: 27px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: svg-load("user.svg", fill=#fff, width=100px, height=112px;) center center no-repeat;
  background-color: #dee4ed;

  @include tablets {
    width: 120px;
    height: 120px;
  }
}

.reviews-section__photo-text {
  font-weight: 600;
  color: #383bcf;
}

.reviews-section__add-form-data-block {
  width: 70%;
  display: flex;
  flex-direction: column;

  @include phones {
    width: 100%;
  }
}

.reviews-section__add-data-row {
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  
  @include tablets {
    flex-direction: column;
  }
}

.reviews-section__label {
  width: 48%;
  border-bottom: 1px solid #414c63;

  @include tablets {
    width: 70%;
  }

  @include phones {
    width: 100%;
  }
}

.reviews-section__label-name {
  margin-right: 30px;

  @include tablets {
    margin-right: 0;
    margin-bottom: 30px;
  }
}

.reviews-section__label-title {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
}

.reviews-section__input {
  margin-bottom: 17px;
  border: none;
  outline: none;
  color: #414c63;
}

.reviews-section__add-data-textarea {
  width: 100%;
  margin-bottom: 30px;
}

.reviews-section__textarea-review {
  padding: 20px;
  width: 100%;
  height: 116px;
  resize: none;
  border: 1px solid rgba(0,0,0,0.2);
}

.reviews-section__btn-block {
  padding-right: 18.25%;
  display: flex;
  justify-content: flex-end;

  @include tablets {
    padding-right: 0;
  }
}

.reviews-section__cansel-btn {
  margin-right: 60px;
  font-weight: 600;
  color: #383bcf;
}

.reviews-section__confirm-btn {
  padding: 24px 40px;
  color: #fff;
  border-radius: 30px;
  background-image: linear-gradient(to right, #006aed, #3f35cb);
}

.reviews-section__reviews-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  @include tablets {
    grid-template-columns: 1fr 1fr;
  }

  @include phones {
    grid-template-columns: 1fr;
  }
}

.reviews-section__review-item--add {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #006aed, #3f35cb);

  @include phones {
    padding: 7%;
    flex-direction: row;
    justify-content: flex-start;
  }
}

.reviews-section__add-review-btn {
  margin-bottom: 30px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-size: 72px;
  font-weight: 300;
  color: #fff;
  border: 2px solid #fff;

  @include phones {
    width: 50px;
    height: 50px;
    margin-bottom: 0;
    font-size: 24px;
  }
}

.reviews-section__add-review-text {
  width: 53%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #fff;

  @include phones {
    width: 100%;
  }
}

.reviews-section__review-item {
  padding: 30px;
  background-color: #fff;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
}

.reviews-section__review-photo-block {
  margin-bottom: 30px;
  padding-bottom: 30px;
  display: flex;
  border-bottom: 1px solid #1f232d;
}

.reviews-section__photo {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

.reviews-section__photo-img {
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
  height: 100%;
  width: 100%;
}

.reviews-section__review-hero-title {
  border-bottom: none;
}

.reviews-section__review-hero-stuff {
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
}

.reviews-section__review-comment {
  margin-bottom: 85px;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.7;
}

.reviews-section__review-content-btn-block {
  display: flex;
  justify-content: space-between;
}

</style>