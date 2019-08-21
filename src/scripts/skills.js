import Vue from 'vue';
import axios from 'axios';

const skillName = {
  template: '#skillName',
  props: {
    skill : Object
  },
  methods: {
    skillPersentScale() {
      const circle = this.$refs['circle'];
      let findBlcTop = this.findCircle();
      const dashArray = parseInt(getComputedStyle(circle).getPropertyValue("stroke-dasharray"));
      const persent = (dashArray/100) * (100 - this.skill.percent);

      window.addEventListener('scroll', function(){
        const posTop = findBlcTop.findTop.getBoundingClientRect().top;
        const fixTop = posTop.toFixed();
        if (fixTop > 400 && fixTop < 500) {
          circle.style.strokeDashoffset = persent;
        }
      });
    },
    findCircle() {
      let circleBlock = this.$refs["skills-block"];
      return {
        findTop: circleBlock
      }
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
    skills : Array,
    category: Object
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
      skills : [],
      categories: [],
      baseURL: "https://webdev-api.loftschool.com",
      userID: 157
    }
  },
  methods: {
   async getCategories() {
    await axios.get(`${this.baseURL}/categories/${this.userID}`)
      .then(response => this.categories = response.data);
    },
    async getSkills() {
      await axios.get(`${this.baseURL}/skills/${this.userID}`)
        .then(response => this.skills = response.data);
    },
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId)
    }
  },
  created () {
    // const data = require('../data/skills.json');
    // this.skills = data;
    this.getCategories();
    this.getSkills();
  }
});