import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/paralax";
import "./scripts/burger-menu";
import "./scripts/review-slider";
import "./scripts/skills";
import "./scripts/slider";

import Validate from "./scripts/validate-form.js";

const form = document.querySelector('.js-form');

if(form) {
  const validate = new Validate({
    element: 'j-form'
  });
  validate.init();
}