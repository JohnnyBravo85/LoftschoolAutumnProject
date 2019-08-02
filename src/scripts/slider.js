import Vue from 'vue';
import axios from 'axios';

const sliderText = {
  template: '#slider-text',
  props: {
    currentWork: Object
  }
}

const sliderTags = {
  template: '#slider-tags',
  props: {
    currentWork: Object
  },
  computed : {
    tagsArray () {
      return this.currentWork.techs.split(',');
    }
  }
}

const sliderDesck = {
  template: '#slider-desck',
  components: {
    sliderTags,
    sliderText
  },
  props: {
    currentWork: Object
  }
}

const sliderPreviews = {
  template: '#slider-previews',
  props: {
    works: Array,
    currentWork: Object
  }
}

const sliderControls = {
  template: '#slider-controls'
}

const sliderContent = {
  template: '#slider-content',
  props: {
    currentWork: Object
  }
}

const sliderDisplay = {
  template: '#slider-display',
  components: {
    sliderContent,
    sliderControls,
    sliderPreviews
  },
  props: {
    works: Array,
    currentWork: Object,
    currentWorkIndex: Number
  }
}

new Vue ({
  el: '#slider-root',
  template: '#slider',
  components: {
    sliderDisplay,
    sliderDesck
  },
  data () {
    return {
      works: [],
      baseURL: "https://webdev-api.loftschool.com",
      userID: 157,
      currentWorkIndex: 0
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentWorkIndex]
    },
  },
  watch: {
    currentWorkIndex(value) {
      if(value === this.works.length) {
        this.currentWorkIndex = 0;
      }

      if(value === -1) {
        this.currentWorkIndex = this.works.length - 1;
      }
    }
  },
  methods: {
    makeArrayRequirePhoto(data) {
      return data.map(item => {
        const requirePhoto = `${this.baseURL}/${item.photo}`;
        item.photo = requirePhoto;
        return item
      });
    },
    slideWorks(direction) {
      if(direction === 'next') {
        this.currentWorkIndex++
      }
      if(direction === 'prev') {
        this.currentWorkIndex--
      }
    },
    clickAtWork(workIndex) {
      this.currentWorkIndex = workIndex;
    },
    async getWorks() {
      await axios.get(`${this.baseURL}/works/${this.userID}`)
        .then(response => this.works = this.makeArrayRequirePhoto(response.data))
      console.log(this.works);
    }
  },
  created() {
    // const data = require('../data/slider.json');
    // this.sliderWorksArray = this.makeArrayRequirePhoto(data);
    this.getWorks();
    this.works = this.makeArrayRequirePhoto(this.works);
    this.currentWork = this.works[this.currentWorkIndex]
  }
})