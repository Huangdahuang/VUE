var example1  = new Vue({
    el : '#example-1',
    data : {
      counter : 0
    }
})

var example2 = new Vue({
  el : '#example-2',
  data : {
    name : 'Vue.js'
  },
  methods: {
    greet : function(event){
      alert("Hello" +this.name +"!")
      if(event){
        alert(event.target.tagName)
      }
    }
  },
})


var example3 = new Vue({
  el : '#example-3',
  data :{
    buttonColor :{
      color : 'red'
    }
  },
  methods: {
    say : function(message ){
      alert(message),
      this.buttonColor.color = 'green'
    }
  }
})