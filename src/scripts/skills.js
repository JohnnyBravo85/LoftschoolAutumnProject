import Vue from 'vue';

const skillName = {
  template: '#skillName',
  props: {
    skillName : String,
    skillPersent : Number
  },
  methods: {
    skillPersentScale() {
      const circle = this.$refs['circle'];
      const dashArray = parseInt(getComputedStyle(circle).getPropertyValue("stroke-dasharray"));
      const persent = (dashArray/100) * (100 - this.skillPersent);
      circle.style.strokeDashoffset = persent;
    }
  },
  mounted() {
    this.skillPersentScale();
  }
}

const groupSkillName = {
  template: '#groupSkillName',
  components: {
    skillName
  },
  props: {
    skill : Object
  }
}

new Vue({
  el: '#skills-root',
  template: '#skills-list',
  components: {
    groupSkillName
  },
  data() {
    return {
      skills : []
    }
  },
  created () {
    const data = require('../data/skills.json');
    this.skills = data;
  }
});