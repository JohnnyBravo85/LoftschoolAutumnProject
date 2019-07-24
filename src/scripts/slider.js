import Vue from 'vue';

const sliderText = {
  template: '#slider-text',
  props: {
    sliderWorksObject: Object
  }
}

const sliderTags = {
  template: '#slider-tags',
  props: {
    sliderWorksObject: Object
  },
  computed : {
    tagsArray () {
      return this.sliderWorksObject.tags.split(',');
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
    sliderWorksObject: Object
  }
}

const sliderPreviews = {
  template: '#slider-previews',
  props: {
    sliderWorksArray: Array,
    sliderWorksObject: Object
  }
}

const sliderControls = {
  template: '#slider-controls'
}

const sliderContent = {
  template: '#slider-content',
  props: {
    sliderWorksObject: Object
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
    sliderWorksArray: Array,
    sliderWorksObject: Object,
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
      sliderWorksArray: [],
      currentWorkIndex: 0
    }
  },
  computed: {
    sliderWorksObject() {
      return this.sliderWorksArray[this.currentWorkIndex]
    }
  },
  watch: {
    currentWorkIndex(value) {
      if(value === this.sliderWorksArray.length) {
        this.currentWorkIndex = 0;
      }

      if(value === -1) {
        this.currentWorkIndex = this.sliderWorksArray.length - 1;
      }
    }
  },
  methods: {
    makeArrayRequirePhoto(data) {
      return data.map(function(item) {
        const requirePhoto = require(`../images/content/${item.photo}`);
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
    }
  },
  created() {
    const data = require('../data/slider.json');
    this.sliderWorksArray = this.makeArrayRequirePhoto(data);
  }
})