<template lang="pug">
  section.authorization.page-section
    form.authorization__block(@submit.prevent="login")
      .authorization__close-block
        .authorization__close
      h2.authorization__title Авторизация
      .authorization__login-block
        label.authorization__login-label.authorization__label
          h3.authorization__login-title.authorization-title Логин
          .authorization__input-block
            .authorization__login-icon.authorization__icon
            input(type="text" name="login" v-model="user.name").authorization__login-input.authorization__input
        label.authorization__password-label.authorization__label
          h3.authorization__login-title.authorization-title Пароль
          .authorization__input-block
            .authorization__password-icon.authorization__icon
            input(type="password" name="password" v-model="user.password").authorization__password-input.authorization__input
      button(type="submit").authorization__button Отправить
</template>

<script>

import $axios from '@/requests';

export default {
  data() {
    return {
      user: {
        name: 'JohnnyBravo240719',
        password: '123456789'
      }
    }
  },
  methods: {
   async login() {
     try {
       const {data: {token}} = await $axios.post('/login', this.user);
       localStorage.setItem('token', token);
       $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
       this.$router.push('/');
       console.log(token)
     } catch(error) {

     }
   }
 }
}

</script>

<style lang="pcss">
@import url("../../../node_modules/normalize.css/normalize.css");
@import url("../../styles/mixins.pcss");
@import url("../../styles/layout/base.pcss");


.authorization {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.authorization__block {
  padding: 2.5%;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.authorization__close-block {
  padding-right: 2%;
  display: flex;
  justify-content: flex-end;
}

.authorization__close {
  height: 19px;
  position: relative;
  transform: rotate(-45deg);
  border-left: 2px solid #414c63;
  &::before {
    content: "";
    height: 19px;
    position: absolute;
    left: -2px;
    transform: rotate(90deg);
    border-left: 2px solid #414c63;
  }
  &::after {
    content: "";
    width: 19px;
    height: 19px;
    position: absolute;
    left: -11px;
    transform: rotate(90deg);
  }
}

.authorization__title {
  margin-bottom: 6.29%;
  text-align: center;
  font-size: 36px;
  font-weight: 600;

  @include phones {
    font-size: 21px;
  }
}

.authorization__label {
  margin-bottom: 7.4%;
  padding-bottom: 2.77%;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #414c63;
}

.authorization-title {
  margin-bottom: 4.62%;
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.3);
}

.authorization__input-block {
  display: flex;
}

.authorization__icon {
  margin-right: 3.7%;
  width: 26px;
  height: 30px;
  background: svg-load("avatar.svg", fill=rgba(65, 76, 99, 0.3)) no-repeat;
  background-size: cover;
}

.authorization__input {
  border: none;
  outline: none;
  background: transparent;
}

.authorization__button {
  width: 80%;
  padding: 7.4% 0;
  align-self: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-image: linear-gradient(to right, #ad00ed, #5500f2);
  border-top-left-radius:50px;
  border-bottom-right-radius: 50px;

  @include phones {
    width: 100%;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
}

</style>