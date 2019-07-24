<template lang="pug">
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
              img(src="./../../images/content/1.jpg").works-section__work-img
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
              img(src="./../../images/content/2.jpg").works-section__work-img
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
              img(src="./../../images/content/3.jpg").works-section__work-img
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
              img(src="./../../images/content/4.jpg").works-section__work-img
            .works-section__work-content-block
              h3.works-section__work-content-title.edit-title Сайт школы образования
              p.works-section__work-content-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a.works-section__work-content-link http://loftschool.ru
              .works-section__work-content-btn-block
                button(type="button").edit-btn.edit-btns
                  .works-section__work-edit-text Править
                button(type="button").del-btn.edit-btns
                  .works-section__work-del-text Удалить
</template>

<style lang="pcss">
@import url("../../../node_modules/normalize.css/normalize.css");
@import url("../../styles/mixins.pcss");
@import url("../../styles/layout/base.pcss");

.page-section {
  padding: 5.25% 0;
  color: #414c63;
  background-image: linear-gradient(to top, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('../../images/content/train-bridge.jpg');
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
}

.works-section__main-block {
  margin-bottom: 50px;
}

.works-section__title {
  margin-bottom: 5.26%;
}

.admin-title {
  font-size: 21px;
  font-weight: bold;
}

.works-section__edit-form {
  padding: 2.64% 1.76%;
  background: #fff;
}

.edit-title {
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}

.works-section__form-title {
  margin-bottom: 4.39%;
  padding-bottom: 2.64%;
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

</style>