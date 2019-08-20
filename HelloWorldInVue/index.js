var app = new Vue({
    el : '#app',
    data : {
        message : 'Hello World'
    }
});

app.message = 'I Have change the data';


var app2 = new Vue({
    el : '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el : '#app-3',
    data : {
        seen :true
    }
});

var app4 = new Vue({
    el : '#app-4',
    data : {
        todos :[
            { text : '英文' },
            { text : '数学' },
        ]
    }
});


var app5 = new Vue({
    el : '#app-5',
    data : {
        message : '这是我第一次使用Vue'
    },
    methods : {
        reverseMessage : function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })