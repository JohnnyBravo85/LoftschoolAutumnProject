<template lang="pug">
  ul.about-section__skills-list
    li.about-section__skills-item
      input(value="GIT").about-section__skill-name-input.about-section__form-input
      input(value="80").about-section__skill-value-input.about-section__form-input
      input(value="%" readonly="readonly").about-section__skill-persent-input.about-section__form-input
      .about-section__write-erase
        button(type="button").about-section__write
        button(type="button").about-section__erase
</template>

<script>
export default {
  props: {
    categories: Array
  },
  
}
</script>
