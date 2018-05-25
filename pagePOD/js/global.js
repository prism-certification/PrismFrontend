var demo = new Vue({
  el: '#main',
  data: {
  	actived: 'projects'
  },
  methods: {
  	makeActive: function(item){
    	this.actived = item;
    }
  }
})

var view = new Vue({
	el: '#devCard',
	data: {
		layout: 'company',
	}
});


new Vue({
	el: '#carousel',
  components: {
  	'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },
});
