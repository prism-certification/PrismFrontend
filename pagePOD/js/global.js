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
        // The layout mode, possible values are "grid" or "list".
		layout: 'company',

        articles: [{
            "title": "What You Need To Know About CSS Variables",
            "url": "http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
            "image": {
                "large": "https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg",
                "small": "https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg"
            }
        },
        {
            "title": "Freebie: 4 Great Looking Pricing Tables",
            "url": "http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
            "image": {
                "large": "https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg",
                "small": "https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg"
            }
        },
        {
            "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
            "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
            "image": {
                "large": "https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg",
                "small": "https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg"
            }
        },
        {
            "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
            "url": "http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
            "image": {
                "large": "https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg",
                "small": "https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg"
            }
        },
        {
            "title": "Learn SQL In 20 Minutes",
            "url": "http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
            "image": {
                "large": "https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg",
                "small": "https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg"
            }
        },
        {
            "title": "Creating Your First Desktop App With HTML, JS and Electron",
            "url": "http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
            "image": {
                "large": "https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg",
                "small": "https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg"
            }
        }]
	}
});


new Vue({
	el: '#carousel',
  components: {
  	'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },
});
