(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{428:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"reviews-section__review-item-inner"},[i("div",{staticClass:"reviews-section__review-photo-block"},[i("div",{staticClass:"reviews-section__photo"},[i("img",{staticClass:"reviews-section__photo-img",attrs:{src:e.getAbsoluteImgPath,alt:""}})]),i("div",{staticClass:"reviews-section__review-text-block"},[i("div",{staticClass:"reviews-section__review-hero-title edit-title"},[e._v(e._s(e.review.author))]),i("div",{staticClass:"reviews-section__review-hero-stuff"},[e._v(e._s(e.review.occ))])])]),i("p",{staticClass:"reviews-section__review-comment"},[e._v(e._s(e.review.text))]),i("div",{staticClass:"reviews-section__review-content-btn-block"},[i("button",{staticClass:"edit-btn edit-btns",attrs:{type:"button"},on:{click:e.editReview}},[i("div",{staticClass:"reviews-section__work-edit-text"},[e._v("Править")])]),i("button",{staticClass:"del-btn edit-btns",attrs:{type:"button"},on:{click:function(t){return e.deleteCurrentReview()}}},[i("div",{staticClass:"reviews-section__work-del-text"},[e._v("Удалить")])])])])};s._withStripped=!0;var o=i(65),r=i(139),c={props:{review:Object},data:()=>({photoUrl:""}),methods:{...Object(o.b)("reviews",["deleteReview"]),...Object(o.d)("reviews",["SET_CURRENT_REVIEW"]),...Object(o.b)("tooltipe",["showTooltipe"]),editReview(){try{this.SET_CURRENT_REVIEW(this.review.id),this.$emit("editReview")}catch(e){this.showTooltipe({active:!0,message:e.message})}},deleteCurrentReview(){try{this.deleteReview(this.review.id)}catch(e){this.showTooltipe({active:!0,message:e.message})}}},computed:{getAbsoluteImgPath(){var e=this.review.photo;return`${r.a.defaults.baseURL}/${e}`}}},a=i(96),v=Object(a.a)(c,s,[],!1,null,null,null);v.options.__file="src/admin/components/review-item.vue";t.default=v.exports}}]);