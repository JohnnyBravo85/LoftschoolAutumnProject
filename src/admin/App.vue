<template lang="pug">
  .wrapper-admin
    template(v-if="$route.meta.public")
      router-view
    .maincontent(v-else-if="userIsLogged")
      appHeader
      appNav
      router-view
      tooltipe
</template>

<script>

import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'app',
  components : {
    appHeader: () => import('./components/app-header.vue'),
    appNav: () => import('./components/app-nav.vue'),
    about: () => import('./components/about.vue'),
    works: () => import('./components/works.vue'),
    reviews: () => import('./components/reviews.vue'),
    login: () => import('./components/login.vue'),
    tooltipe: () => import('./components/tooltipe.vue')
  },
  computed: {
    ...mapGetters("user", ["userIsLogged"]),
    ...mapState("tooltipe", {
      status: state => state.toolData.active
    }),
 },
 methods:{
    ...mapActions('tooltipe',['hideTooltipe']),
  },
  watch:{
    status:function(){
      if(this.status){
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          this.hideTooltipe();
        }, 3000);
      }
    }
  }
}

</script>

<style lang="pcss" scoped>
@import url("../../node_modules/normalize.css/normalize.css");
@import url("../styles/mixins.pcss");
@import url("../styles/layout/base.pcss");

/* .error {
  z-index: 100;
  background: #cd1515;
  color: #fff;
  padding: 12px 20px;
  font-size: 14px;
  white-space: nowrap;
  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 0;
    border-bottom-color: #cd1515;
    border-bottom-width: 7px;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
} */

/* .page-section {
  padding: 5.25% 0;
  color: #414c63;
  background-image: linear-gradient(to top, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('../images/content/train-bridge.jpg');
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
}

.admin-title {
  font-size: 21px;
  font-weight: bold;
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
} */
</style>