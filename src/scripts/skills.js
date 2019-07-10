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
      let findBlcTop = this.$root.findCircle();
      const dashArray = parseInt(getComputedStyle(circle).getPropertyValue("stroke-dasharray"));
      const persent = (dashArray/100) * (100 - this.skillPersent);
      circle.style.strokeDashoffset = persent;

      window.addEventListener('scroll', function(){
        const posTop = findBlcTop.findTop.getBoundingClientRect().top;
        const fixTop = posTop.toFixed();
        if (fixTop > 300 && fixTop < 350) {
        }
      });
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
  methods: {
    findCircle() {
      let circleBlock = this.$refs["skills-block"];
      return {
        findTop: circleBlock
      }
    }
  },
  created () {
    const data = require('../data/skills.json');
    this.skills = data;
  }
});