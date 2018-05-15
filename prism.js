const app = new Vue({
    el: '#app',
    data: {
      persons: [],
      personStyle: [
        'person'
      ]
    },
    created() {
      fetch('http://127.0.0.1:8000/persons')
      .then(response => response.json())
      .then(json => {
        this.persons = json
      })
    }
})