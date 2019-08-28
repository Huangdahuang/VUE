var example1  = new Vue({
    el : '#example1',
    data : {
      parent : '我是爸爸',
      items : [
        {message:'one'},
        {message:'two'},
        {message:'three'},
      ]
    },
})

var app = new Vue({
  el : '#app',
  data : {
    number : [
      9,7,6,1,4,6,7,8
    ],
    items : [
      {msg : 'Hello'},
      {msg : 'World'},
      {msg : '!'}
    ],
    fontColor:{
      color:'red'
    },
    size:{
      fontSize: '32px'
    }
  },
  computed: {
    eventNumber : function(){
      eventNumber = this.number;
      return eventNumber.sort()
    }
  }
})
