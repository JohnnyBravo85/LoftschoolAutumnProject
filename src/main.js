import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/paralax";
import "./scripts/burger-menu";
import "./scripts/review-slider";
import "./scripts/skills";
import "./scripts/slider"